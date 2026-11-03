/**
 * The Quiet Kind — Cloudflare Worker API.
 * Static game files are served from ./public by Workers Static Assets; this Worker only handles /api/*.
 *
 *   POST /api/signup    { email, password }          -> { email }   (sets session cookie)
 *   POST /api/login     { email, password }          -> { email }   (sets session cookie)
 *   POST /api/logout                                 -> { ok }
 *   GET  /api/me                                     -> { email }  (email is null when signed out)
 *   POST /api/password  { current, next }            -> { ok }      (signs out every other device)
 *   GET  /api/save                                   -> { progress, endings, settings, updated }
 *   PUT  /api/save      { slot, data }               -> { ok, updated }
 *
 * Passwords: PBKDF2-SHA256, 100,000 iterations, 16-byte random salt (Web Crypto, built into Workers).
 * Sessions: random 32-byte token in an HttpOnly cookie; only its SHA-256 is stored in D1.
 */

const COOKIE = 'qk_session';
const SESSION_DAYS = 30;
const PBKDF2_ITER = 100000;          // Workers' Web Crypto caps PBKDF2 at 100k iterations
const SLOTS = new Set(['progress', 'endings', 'settings']);
const MAX_SAVE_BYTES = 256 * 1024;
const LOGIN_MAX_FAILS = 8, LOGIN_WINDOW = 15 * 60;   // 8 wrong passwords per 15 minutes per email

const enc = new TextEncoder();
const now = () => Math.floor(Date.now() / 1000);
const b64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers } });
}
const fail = (status, error) => json({ error }, status);

async function pbkdf2(password, salt, iterations) {
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  return crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations }, key, 256);
}
async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await pbkdf2(password, salt, PBKDF2_ITER);
  return `pbkdf2-sha256$${PBKDF2_ITER}$${b64(salt)}$${b64(hash)}`;
}
function sameBytes(a, b) {            // constant-time compare
  if (a.length !== b.length) return false;
  let d = 0; for (let i = 0; i < a.length; i++) d |= a[i] ^ b[i];
  return d === 0;
}
async function verifyPassword(password, stored) {
  const [alg, iter, salt, hash] = String(stored).split('$');
  if (alg !== 'pbkdf2-sha256') return false;
  const got = new Uint8Array(await pbkdf2(password, unb64(salt), +iter));
  return sameBytes(got, unb64(hash));
}
// a fixed dummy hash so "no such email" takes as long as "wrong password"
let DUMMY = null;
const dummyHash = async () => (DUMMY = DUMMY || (await hashPassword('not-a-real-password')));

async function sha256hex(s) {
  const h = await crypto.subtle.digest('SHA-256', enc.encode(s));
  return [...new Uint8Array(h)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
function cookieHeader(token, maxAge, secure) {
  return `${COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure ? '; Secure' : ''}`;
}
function readCookie(req) {
  const m = (req.headers.get('cookie') || '').match(new RegExp(`(?:^|;\\s*)${COOKIE}=([A-Za-z0-9_-]+)`));
  return m ? m[1] : null;
}
async function newSession(env, userId, req) {
  const raw = b64(crypto.getRandomValues(new Uint8Array(32))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const t = now();
  await env.DB.prepare('INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)')
    .bind(await sha256hex(raw), userId, t, t + SESSION_DAYS * 86400).run();
  return cookieHeader(raw, SESSION_DAYS * 86400, new URL(req.url).protocol === 'https:');
}
async function currentUser(env, req) {
  const raw = readCookie(req); if (!raw) return null;
  const th = await sha256hex(raw);
  const row = await env.DB.prepare('SELECT u.id, u.email, u.pass_hash, s.expires_at FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_hash = ?').bind(th).first();
  if (!row) return null;
  if (row.expires_at < now()) { await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(th).run(); return null; }
  return { id: row.id, email: row.email, pass_hash: row.pass_hash, tokenHash: th };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function checkCreds(email, password) {
  email = String(email || '').trim().toLowerCase();
  password = String(password || '');
  if (!EMAIL_RE.test(email) || email.length > 254) return { error: 'Please enter a valid email address.' };
  if (password.length < 8) return { error: 'Password must be at least 8 characters.' };
  if (password.length > 200) return { error: 'That password is too long.' };
  return { email, password };
}
async function readBody(req) { try { return await req.json(); } catch { return {}; } }

async function tooManyFails(env, email) {
  const r = await env.DB.prepare('SELECT fails, window_start FROM login_attempts WHERE email = ?').bind(email).first();
  return r && now() - r.window_start < LOGIN_WINDOW && r.fails >= LOGIN_MAX_FAILS;
}
async function noteFail(env, email) {
  const t = now();
  await env.DB.prepare(`INSERT INTO login_attempts (email, fails, window_start) VALUES (?, 1, ?)
    ON CONFLICT(email) DO UPDATE SET fails = CASE WHEN ? - window_start > ? THEN 1 ELSE fails + 1 END,
    window_start = CASE WHEN ? - window_start > ? THEN ? ELSE window_start END`).bind(email, t, t, LOGIN_WINDOW, t, LOGIN_WINDOW, t).run();
}

async function route(req, env) {
  const url = new URL(req.url), path = url.pathname.replace(/\/+$/, ''), method = req.method;
  if (method !== 'GET') {
    const origin = req.headers.get('origin');
    if (origin && origin !== url.origin) return fail(403, 'Bad origin.');
  }

  if (path === '/api/signup' && method === 'POST') {
    const body = await readBody(req); const c = checkCreds(body.email, body.password);
    if (c.error) return fail(400, c.error);
    const exists = await env.DB.prepare('SELECT 1 FROM users WHERE email = ?').bind(c.email).first();
    if (exists) return fail(409, 'An account with that email already exists. Try logging in.');
    const t = now();
    const res = await env.DB.prepare('INSERT INTO users (email, pass_hash, created_at, updated_at) VALUES (?, ?, ?, ?)').bind(c.email, await hashPassword(c.password), t, t).run();
    const cookie = await newSession(env, res.meta.last_row_id, req);
    return json({ email: c.email }, 201, { 'set-cookie': cookie });
  }

  if (path === '/api/login' && method === 'POST') {
    const body = await readBody(req);
    const email = String(body.email || '').trim().toLowerCase(), password = String(body.password || '');
    if (!email || !password) return fail(400, 'Enter your email and password.');
    if (await tooManyFails(env, email)) return fail(429, 'Too many tries. Please wait 15 minutes and try again.');
    const user = await env.DB.prepare('SELECT id, email, pass_hash FROM users WHERE email = ?').bind(email).first();
    const ok = await verifyPassword(password, user ? user.pass_hash : await dummyHash());
    if (!user || !ok) { await noteFail(env, email); return fail(401, 'Wrong email or password.'); }
    await env.DB.prepare('DELETE FROM login_attempts WHERE email = ?').bind(email).run();
    await env.DB.prepare('DELETE FROM sessions WHERE user_id = ? AND expires_at < ?').bind(user.id, now()).run();
    return json({ email: user.email }, 200, { 'set-cookie': await newSession(env, user.id, req) });
  }

  if (path === '/api/logout' && method === 'POST') {
    const raw = readCookie(req);
    if (raw) await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(await sha256hex(raw)).run();
    return json({ ok: true }, 200, { 'set-cookie': cookieHeader('', 0, url.protocol === 'https:') });
  }

  // everything below needs a signed-in user (except /api/me, which just reports who is signed in)
  const user = await currentUser(env, req);
  if (path === '/api/me' && method === 'GET') return json({ email: user ? user.email : null });
  if (!user) return fail(401, 'Please log in.');

  if (path === '/api/password' && method === 'POST') {
    const body = await readBody(req);
    if (!(await verifyPassword(String(body.current || ''), user.pass_hash))) return fail(403, 'Your current password is wrong.');
    const c = checkCreds(user.email, body.next);
    if (c.error) return fail(400, c.error);
    if (body.current === body.next) return fail(400, 'The new password is the same as the old one.');
    await env.DB.batch([
      env.DB.prepare('UPDATE users SET pass_hash = ?, updated_at = ? WHERE id = ?').bind(await hashPassword(c.password), now(), user.id),
      env.DB.prepare('DELETE FROM sessions WHERE user_id = ? AND token_hash != ?').bind(user.id, user.tokenHash),
    ]);
    return json({ ok: true });
  }

  if (path === '/api/save' && method === 'GET') {
    const { results } = await env.DB.prepare('SELECT slot, data, updated_at FROM saves WHERE user_id = ?').bind(user.id).all();
    const out = { progress: null, endings: null, settings: null, updated: {} };
    for (const r of results) { try { out[r.slot] = JSON.parse(r.data); } catch { } out.updated[r.slot] = r.updated_at; }
    return json(out);
  }

  if (path === '/api/save' && method === 'PUT') {
    const text = await req.text();
    if (text.length > MAX_SAVE_BYTES) return fail(413, 'Save is too large.');
    let body; try { body = JSON.parse(text); } catch { return fail(400, 'Bad save data.'); }
    if (!SLOTS.has(body.slot)) return fail(400, 'Unknown save slot.');
    const t = now();
    await env.DB.prepare(`INSERT INTO saves (user_id, slot, data, updated_at) VALUES (?, ?, ?, ?)
      ON CONFLICT(user_id, slot) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`).bind(user.id, body.slot, JSON.stringify(body.data ?? null), t).run();
    return json({ ok: true, updated: t });
  }

  if (path === '/api/save' && method === 'DELETE') {
    await env.DB.prepare("DELETE FROM saves WHERE user_id = ? AND slot = 'progress'").bind(user.id).run();
    return json({ ok: true });
  }

  return fail(404, 'Not found.');
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname.startsWith('/api/')) {
      try { return await route(req, env); }
      catch (e) { console.error(e); return fail(500, 'Something went wrong. Please try again.'); }
    }
    return env.ASSETS.fetch(req);
  },
};
