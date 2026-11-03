/* The Quiet Kind — story director. Runs chapters as quests: walk to the marker, talk, watch the scene play
   in a cinematic close-up, choose, write in the diary. Also: quest log, keepsakes, map + fast travel, settings, saves, endings. */
(function () {
  'use strict';
  const D = window.STORY_DATA, SC = D.scenes, BY = {}; SC.forEach((s, i) => { BY[s.id] = s; s.index = i; });
  const NAMES = Object.assign({}, World.NAMES);
  const $ = (s) => document.querySelector(s), G = $('#game');
  const dlg = $('#dlg'), dWho = dlg.querySelector('.d-who'), dTo = dlg.querySelector('.d-to'), dText = dlg.querySelector('.d-text');
  const optsEl = $('#opts'), paper = $('#paper'), overlay = $('#overlay'), bannerEl = $('#banner'), toastEl = $('#toast'), questEl = $('#quest');
  const Q = new URLSearchParams(location.search), SPEED = World.SPEED;
  const AUTO = Q.get('autoplay');
  const SAVE = 'quiet_kind_v1', ENDS = 'quiet_kind_endings', SETS = 'quiet_kind_settings';
  const store = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }, del(k) { try { localStorage.removeItem(k); } catch (e) { } } };
  const REL = Object.keys(D.names).filter((k) => !['eli', 'nobody', 'wanting', 'knowing'].includes(k));
  const fresh = () => { const s = { HEART: 4, STONE: 3, DRIFT: 1, NERVE: 0, flags: {}, journal: [], done: {}, scene: SC[0].id, chapter: 0, items: [], visited: {}, pages: {}, log: [] }; REL.forEach((k) => (s[k] = 0)); s.ma = 5; s.rook = 4; return s; };
  let st = fresh(), token = 0;
  const sets = Object.assign({ cps: 48, music: .5, sfx: true }, store.get(SETS, {}));
  World.audio.vol = sets.music; World.audio.sfx = sets.sfx;
  const wait = (ms) => new Promise((r) => setTimeout(r, ms / SPEED));

  // ---------------- account & cloud saves (Cloudflare Worker + D1) ----------------
  const cloud = (() => {
    let user = null, online = false; const timers = {};
    async function api(path, method = 'GET', body) {
      const r = await fetch('/api' + path, { method, credentials: 'same-origin', headers: body ? { 'content-type': 'application/json' } : {}, body: body ? JSON.stringify(body) : undefined });
      let j = {}; try { j = await r.json(); } catch (e) { }
      if (!r.ok) { const e = new Error(j.error || 'Could not reach the server. Check your connection.'); e.status = r.status; throw e; }
      return j;
    }
    const pushAllLocal = async () => {
      const p = store.get(SAVE, null), e = store.get(ENDS, null);
      await Promise.all([p && api('/save', 'PUT', { slot: 'progress', data: p }), e && api('/save', 'PUT', { slot: 'endings', data: e }), api('/save', 'PUT', { slot: 'settings', data: sets })].filter(Boolean)).catch(() => {});
    };
    return {
      get user() { return user; }, get online() { return online; },
      async check() {
        if (location.protocol === 'file:' || AUTO) return null;
        try { const j = await api('/me'); user = j.email || null; online = true; } catch (e) { user = null; online = false; }
        return user;
      },
      // a brand-new account keeps whatever was played on this device as a guest
      async signup(email, password) { const j = await api('/signup', 'POST', { email, password }); user = j.email; online = true; await pushAllLocal(); return user; },
      async login(email, password) { const j = await api('/login', 'POST', { email, password }); user = j.email; online = true; await this.pull(); return user; },
      async logout() { try { await api('/logout', 'POST'); } catch (e) { } user = null; store.del(SAVE); store.del(ENDS); },
      changePassword(current, next) { return api('/password', 'POST', { current, next }); },
      async pull() {
        const j = await api('/save');
        store.del(SAVE); store.del(ENDS);
        if (j.progress) store.set(SAVE, j.progress);
        if (j.endings) store.set(ENDS, j.endings);
        if (j.settings) { Object.assign(sets, j.settings); store.set(SETS, sets); World.audio.vol = sets.music; World.audio.sfx = sets.sfx; }
      },
      push(slot, data) {
        if (!user) return; clearTimeout(timers[slot]);
        timers[slot] = setTimeout(() => api('/save', 'PUT', { slot, data }).then(() => (online = true)).catch((e) => { if (e.status === 401) user = null; }), slot === 'progress' ? 1200 : 300);
      },
      pushNow(slot, data) { if (!user) return Promise.resolve(); clearTimeout(timers[slot]); return api('/save', 'PUT', { slot, data }).catch(() => {}); },
      wipeProgress() { if (user) return api('/save', 'DELETE').catch(() => {}); return Promise.resolve(); },
    };
  })();
  const saveSets = () => { store.set(SETS, sets); cloud.push('settings', sets); };
  addEventListener('pagehide', () => { if (cloud.user && st.scene) navigator.sendBeacon && fetch('/api/save', { method: 'PUT', keepalive: true, credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ slot: 'progress', data: st }) }).catch(() => {}); });

  // ---------------- expressions & effects ----------------
  const cache = {};
  function test(expr) {
    if (!expr) return true;
    let f = cache[expr];
    if (!f) { const js = expr.replace(/\band\b/g, '&&').replace(/\bor\b/g, '||').replace(/\bnot\b/g, '!'); f = cache[expr] = new Function('S', 'flag', 'with (S) { return (' + js + '); }'); }
    try { return !!f(st, (k) => !!st.flags[k]); } catch (e) { console.error('expr', expr, e); return false; }
  }
  function apply(fx) {
    if (!fx) return;
    for (const [k, v] of Object.entries(fx)) {
      if (k === 'set') { [].concat(v).forEach((f) => (st.flags[f] = true)); continue; }
      if (k === 'eq') { Object.assign(st, v); continue; }
      if (typeof st[k] === 'number') { const lim = ['HEART', 'STONE', 'DRIFT'].includes(k) ? [0, 10] : k === 'NERVE' ? [0, 40] : [-5, 10]; st[k] = Math.max(lim[0], Math.min(lim[1], st[k] + v)); }
    }
    G.classList.toggle('drift', st.DRIFT >= 6 && st.DRIFT < 8); G.classList.toggle('drift-heavy', st.DRIFT >= 8);
  }
  const save = () => { if (!AUTO) { store.set(SAVE, st); cloud.push('progress', st); } };

  // ---------------- small UI helpers ----------------
  let tT; function toast(m) { toastEl.textContent = m; toastEl.classList.add('show'); clearTimeout(tT); tT = setTimeout(() => toastEl.classList.remove('show'), 2600 / Math.min(SPEED, 3)); }
  function banner(a, b, c, cls) { const e = document.createElement('div'); e.className = 'bn ' + (cls || ''); e.innerHTML = `<div class="b1">${a}</div><div class="b2">${b}</div>${c ? `<div class="b3">${c}</div>` : ''}`; bannerEl.innerHTML = ''; bannerEl.appendChild(e); e.style.animationDuration = 3.2 / Math.min(SPEED, 4) + 's'; setTimeout(() => e.remove(), 3300 / Math.min(SPEED, 4)); World.audio.chime(); }
  const cap = document.createElement('div'); cap.id = 'caption'; cap.style.cssText = 'position:absolute;left:calc(22px + env(safe-area-inset-left,0px));top:calc(7vh + 14px);z-index:8;pointer-events:none;opacity:0;transition:opacity 1s;text-shadow:0 1px 4px #000'; G.appendChild(cap);
  function caption(place, date) { cap.innerHTML = `<div style="font:600 calc(var(--u)*1.05) Cinzel;color:#fff">${place}</div><div style="font-size:calc(var(--u)*.8);color:#e0d6c0;letter-spacing:.12em">${date || ''}</div>`; cap.style.opacity = 1; clearTimeout(caption.t); caption.t = setTimeout(() => (cap.style.opacity = 0), 4200 / SPEED); }
  const nm = (k) => (k === 'eli' ? 'Eli' : NAMES[k] || k);
  const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI'];
  const chName = (n) => (n === 0 ? 'Prologue' : 'Chapter ' + ROMAN[n]);

  // ---------------- input routing ----------------
  let advance = null; const handlers = [];
  addEventListener('keydown', (e) => {
    const k = e.key;
    if (e.target && /^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (overlay.classList.contains('show')) {
      const kind = overlay.dataset.kind;
      if (k === 'Escape' && ['menu', 'log', 'bag', 'map', 'settings', 'history'].includes(kind)) { if (kind === 'history') $('#hc').click(); else closeOv(); return; }
      if ((k === 'j' || k === 'J') && kind === 'log') { closeOv(); return; }
      if ((k === 'm' || k === 'M') && kind === 'map') { closeOv(); return; }
      if ((k === 'b' || k === 'B') && kind === 'bag') { closeOv(); return; }
      for (const h of handlers.slice().reverse()) if (h(e)) return;
      return;
    }
    for (const h of handlers.slice().reverse()) if (h(e)) return;
    if (World.mode === 'explore' && !World.busy) {
      if (k === 'Escape') openMenu(); else if (k === 'j' || k === 'J') openLog(); else if (k === 'm' || k === 'M') openMap(); else if (k === 'b' || k === 'B') openBag();
    }
    if ((k === ' ' || k === 'Enter') && advance) { e.preventDefault(); advance(); }
  });
  dlg.addEventListener('click', (e) => { if (e.target.closest('.d-ctrl')) return; advance && advance(); });
  paper.addEventListener('click', () => advance && advance());
  let autoOn = false, skipping = false;
  $('#d-auto').onclick = () => { autoOn = !autoOn; $('#d-auto').classList.toggle('on', autoOn); if (autoOn && dlg.classList.contains('done')) advance && advance(); };
  $('#d-skip').onclick = () => { skipping = true; advance && advance(); };
  $('#d-log').onclick = () => openHistory();
  $('#b-log').onclick = () => openLog(); $('#b-map').onclick = () => openMap(); $('#b-bag').onclick = () => openBag(); $('#b-menu').onclick = () => openMenu();
  questEl.onclick = () => { if (World.guide()) toast('Walking to the quest marker…'); };

  // ---------------- dialogue ----------------
  let curScene = null, pendingNext = null;
  function inferTo(ln) { if (ln.to) return ln.to; if (!ln.s || ln.k === 'narr') return null; if (ln.s === 'eli') return (curScene && curScene.talk) || null; return 'eli'; }
  function say(ln) {
    return new Promise((resolve) => {
      const kind = ln.k || (ln.s === 'wanting' || ln.s === 'knowing' ? 'inner' : '');
      if (kind === 'letter' || kind === 'wire') { showPaper(kind, ln).then(resolve); return; }
      dlg.className = ''; if (kind) dlg.classList.add(kind);
      const to = inferTo(ln);
      dWho.textContent = kind === 'narr' ? '' : kind === 'thought' ? 'Eli' : nm(ln.s);
      dTo.textContent = kind === 'thought' ? '(thinking)' : to && kind !== 'narr' && to !== 'nobody' ? `▸ ${nm(to)}` : '';
      World.speak(kind === 'narr' || kind === 'thought' ? null : ln.s);
      st.log.push([kind === 'narr' ? '' : kind === 'thought' ? 'Eli (thinking)' : nm(ln.s) + (to ? ' ▸ ' + nm(to) : ''), ln.t]); if (st.log.length > 120) st.log.shift();
      const text = ln.t; let i = 0, done = false, timer = null;
      const fin = () => { clearInterval(timer); dText.textContent = text; done = true; dlg.classList.add('done'); if (AUTO || skipping) setTimeout(() => advance === adv && adv(), skipping ? 60 : 30 / SPEED); else if (autoOn) setTimeout(() => { if (advance === adv) adv(); }, 900 + text.length * 32); };
      const adv = () => { if (!done) return fin(); advance = null; dlg.classList.remove('done'); resolve(); };
      advance = adv;
      if (AUTO || skipping || sets.cps >= 200) { dText.textContent = ''; fin(); return; }
      dText.textContent = ''; const cps = kind === 'inner' ? sets.cps * .7 : sets.cps;
      timer = setInterval(() => { i += 1; dText.textContent = text.slice(0, i); if (i % 3 === 0) World.audio.tick(); if (i >= text.length) fin(); }, 1000 / cps);
    });
  }
  function showPaper(kind, ln) {
    return new Promise((resolve) => {
      paper.className = kind; dlg.classList.add('hidden');
      paper.querySelector('.p-head').textContent = kind === 'card' ? ln.title : kind === 'wire' ? `Territorial Telegraph · ${nm(ln.s)} to ${nm(ln.to || 'eli')}` : `Letter · from ${nm(ln.s)} to ${nm(ln.to || 'eli')}`;
      paper.querySelector('.p-text').textContent = kind === 'card' ? ln.body : ln.t;
      paper.querySelector('.p-foot').textContent = World.TOUCH ? 'tap to continue' : 'click or press Space';
      if (kind !== 'card') st.log.push([`${kind === 'wire' ? 'Wire' : 'Letter'} · ${nm(ln.s)} ▸ ${nm(ln.to || 'eli')}`, ln.t]);
      World.audio.page();
      const go = () => { advance = null; paper.classList.add('hidden'); resolve(); };
      setTimeout(() => (advance = go), 250 / SPEED);
      if (AUTO || skipping) setTimeout(() => go(), 300 / SPEED);
    });
  }
  async function lines(arr) {
    if (!arr) return;
    for (const ln of arr) {
      if (ln.if && !test(ln.if)) continue;
      if (ln.fx) apply(ln.fx);
      if (ln.item) { if (!st.items.find((x) => x.id === ln.item.id)) st.items.push(ln.item); dlg.classList.add('hidden'); banner('Keepsake obtained', ln.item.name, ln.item.desc, 'item'); $('#b-bag').classList.add('dot'); await wait(1600); continue; }
      if (ln.card) { await showPaper('card', ln.card); continue; }
      if (ln.ride) { await ride(ln.ride, curScene.loc); continue; }
      if (ln.choice) {
        const o = await choose(ln.choice); apply(o.fx);
        if (/^["“]/.test(o.t) && !o.silent) { dlg.classList.remove('hidden'); await say({ s: 'eli', t: o.t.replace(/^["“]|["”]$/g, '') }); }
        if (o.next) pendingNext = o.next;
        await lines(o.say); continue;
      }
      if (ln.t === undefined) continue;
      dlg.classList.remove('hidden'); await say(ln);
    }
  }
  function choose(ch) {
    return new Promise((resolve) => {
      skipping = false; dlg.classList.add('hidden');
      const opts = ch.opts.filter((o) => !o.if || test(o.if));
      if (AUTO) { optsEl.classList.add('hidden'); return resolve(bot.pick(opts)); }
      optsEl.innerHTML = ''; World.speak(null);
      if (ch.prompt) { const p = document.createElement('div'); p.className = 'o-prompt'; p.textContent = ch.prompt; optsEl.appendChild(p); }
      let timer = null, kb = -1; const silent = opts.find((o) => o.silent);
      const btns = opts.map((o, i) => {
        const b = document.createElement('button'); const locked = o.req && !test(o.req);
        b.className = 'opt' + (o.silent ? ' silent' : '') + (locked ? ' locked' : ''); b.style.animationDelay = `${i * 60}ms`;
        b.innerHTML = `<span>${o.t}${locked && o.lock ? `<span class="lk">${o.lock}</span>` : ''}</span>`;
        b.onclick = () => { if (locked) { toast(o.lock || 'Not yet.'); return; } if (o.crack && !b._c) { b._c = true; b.classList.add('cracked'); toast(o.crackNote || 'Your nerve fails.'); World.emote('eli', 'stress'); return; } fin(o); };
        optsEl.appendChild(b); return b;
      });
      if (silent) { const s = ch.timer || 10; const t = document.createElement('div'); t.className = 'o-timer'; t.innerHTML = `<span style="animation-duration:${s}s"></span>`; optsEl.appendChild(t); timer = setTimeout(() => fin(silent), s * 1000); }
      optsEl.classList.remove('hidden');
      const h = (e) => {
        const n = parseInt(e.key, 10); if (n >= 1 && n <= btns.length) { btns[n - 1].click(); return true; }
        if (['ArrowDown', 'ArrowUp', 's', 'w'].includes(e.key)) { kb = (kb + (e.key === 'ArrowUp' || e.key === 'w' ? -1 : 1) + btns.length) % btns.length; btns.forEach((b, i) => b.classList.toggle('kb', i === kb)); return true; }
        if ((e.key === 'Enter' || e.key === ' ' || e.key === 'f') && kb >= 0) { btns[kb].click(); return true; }
        return false;
      };
      handlers.push(h);
      function fin(o) { clearTimeout(timer); handlers.splice(handlers.indexOf(h), 1); optsEl.classList.add('hidden'); World.audio.blip(); resolve(o); }
    });
  }
  function diary(opts, chapterLabel) {
    return new Promise((resolve) => {
      const list = opts.filter((o) => !o.if || test(o.if));
      const commit = (o) => { apply(o.fx); st.journal.push({ ch: chapterLabel, t: o.t }); closeOv(); resolve(); };
      if (AUTO) return commit(bot.pick(list));
      show(`<div class="scr"><div class="diary"><div class="dh">Eli's diary · ${chapterLabel}</div><div class="dq">The lamp is low. You open the diary and write one line.</div><div id="dopts"></div></div></div>`, 'diary');
      const box = $('#dopts');
      list.forEach((o, i) => { const b = document.createElement('button'); b.innerHTML = `<b>${i + 1}</b>${o.t}`; b.onclick = () => { handlers.splice(handlers.indexOf(h), 1); commit(o); }; box.appendChild(b); });
      const h = (e) => { const n = parseInt(e.key, 10); if (n >= 1 && n <= list.length) { box.children[n - 1].click(); return true; } return false; }; handlers.push(h);
    });
  }

  // ---------------- ride ----------------
  let rideState = null;
  function rideProgress(p, drift) {
    const r = rideState; if (!r) return;
    $('#ridebar .r-track span').style.width = Math.min(100, p * 100) + '%';
    if (drift) { r.jc = (r.jc || 0) + 1; if (r.jc % 110 === 0) { G.classList.add('jumpcut'); setTimeout(() => G.classList.remove('jumpcut'), 160); } }
    const due = [.15, .45, .75];
    if (r.sp < 3 && p > due[r.sp]) spawnNotice((r.cfg.notices || ['A hawk', 'Wind', 'A lamp'])[r.sp++]);
  }
  function spawnNotice(label) {
    const n = document.createElement('button'); n.className = 'notice'; n.textContent = label;
    n.style.left = `${12 + Math.random() * 62}%`; n.style.top = `${16 + Math.random() * 38}%`; n.style.animationDuration = 4.3 / Math.min(SPEED, 4) + 's';
    n.onclick = (e) => { e.stopPropagation(); if (!rideState || n._got) return; n._got = true; rideState.hits++; n.classList.add('got'); toast('You notice it. For a breath, you\'re here.'); World.audio.chime(); };
    $('#notices').appendChild(n); setTimeout(() => n.remove(), 4300 / Math.min(SPEED, 4));
    if (AUTO && bot.notice()) setTimeout(() => n.click(), 200 / SPEED);
  }
  async function ride(cfg, loc) {
    const drifting = !!cfg.drift || st.DRIFT >= 6;
    rideState = { cfg, hits: 0, sp: 0 };
    dlg.classList.add('hidden'); $('#ridebar').classList.remove('hidden');
    $('#ridebar .r-hint').textContent = drifting ? 'Pilgrim knows the way. You don\'t remember the ride. Tap what you notice.' : 'Riding with Pilgrim. Tap the little things you notice along the way.';
    if (drifting) G.classList.add('drift');
    await World.ride({ drift: drifting }, loc);
    const hits = rideState.hits; rideState = null; $('#ridebar').classList.add('hidden'); $('#notices').innerHTML = '';
    G.classList.remove('drift'); apply({});
    if (drifting) apply({ DRIFT: hits ? -hits : 1 });
    else if (hits >= 2) apply({ HEART: 1 });
  }

  // ---------------- quests ----------------
  function goalsOf(n) { return SC.filter((s) => s.chapter === n && s.goal); }
  function showQuest(sc) {
    const ch = D.chapters.find((c) => c.n === sc.chapter);
    questEl.querySelector('.q-title').textContent = `${chName(sc.chapter)} · ${ch.title}`;
    questEl.querySelector('.q-goal').textContent = sc.goal;
    questEl.classList.remove('hidden', 'pulse'); void questEl.offsetWidth; questEl.classList.add('pulse');
  }
  async function chapterCard(ch) {
    World.exitCine();
    show(`<div class="scr chap"><div class="c-num">${chName(ch.n)}</div><div class="c-title">${ch.title}</div><div class="c-line"></div><div class="c-sub">${ch.sub}</div><div class="c-intro">${ch.intro}</div><div class="c-go">${World.TOUCH ? 'Tap' : 'Click or press Space'} to begin</div></div>`, 'card');
    await new Promise((res) => {
      let done = false;
      const go = () => { if (done) return; done = true; overlay.removeEventListener('click', go); const i = handlers.indexOf(h); if (i >= 0) handlers.splice(i, 1); closeOv(); res(); };
      const h = (e) => { if (e.key === ' ' || e.key === 'Enter') { go(); return true; } return false; }; handlers.push(h);
      setTimeout(() => { if (!done) overlay.addEventListener('click', go); }, 500 / SPEED);
      if (AUTO) setTimeout(go, 600 / SPEED);
    });
    banner('Chapter begun', ch.title, chName(ch.n));
  }

  // ---------------- scene runner ----------------
  function nextOf(sc) { const n = sc.next; if (n === undefined) return SC[sc.index + 1] ? SC[sc.index + 1].id : 'end'; if (typeof n === 'string') return n; for (const r of n) if (!r.if || test(r.if)) return r.go; return 'end'; }
  async function run(id) {
    const my = ++token; optsEl.classList.add('hidden'); handlers.length = 0; advance = null;
    while (id && id !== 'end') {
      if (my !== token) return;
      const sc = BY[id]; curScene = sc; st.scene = id; save();
      if (AUTO) bot.visit(id);
      const ch = D.chapters.find((c) => c.n === sc.chapter);
      if (sc.chapter !== st.chapter) {
        if (st.chapter >= 0 && st.chapter < sc.chapter && !AUTO) { banner('Chapter complete', D.chapters.find((c) => c.n === st.chapter).title, ''); await wait(2200); }
        st.chapter = sc.chapter; World.setChapter(sc.chapter); questEl.classList.add('hidden'); await chapterCard(ch);
      }
      if (sc.onEnter && sc.onEnter.minDrift && st.DRIFT < sc.onEnter.minDrift) apply({ DRIFT: sc.onEnter.minDrift - st.DRIFT });
      World.setMood(sc.mood); World.placeScene(sc);
      const L = World.LOC[sc.loc];
      World.setQuest({ npc: sc.talk || null, x: L.stand[0], y: L.stand[1], loc: sc.loc });
      showQuest(sc); World.setMode('explore');
      await World.waitGoal(); if (my !== token) return;
      questEl.classList.add('hidden');
      World.setQuest(null);
      await World.stageDialogue(sc); if (my !== token) return;
      if (sc.place) caption(sc.place, sc.date);
      await wait(600);
      pendingNext = null;
      await lines(sc.lines);
      let next = pendingNext || nextOf(sc);
      dlg.classList.add('hidden'); World.speak(null); skipping = false;
      st.done[sc.id] = true;
      if (sc.journal) await diary(sc.journal, `${chName(sc.chapter)} · ${ch.title}`);
      World.exitCine(); toast('✓ ' + sc.goal);
      if (sc.next !== undefined) next = nextOf(sc);
      id = next;
    }
    if (my === token) await ending();
  }

  // ---------------- endings ----------------
  async function ending() {
    let key = 'unsaid'; for (const r of D.endingRules) if (!r.if || test(r.if)) { key = r.go; break; }
    const E = D.endings[key]; st.flags['ending_' + key] = true; save();
    const found = store.get(ENDS, {}); found[key] = true; if (!AUTO) { store.set(ENDS, found); cloud.push('endings', found); }
    if (AUTO) return bot.end(key);
    questEl.classList.add('hidden');
    World.setMood(E.mood);
    await World.fade(() => { World.teleport(E.loc); World.placeScene({ loc: E.loc, talk: E.cast }); });
    curScene = { talk: E.cast };
    await World.stageDialogue({ loc: E.loc });
    await wait(600); await lines(E.lines); dlg.classList.add('hidden'); World.speak(null);
    const all = Object.keys(D.endings);
    show(`<div class="scr ending"><div class="e-k">Ending</div><div class="e-t">${E.title}</div><div class="e-s">${E.sub}</div>
      <div class="e-found">${all.map((k) => `<span class="${found[k] ? 'got' : ''}" title="${found[k] ? D.endings[k].title : '???'}"></span>`).join('')}</div>
      <div class="fine" style="margin:-14px 0 24px">${Object.keys(found).length} of ${all.length} endings found</div>
      <div class="btns">${E.retry ? `<button class="btn gold" id="er">${E.retryLabel}</button>` : ''}<button class="btn ghost" id="et">Return to title</button></div></div>`, 'ending');
    if (E.retry) $('#er').onclick = () => { closeOv(); if (E.retryFx) apply(E.retryFx); st.chapter = BY[E.retry].chapter; World.exitCine(); run(E.retry); };
    $('#et').onclick = async () => { store.del(SAVE); await cloud.pushNow('endings', found); await cloud.wipeProgress(); location.reload(); };
  }

  // ---------------- overlays ----------------
  function show(html, kind) { overlay.innerHTML = html; overlay.dataset.kind = kind || ''; overlay.classList.add('show'); }
  function closeOv() { overlay.classList.remove('show'); overlay.innerHTML = ''; overlay.dataset.kind = ''; }
  const canOpen = () => (!overlay.classList.contains('show') || ['menu', 'log', 'bag', 'map'].includes(overlay.dataset.kind)) && World.mode === 'explore';
  function openMenu() {
    if (!canOpen()) return;
    show(`<div class="scr"><div class="logo" style="font-size:clamp(30px,4.5vw,54px)">Paused</div><div class="logo-sub">${chName(st.chapter)} · ${(D.chapters.find((c) => c.n === st.chapter) || {}).title || ''}</div>
      <div class="btns"><button class="btn" id="m1">Resume</button><button class="btn ghost" id="m2">Quests</button><button class="btn ghost" id="m3">Keepsakes</button><button class="btn ghost" id="m4">Map</button><button class="btn ghost" id="m5">Settings</button>${cloud.user ? '<button class="btn ghost" id="m7">Account</button>' : ''}<button class="btn ghost" id="m6">Save &amp; return to title</button></div>
      <div class="fine">${World.TOUCH ? 'Joystick to walk · F to interact · tap the quest to walk there' : 'WASD to walk · Shift to run · F to interact · scroll to choose · click the quest to walk there<br>J quests · M map · B keepsakes · Esc menu'}</div></div>`, 'menu');
    $('#m1').onclick = closeOv; $('#m2').onclick = () => openLog(); $('#m3').onclick = () => openBag(); $('#m4').onclick = () => openMap(); $('#m5').onclick = () => openSettings(openMenu); $('#m6').onclick = async () => { save(); await cloud.pushNow('progress', st); location.reload(); };
    if ($('#m7')) $('#m7').onclick = () => openAccount(openMenu);
  }
  function openSettings(back) {
    const sp = [['Slow', 26], ['Normal', 48], ['Fast', 90], ['Instant', 999]];
    show(`<div class="scr"><div class="book" style="position:relative;inset:auto;width:min(620px,94vw);flex-direction:column"><div class="main"><h2>Settings</h2>
      <div class="set"><span>Text speed</span><div class="seg" id="s-sp">${sp.map(([n, v]) => `<button data-v="${v}" class="${sets.cps === v ? 'on' : ''}">${n}</button>`).join('')}</div></div>
      <div class="set"><span>Music</span><input type="range" id="s-mu" min="0" max="1" step=".05" value="${sets.music}"></div>
      <div class="set"><span>Sound effects</span><div class="seg" id="s-fx"><button data-v="1" class="${sets.sfx ? 'on' : ''}">On</button><button data-v="0" class="${sets.sfx ? '' : 'on'}">Off</button></div></div>
      <div style="margin-top:20px"><button class="btn" id="s-back">Back</button></div></div></div></div>`, 'settings');
    overlay.querySelectorAll('#s-sp button').forEach((b) => (b.onclick = () => { sets.cps = +b.dataset.v; saveSets(); openSettings(back); }));
    overlay.querySelectorAll('#s-fx button').forEach((b) => (b.onclick = () => { sets.sfx = b.dataset.v === '1'; World.audio.sfx = sets.sfx; saveSets(); openSettings(back); }));
    $('#s-mu').oninput = (e) => { sets.music = +e.target.value; World.audio.vol = sets.music; saveSets(); };
    $('#s-back').onclick = () => (back ? back() : closeOv());
  }
  function openLog(sel) {
    if (!canOpen()) return;
    const cur = st.chapter; sel = sel === undefined ? cur : sel;
    const side = D.chapters.map((c) => { const lock = c.n > cur; return `<button class="ql ${c.n === cur ? 'cur' : ''} ${c.n === sel ? 'sel' : ''} ${lock ? 'lock' : ''} ${c.n < cur ? 'done' : ''}" data-n="${c.n}" ${lock ? 'disabled' : ''}><small>${chName(c.n)}</small>${lock ? '???' : c.title}</button>`; }).join('');
    const ch = D.chapters.find((c) => c.n === sel);
    const steps = goalsOf(sel).map((g) => { const ok = st.done[g.id], now = g.id === st.scene && !ok; const later = !ok && !now; return `<div class="step ${ok ? 'ok' : now ? 'now' : 'later'}"><span class="sd"></span><span>${later && sel === cur ? '???' : g.goal}</span></div>`; }).join('');
    show(`<div class="book"><button class="close" id="lc">✕</button><div class="side"><h3>Story quests</h3>${side}</div><div class="main"><div style="font-size:.8em;letter-spacing:.3em;color:#d3bc8e;text-transform:uppercase">${chName(sel)}</div><h2>${ch.title}</h2><div style="color:#cfc6b4;font-style:italic;margin-bottom:18px">${ch.intro}</div>${steps}
      ${sel === cur ? `<div style="margin-top:20px"><button class="btn gold" id="lnav">◆ Navigate to the current quest</button></div>` : ''}</div></div>`, 'log');
    $('#lc').onclick = closeOv; overlay.querySelectorAll('.ql:not([disabled])').forEach((b) => (b.onclick = () => openLog(+b.dataset.n)));
    const nav = $('#lnav'); if (nav) nav.onclick = () => { closeOv(); if (World.guide()) toast('Walking to the quest marker…'); };
  }
  function openBag() {
    if (!canOpen()) return; $('#b-bag').classList.remove('dot');
    const items = st.items.map((i) => `<div class="it"><b>${i.name}</b><p>${i.desc}</p></div>`).join('') || '<p style="color:#9a927e">Nothing yet.</p>';
    const pages = World.pages.map((t, i) => (st.pages[i] ? `<div class="it page"><b>Page ${i + 1}</b><p>${t}</p></div>` : `<div class="it miss"><b>Page ${i + 1}</b><p>Somewhere in the valley…</p></div>`)).join('');
    const bar = (n, v, max = 10) => `<div class="stat"><b>${n}</b><div class="sb"><span style="width:${Math.min(100, v / max * 100)}%"></span></div></div>`;
    show(`<div class="book"><button class="close" id="bc">✕</button><div class="main"><h2>Keepsakes</h2><div style="color:#cfc6b4;margin-bottom:14px">The things in the tin box.</div><div class="items">${items}</div>
      <h2 style="margin-top:28px">Loose pages <span style="font-size:.6em;color:#cfc6b4">${Object.keys(st.pages).length} / ${World.pages.length}</span></h2><div class="items">${pages}</div>
      <h2 style="margin-top:28px">How Eli is</h2><div class="stats">${bar('Warmth', st.HEART)}${bar('Guarded', st.STONE)}${bar('Distant', st.DRIFT)}${bar('Nerve', st.NERVE, 30)}</div>
      <h2 style="margin-top:28px">Diary</h2>${st.journal.map((e) => `<div class="step"><span class="sd" style="border-color:#d3bc8e"></span><span><small style="color:#9a927e">${e.ch}</small><br><span style="font:500 1.35em Caveat">${e.t}</span></span></div>`).join('') || '<p style="color:#9a927e">Empty.</p>'}</div></div>`, 'bag');
    $('#bc').onclick = closeOv;
  }
  function openMap() {
    if (!canOpen()) return;
    show(`<div class="mapv"><button class="close" id="mc">✕</button><div class="mapwrap" id="mw"></div><div class="mhelp">${World.waiting ? 'Choose a place you\'ve visited to travel there. ' : ''}The gold marker is your current quest.</div></div>`, 'map');
    $('#mc').onclick = closeOv;
    const wrap = $('#mw'), mi = World.mapImage(); const c = document.createElement('canvas'); c.width = mi.width; c.height = mi.height; c.getContext('2d').drawImage(mi, 0, 0); wrap.appendChild(c);
    const pct = (x, y) => [x / mi.width * 100 + '%', y / mi.height * 100 + '%'];
    const q = World.quest;
    for (const k in World.LOC) {
      const L = World.LOC[k], v = st.visited[k], isQ = q && q.loc === k, [l, t] = pct(L.stand[0], L.stand[1] - 4);
      const p = document.createElement('div'); p.className = 'pin' + (v ? '' : ' locked') + (isQ ? ' goal' : ''); p.style.left = l; p.style.top = t; p.innerHTML = `<span>${v || isQ ? L.name : '???'}</span>`; p.title = v ? L.name : '';
      if (v) p.onclick = async () => { if (!World.waiting) { toast('You can travel once the current scene is over.'); return; } closeOv(); await World.fade(() => World.teleport(k)); };
      wrap.appendChild(p);
    }
    const me = document.createElement('div'); me.className = 'me'; const [l, t] = pct(World.player.x, World.player.y); me.style.left = l; me.style.top = t; wrap.appendChild(me);
  }
  function openHistory() {
    const rows = st.log.slice(-60).map(([n, t]) => `<div class="step"><span>${n ? `<b style="color:#f2d27a">${n}</b><br>` : ''}${t}</span></div>`).join('');
    const prev = advance; advance = null;
    show(`<div class="book"><button class="close" id="hc">✕</button><div class="main"><h2>Dialogue log</h2>${rows}</div></div>`, 'history');
    const m = overlay.querySelector('.main'); m.scrollTop = m.scrollHeight;
    $('#hc').onclick = () => { closeOv(); advance = prev; };
  }

  // ---------------- login / sign up / account ----------------
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  function authScreen(mode, msg) {
    World.setMode('title');
    const signup = mode === 'signup';
    show(`<div class="scr clear"><div class="logo">The Quiet Kind</div><div class="logo-sub">${signup ? 'Create your account' : 'Welcome back'}</div>
      <form class="auth" id="af" autocomplete="on" novalidate>
        <div class="tabs"><button type="button" class="${signup ? '' : 'on'}" id="a-in">Log in</button><button type="button" class="${signup ? 'on' : ''}" id="a-up">Sign up</button></div>
        <label class="field"><span>Email</span><input type="email" name="email" id="a-email" autocomplete="email" required placeholder="you@example.com"></label>
        <label class="field"><span>Password</span><input type="password" name="password" id="a-pass" autocomplete="${signup ? 'new-password' : 'current-password'}" required minlength="8" placeholder="${signup ? 'At least 8 characters' : 'Your password'}"></label>
        ${signup ? '<label class="field"><span>Confirm password</span><input type="password" id="a-pass2" autocomplete="new-password" required minlength="8" placeholder="Type it again"></label>' : ''}
        <div class="msg ${msg && msg.ok ? 'ok' : ''}" id="a-msg">${msg ? esc(msg.text || msg) : ''}</div>
        <button class="btn gold" type="submit" id="a-go">${signup ? 'Create account' : 'Log in'}</button>
        <button class="linkbtn" type="button" id="a-guest">Play as a guest instead (saves on this device only)</button>
      </form></div>`, 'auth');
    $('#a-in').onclick = () => authScreen('login'); $('#a-up').onclick = () => authScreen('signup');
    $('#a-guest').onclick = () => title();
    setTimeout(() => $('#a-email') && $('#a-email').focus(), 50);
    $('#af').onsubmit = async (e) => {
      e.preventDefault();
      const email = $('#a-email').value.trim(), pass = $('#a-pass').value, m = $('#a-msg'), go = $('#a-go');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { m.textContent = 'Please enter a valid email address.'; return; }
      if (pass.length < 8) { m.textContent = 'Password must be at least 8 characters.'; return; }
      if (signup && pass !== $('#a-pass2').value) { m.textContent = 'The two passwords don\'t match.'; return; }
      go.disabled = true; go.textContent = signup ? 'Creating account…' : 'Logging in…'; m.textContent = '';
      try { await (signup ? cloud.signup(email, pass) : cloud.login(email, pass)); title(); toast(signup ? 'Account created. Your progress will follow you.' : `Welcome back.`); }
      catch (err) { m.textContent = err.message; go.disabled = false; go.textContent = signup ? 'Create account' : 'Log in'; }
    };
  }
  function openAccount(back) {
    show(`<div class="scr"><div class="book" style="position:relative;inset:auto;width:min(560px,94vw);flex-direction:column"><div class="main"><h2>Account</h2>
      <div style="color:#cfc6b4;margin-bottom:18px">Signed in as <b style="color:#fff">${esc(cloud.user)}</b><br>Your progress, endings and settings are saved to your account.</div>
      <form class="auth flat" id="pf" novalidate>
        <h3 style="padding:0;margin:6px 0 10px">Change password</h3>
        <label class="field"><span>Current password</span><input type="password" id="p-cur" autocomplete="current-password" required></label>
        <label class="field"><span>New password</span><input type="password" id="p-new" autocomplete="new-password" required minlength="8" placeholder="At least 8 characters"></label>
        <label class="field"><span>Confirm new password</span><input type="password" id="p-new2" autocomplete="new-password" required minlength="8"></label>
        <div class="msg" id="p-msg"></div>
        <button class="btn gold" type="submit" id="p-go">Change password</button>
      </form>
      <div class="btns" style="margin-top:22px;min-width:0"><button class="btn ghost" id="p-out">Log out</button><button class="btn" id="p-back">Back</button></div></div></div></div>`, 'settings');
    $('#p-back').onclick = () => (back ? back() : closeOv());
    $('#p-out').onclick = async () => { save(); await cloud.pushNow('progress', st); await cloud.logout(); location.reload(); };
    $('#pf').onsubmit = async (e) => {
      e.preventDefault();
      const cur = $('#p-cur').value, nw = $('#p-new').value, m = $('#p-msg'), go = $('#p-go'); m.className = 'msg';
      if (nw.length < 8) { m.textContent = 'New password must be at least 8 characters.'; return; }
      if (nw !== $('#p-new2').value) { m.textContent = 'The new passwords don\'t match.'; return; }
      go.disabled = true; go.textContent = 'Saving…';
      try { await cloud.changePassword(cur, nw); m.className = 'msg ok'; m.textContent = 'Password changed. Other devices have been signed out.'; $('#pf').reset(); }
      catch (err) { m.textContent = err.message; }
      go.disabled = false; go.textContent = 'Change password';
    };
  }

  // ---------------- title ----------------
  function title() {
    World.setMode('title'); World.setMood('golden'); questEl.classList.add('hidden');
    const sv = store.get(SAVE, null), found = store.get(ENDS, {});
    const has = sv && sv.scene && BY[sv.scene];
    show(`<div class="scr clear"><div class="logo">The Quiet Kind</div><div class="logo-sub">A story in fifteen chapters</div>
      <div class="btns">${has ? '<button class="btn gold" id="t1">Continue</button>' : ''}<button class="btn ${has ? 'ghost' : 'gold'}" id="t2">${has ? 'Start over' : 'Begin'}</button><button class="btn ghost" id="t3">Settings</button><button class="btn ghost" id="t4">${cloud.user ? 'Account' : 'Log in / Sign up'}</button></div>
      <div class="fine">${cloud.user ? `Signed in as <b>${esc(cloud.user)}</b> · your progress is saved to your account` : cloud.online ? 'Playing as a guest · progress is saved on this device only' : 'Offline · progress is saved on this device only'}<br>${World.TOUCH ? 'Best played in landscape · headphones recommended' : 'Headphones recommended'}${Object.keys(found).length ? ` · ${Object.keys(found).length} of ${Object.keys(D.endings).length} endings found` : ''}</div></div>`, 'title');
    $('#t4').onclick = () => (cloud.user ? openAccount(title) : authScreen('login'));
    $('#t2').onclick = () => { cloud.wipeProgress(); st = fresh(); st.chapter = -1; closeOv(); World.reset(); World.setMode('explore'); run(SC[0].id); };
    if (has) $('#t1').onclick = () => { st = Object.assign(fresh(), sv); closeOv(); World.reset(); World.setChapter(st.chapter); World.setMode('explore'); apply({}); run(st.scene); };
    $('#t3').onclick = () => openSettings(title);
  }

  // ---------------- test bot (?autoplay=present&speed=8) ----------------
  const TARGETS = {
    present: { w: { HEART: 2, NERVE: 3, DRIFT: -2, STONE: -1, wren: 3, ma: 1 }, f: { saw_doc: 30, ended_honest: 30, asked_kindly: 40, asked: 10, stayed_guilt: -40, ended_cold: -40 }, notice: true },
    room: { w: { HEART: 2, NERVE: 3, DRIFT: -1, STONE: -1, wren: 3 }, f: { asked_kindly: 40, asked: 10, saw_doc: -40, stayed_guilt: -40, ended_cold: -40 }, notice: true },
    kindno: { w: { HEART: 1, NERVE: 2, DRIFT: -1, STONE: -1, wren: -3 }, f: { asked_kindly: 30, asked: 10, saw_doc: -40, stayed_guilt: -40, ended_cold: -40 }, notice: true },
    cure: { w: { HEART: 1, DRIFT: -1 }, f: { stayed_guilt: 40 }, notice: true },
    stone: { w: { STONE: 3, HEART: -1, DRIFT: -2 }, f: { ended_cold: 40, stayed_guilt: -40 }, notice: true },
    autopilot: { w: { DRIFT: 3, HEART: -1 }, f: { stayed_guilt: -40, ended_cold: -40 }, notice: false },
    unsaid: { w: { DRIFT: -1, STONE: -1, HEART: 1 }, f: { asked: -60, asked_kindly: -60, stayed_guilt: -40, ended_cold: -40 }, notice: true },
  };
  const bot = (() => {
    const T = TARGETS[AUTO] || TARGETS.present, visited = []; let stuckT = 0, lastPos = [0, 0];
    const score = (o) => { if (o.crack) return -999; if (o.req && !test(o.req)) return -999; let v = Math.random() * .01; for (const [k, x] of Object.entries(o.fx || {})) { if (k === 'set') [].concat(x).forEach((f) => (v += T.f[f] || 0)); else v += (T.w[k] || 0) * x; } return v; };
    return {
      pick: (opts) => opts.slice().sort((a, b) => score(b) - score(a))[0], notice: () => T.notice, visit: (id) => { visited.push(id); window.__visited = visited; },
      end(key) { window.__result = { key, want: AUTO, scenes: visited.length, stats: { HEART: st.HEART, STONE: st.STONE, DRIFT: st.DRIFT, NERVE: st.NERVE, wren: st.wren }, flags: Object.keys(st.flags) }; console.log('AUTOPLAY', JSON.stringify(window.__result)); },
      tick() {
        if (World.mode === 'explore' && World.waiting && !World.busy && !overlay.classList.contains('show')) {
          const p = World.player; if (!p.path.length && !World.guide()) { window.__stuck = st.scene; console.log('STUCK no path', st.scene); }
          if (Math.hypot(p.x - lastPos[0], p.y - lastPos[1]) < .3) stuckT += .2; else stuckT = 0; lastPos = [p.x, p.y];
          if (stuckT > 4) { window.__stuck = st.scene; console.log('STUCK not moving', st.scene, Math.round(p.x), Math.round(p.y)); stuckT = 0; }
          const c = World.candidates(); if (c[0] && c[0].quest) World.act();
        } else stuckT = 0;
      },
    };
  })();
  if (AUTO) setInterval(() => bot.tick(), 200);

  window.DC = {
    get state() { return st; }, test, apply, toast, banner, save, rideProgress, openMap,
    async chat(arr, key) { World.focus(['eli', key]); World.enterCine(); dlg.classList.remove('hidden'); const prev = curScene; curScene = { talk: key }; await lines(arr); curScene = prev; dlg.classList.add('hidden'); World.speak(null); World.exitCine(); },
  };
  World.onReady = () => {
    if (AUTO) { st = fresh(); st.chapter = -1; World.reset(); World.setMode('explore'); const j = Q.get('jump'); if (j && BY[j]) { st.chapter = BY[j].chapter; World.setChapter(st.chapter); } run(j && BY[j] ? j : SC[0].id); return; }
    cloud.check().then(async (u) => {
      if (u) { try { await cloud.pull(); } catch (e) { } title(); }
      else if (cloud.online) authScreen('login');
      else title();
    });
  };
  if (World.ready) World.onReady();
})();
