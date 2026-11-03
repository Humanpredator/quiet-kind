/* The Quiet Kind — world engine.
   Sunnyside World map (Daniel Diggle, commercial use allowed) rendered with y-sorting, HD-2D lighting and tilt-shift;
   8px collision grid with A* pathfinding; NPCs, quest markers, dialogue camera, minimap/map, rides, touch controls. */
(function () {
  'use strict';
  const WD = window.WORLD, CAST = window.CAST, SD = window.STORY_DATA, A = 'assets/sunnyside/', C = 'assets/cast3/';
  const MW = WD.W, MH = WD.H, CELL = WD.maskCell, MASK = WD.mask, GW = MASK[0].length, GH = MASK.length, LOC = WD.locs;
  const NAMES = Object.assign({ pruett: 'Mr. Pruett', man: 'Jesse the farrier', woman: 'Mrs. Bell', iris: 'Iris Lane' }, SD.names);
  const Q = new URLSearchParams(location.search);
  const SPEED = Math.max(1, +Q.get('speed') || 1);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, t) => a + (b - a) * t, dist = (a, b, c, d) => Math.hypot(a - c, b - d);
  const rnd = ((s) => () => (s = (s * 16807) % 2147483647) / 2147483647)(9157);
  const $ = (s) => document.querySelector(s);
  const G = $('#game'), stage = $('#stage'), wmarks = $('#wmarks');
  const view = document.createElement('canvas'); stage.appendChild(view);
  const ctx = view.getContext('2d');
  const mkc = () => { const c = document.createElement('canvas'); return [c, c.getContext('2d')]; };
  const [fxc, fctx] = mkc(), [lc, lctx] = mkc();
  const TOUCH = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
  if (TOUCH) document.body.classList.add('touch');
  const LOWFX = TOUCH || Q.has('lowfx');

  // ======================= images =======================
  let pending = 0, loaded = 0, ready = false;
  const lbar = $('#loading .l-bar span');
  const img = (src) => { const i = new Image(); pending++; i.onload = i.onerror = () => { loaded++; lbar.style.width = (loaded / pending * 100) + '%'; if (loaded === pending) setTimeout(() => (ready = true), 50); }; i.src = src; return i; };
  const ground = Array.from({ length: WD.groundFrames }, (_, i) => img(`${A}ground_${i}.png`));
  const topImg = img(`${A}top.png`);
  WD.objects.forEach((o) => (o.im = img(A + o.img)));
  for (const k in WD.sprites) WD.sprites[k].im = img(A + WD.sprites[k].img);
  const castImg = {}; for (const k in CAST) castImg[k] = img(`${C}${k}.png`);
  const horseImg = img('assets/ninja/horse_side.png'), catImg = img('assets/ninja/cat.png');
  const EMO = {}; for (const e of ['chat', 'love', 'stress', 'alerted', 'confused']) EMO[e] = `assets/ui/expression_${e}.png`;

  // ======================= collision grid =======================
  const openCell = (gx, gy) => gx >= 0 && gy >= 0 && gx < GW && gy < GH && MASK[gy][gx] === '.';
  const openAt = (x, y) => openCell(Math.floor(x / CELL), Math.floor(y / CELL));
  const feetFree = (x, y) => openAt(x - 3, y) && openAt(x + 3, y) && openAt(x, y - 2) && openAt(x, y + 1);
  const isWater = (x, y) => { const gx = Math.floor(x / 16), gy = Math.floor(y / 16); return gx >= 0 && gy >= 0 && gy < WD.water.length && gx < WD.water[0].length && WD.water[gy][gx] === '1'; };
  function snap(x, y) {
    let best = [x, y], bd = 1e9;
    const cx0 = Math.floor(x / CELL), cy0 = Math.floor(y / CELL);
    for (let r = 0; r < 40 && bd > r * CELL; r++)
      for (let gy = cy0 - r; gy <= cy0 + r; gy++) for (let gx = cx0 - r; gx <= cx0 + r; gx++) {
        if (Math.max(Math.abs(gx - cx0), Math.abs(gy - cy0)) !== r || !openCell(gx, gy)) continue;
        const px = gx * CELL + 4, py = gy * CELL + 5; if (!feetFree(px, py)) continue;
        const d = dist(px, py, x, y); if (d < bd) { bd = d; best = [px, py]; }
      }
    return best;
  }
  // binary-heap A* over the 8px grid, 8 directions, no corner cutting, then string-pulled
  function findPath(fx, fy, tx, ty) {
    const s = snap(fx, fy), t = snap(tx, ty);
    const ax = Math.floor(s[0] / CELL), ay = Math.floor(s[1] / CELL), bx = Math.floor(t[0] / CELL), by = Math.floor(t[1] / CELL);
    const N = GW * GH, g = new Float32Array(N).fill(1e9), prev = new Int32Array(N).fill(-1), closed = new Uint8Array(N);
    const heap = [], push = (f, k) => { heap.push([f, k]); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
    const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { const l = i * 2 + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
    const sk = ay * GW + ax, tk = by * GW + bx; g[sk] = 0; push(0, sk);
    while (heap.length) {
      const [, k] = pop(); if (closed[k]) continue; closed[k] = 1; if (k === tk) break;
      const x = k % GW, y = (k / GW) | 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue; const nx = x + dx, ny = y + dy; if (!openCell(nx, ny)) continue;
        if (dx && dy && (!openCell(x + dx, y) || !openCell(x, y + dy))) continue;
        const nk = ny * GW + nx, ng = g[k] + (dx && dy ? 1.414 : 1);
        if (ng < g[nk]) { g[nk] = ng; prev[nk] = k; push(ng + Math.hypot(nx - bx, ny - by), nk); }
      }
    }
    if (prev[tk] < 0 && tk !== sk) return null;
    const cells = []; for (let k = tk; k !== sk && k >= 0; k = prev[k]) cells.unshift([(k % GW) * CELL + 4, ((k / GW) | 0) * CELL + 5]);
    if (feetFree(tx, ty) && cells.length && dist(cells[cells.length - 1][0], cells[cells.length - 1][1], tx, ty) < 10) cells[cells.length - 1] = [tx, ty];
    // string pulling: skip waypoints when the straight line is clear
    const out = []; let cx = fx, cy = fy, i = 0;
    while (i < cells.length) { let j = cells.length - 1; while (j > i && !clear(cx, cy, cells[j][0], cells[j][1])) j--; out.push(cells[j]); [cx, cy] = cells[j]; i = j + 1; }
    return out;
  }
  function clear(x0, y0, x1, y1) { const d = dist(x0, y0, x1, y1), n = Math.ceil(d / 2); for (let i = 1; i <= n; i++) { const x = lerp(x0, x1, i / n), y = lerp(y0, y1, i / n); if (!feetFree(x, y)) return false; } return true; }

  // ======================= actors =======================
  const actors = {};
  function actor(key, spec, x, y) {
    const a = actors[key] || (actors[key] = { key, f: rnd() * 10, face: 1, path: [], moving: false, run: false, visible: true, alpha: 0 });
    a.spec = CAST[spec + '_idle'] ? spec : (CAST[key + '_idle'] ? key : 'man');
    if (x !== undefined) { a.x = x; a.y = y; }
    a.visible = true; return a;
  }
  const P = actor('eli', 'eli', LOC.home.stand[0], LOC.home.stand[1]); P.alpha = 1;
  const HITCH = snap(LOC.home.stand[0] + 36, LOC.home.stand[1] - 2);
  const horse = { x: HITCH[0], y: HITCH[1], face: -1, f: 0 };
  const CATP = snap(LOC.post.stand[0] + 22, LOC.post.stand[1] + 4); const cat = { x: CATP[0], y: CATP[1] };
  function walkTo(a, x, y, run) {
    return new Promise((res) => { const p = findPath(a.x, a.y, x, y); if (!p) { res(false); return; } if (!p.length) { a.path = []; res(true); return; } a.path = p; a.run = !!run; a.onArrive = () => res(true); setTimeout(() => { if (a.onArrive) { a.path = []; a.x = x; a.y = y; const cb = a.onArrive; a.onArrive = null; cb(); } }, 9000 / SPEED); });
  }
  function stepActor(a, dt) {
    if (!a.path.length) { a.moving = false; a.f += dt * 6; return; }
    const [tx, ty] = a.path[0], d = dist(a.x, a.y, tx, ty), sp = (a.run ? 78 : 44) * dt;
    if (d <= sp) { a.x = tx; a.y = ty; a.path.shift(); if (!a.path.length) { a.moving = false; const cb = a.onArrive; a.onArrive = null; cb && cb(); } }
    else { a.x += (tx - a.x) / d * sp; a.y += (ty - a.y) / d * sp; if (Math.abs(tx - a.x) > .3) a.face = tx < a.x ? -1 : 1; }
    a.moving = !!a.path.length || d > sp; a.f += dt * (a.run ? 12 : 9);
  }

  // ambient townsfolk (who is around depends on the chapter)
  const TOWN = [
    { key: 'ma_t', spec: 'ma', who: 'ma', loc: 'home', off: [-28, 4], ch: [0, 15], lines: (c) => c < 9 ? ['Wash your hands, supper\'s nearly on.', 'Did you see June? That girl is never where I leave her.'] : ['You\'re home. Sit. I\'ll warm something.', 'The lamp\'s trimmed. It\'ll last till you\'re in.'] },
    { key: 'pruett', spec: 'pruett', who: 'pruett', loc: 'store', off: [16, 6], ch: [0, 15], lines: (c) => c < 9 ? ['Peppermints are a penny, young Ashby. Toby\'s are free, apparently.', 'If my boy\'s in trouble, I don\'t want to know about it till supper.'] : ['Eli! Toby says you never write. Write the boy.', 'Coffee\'s gone up again. Everything has, except wages.'] },
    { key: 'amos_t', spec: 'amos', who: 'amos', loc: 'post', off: [-24, 2], ch: [0, 5], lines: () => ['Half past eight sharp. I don\'t wait for stragglers. Except you. Don\'t tell anybody.', 'This old coach has more miles on her than I do. Barely.'] },
    { key: 'bell', spec: 'woman', who: 'woman', loc: 'pell', off: [-18, 8], ch: [0, 15], lines: () => ['Peach pie\'s on the sill. If a slice goes missing I\'ll know it was a tall bird in a hat.', 'You were such a quiet little thing. Still are, I suppose.'] },
    { key: 'jesse', spec: 'man', who: 'man', loc: 'depot', off: [-30, 6], ch: [0, 15], lines: () => ['Pilgrim\'s shoes are holding fine. That horse walks gentler than most folks.', 'Wind\'s soft today. Good day for nothing much.'] },
  ];
  TOWN.forEach((t) => { const L = LOC[t.loc]; const p = snap(L.stand[0] + t.off[0], L.stand[1] + t.off[1]); t.x = p[0]; t.y = p[1]; });

  // loose diary pages scattered across the valley (collectibles)
  const PAGES = [
    'I was always a quiet kid. Maybe I decided, very young, that being alone was safer.',
    'Ma raised us mostly alone. She worried every single day. I never told her how much I noticed.',
    'Some people are loud because they\'re brave. Some are quiet because they\'re brave. I\'m still working out which I am.',
    'I don\'t love crowds. I love one person across a room who doesn\'t need me to talk.',
    'Grown-ups decide what happened before anyone tells them.',
    'Being strong isn\'t being hard. It\'s feeling all of it and staying.',
    'I keep waiting for the right time. The right time keeps waiting for me.',
    'If you come back with the same warmth, I\'ll meet you there. I won\'t chase anymore. I\'m tired of chasing.',
    'I want everyone in my life. Some days I don\'t care if anyone stays. Both are true. That\'s the trouble.',
    '"Okay" is easier than explaining. I\'ve said "okay" ten thousand times.',
    'I still pray sometimes. Not for grades or work. Just for someone to be beside me.',
    'My feelings deserve to be taken seriously. Even by me. Especially by me.',
  ];
  const PAGESPOT = [];
  (() => {
    const spots = []; for (let gy = 2; gy < GH - 2; gy += 2) for (let gx = 2; gx < GW - 2; gx += 2) if (openCell(gx, gy) && openCell(gx + 1, gy) && openCell(gx, gy + 1)) spots.push([gx * CELL + 6, gy * CELL + 8]);
    for (let t = 0; PAGESPOT.length < PAGES.length && t < 6000; t++) { const p = spots[Math.floor(rnd() * spots.length)]; if (PAGESPOT.every((q) => dist(q[0], q[1], p[0], p[1]) > 120) && Object.values(LOC).every((l) => dist(l.stand[0], l.stand[1], p[0], p[1]) > 34)) PAGESPOT.push(p); }
  })();

  // sprites / critters
  const SPR = WD.sprites, FLAT = /shadow|rug|plate|coin|acron|wool|ore_|oar|sword_floor|glint/;
  const insts = WD.inst.filter((i) => !/^(spr_hammering|spr_walking|happiness_)/.test(i.s)).map((i) => { const s = SPR[i.s]; return Object.assign({}, i, { sp: s, sortY: i.y - s.oy + s.h - 2, flat: i.flat || FLAT.test(i.s), ph: rnd() * 10 }); });
  const CRIT = { spr_deco_chicken_01: 'chicken', spr_deco_cow: 'cow', spr_deco_sheep_01: 'sheep', spr_deco_pig_01: 'pig', spr_deco_duck_01: 'duck', spr_deco_bird_01: 'bird' };
  insts.forEach((i) => { i.critter = CRIT[i.s]; if (i.critter) Object.assign(i, { hx: i.x, hy: i.y, tx: i.x, ty: i.y, wait: rnd() * 3, flee: 0, z: 0 }); });
  const lights = [];
  insts.forEach((i) => { if (/fire|campfire|firepit/.test(i.s)) lights.push({ x: i.x, y: i.y - 6, r: 64, c: '255,150,70', always: true, flick: true }); });
  WD.objects.forEach((o) => { if (o.kind === 'building' && o.w >= 48) { lights.push({ x: o.x + o.w * .3, y: o.sort - 14, r: 34, c: '255,196,110' }); lights.push({ x: o.x + o.w * .7, y: o.sort - 14, r: 34, c: '255,196,110' }); } });
  for (const k in LOC) lights.push({ x: LOC[k].door[0], y: LOC[k].door[1] - 4, r: 30, c: '255,200,120' });

  // ======================= state =======================
  let mode = 'title';           // title | explore | cine | ride
  let mood = 'golden', chapter = 0, quest = null, goalResolve = null, sceneNpcs = [], focusKeys = [], speaker = null;
  let zoom = 1, zoomT = 1, camLock = false, titleMode = true, riding = null, busy = false;
  const MOODS = {
    day: { tint: [255, 248, 236], tA: 0, dark: 0, darkC: [20, 16, 40], glow: .15, rays: .2, hour: 11 },
    golden: { tint: [255, 190, 130], tA: .22, dark: .07, darkC: [60, 30, 40], glow: .55, rays: .55, hour: 17.6 },
    dusk: { tint: [210, 140, 200], tA: .3, dark: .38, darkC: [40, 20, 60], glow: .9, rays: .15, hour: 19.3 },
    night: { tint: [90, 110, 190], tA: .38, dark: .6, darkC: [10, 12, 40], glow: 1, rays: 0, hour: 22.5 },
    overcast: { tint: [190, 196, 210], tA: .3, dark: .08, darkC: [40, 40, 60], glow: .2, rays: 0, hour: 14 },
    winter: { tint: [215, 230, 255], tA: .3, dark: .06, darkC: [40, 50, 80], glow: .3, rays: .1, hour: 15, snow: 1 },
  };
  let mc = { ...MOODS.golden };
  const cam = { x: 640, y: 420 };
  let particles = [], ripples = [], skip = null, emos = [];
  const keys = {}; let stick = { x: 0, y: 0, on: false }, runToggle = false;
  const st = () => (window.DC ? DC.state : { flags: {}, pages: {}, visited: {} });

  // ======================= audio =======================
  const audio = (() => {
    let ac = null, cur = null, curName = '', vol = .5, sfxOn = true, unlocked = false;
    const A0 = () => (ac = ac || new (window.AudioContext || window.webkitAudioContext)());
    const tone = (f0, f1, d, type = 'triangle', v = .08) => { if (!sfxOn || !unlocked) return; try { const a = A0(), o = a.createOscillator(), g = a.createGain(); o.type = type; o.frequency.setValueAtTime(f0, a.currentTime); o.frequency.exponentialRampToValueAtTime(f1, a.currentTime + d); g.gain.setValueAtTime(v, a.currentTime); g.gain.exponentialRampToValueAtTime(.001, a.currentTime + d); o.connect(g); g.connect(a.destination); o.start(); o.stop(a.currentTime + d); } catch (e) { } };
    const noise = (d, v, fr) => { if (!sfxOn || !unlocked) return; try { const a = A0(), b = a.createBuffer(1, a.sampleRate * d, a.sampleRate), x = b.getChannelData(0); for (let i = 0; i < x.length; i++) x[i] = (Math.random() * 2 - 1) * (1 - i / x.length); const s = a.createBufferSource(); s.buffer = b; const f = a.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = fr; const g = a.createGain(); g.gain.value = v; s.connect(f); f.connect(g); g.connect(a.destination); s.start(); } catch (e) { } };
    function music(name) {
      if (name === curName) return; curName = name; if (!unlocked) return;
      const old = cur; if (old) { const t0 = performance.now(); const iv = setInterval(() => { const k = Math.min(1, (performance.now() - t0) / 1500); old.volume = Math.max(0, (1 - k) * vol * .6); if (k >= 1) { clearInterval(iv); old.pause(); } }, 50); }
      if (!name) { cur = null; return; }
      const a = new Audio(`assets/music/${name}.ogg`); a.loop = true; a.volume = 0; a.play().catch(() => {}); cur = a;
      const t0 = performance.now(); const iv = setInterval(() => { const k = Math.min(1, (performance.now() - t0) / 2000); if (cur === a) a.volume = k * vol * .6; if (k >= 1) clearInterval(iv); }, 50);
    }
    return {
      unlock() { if (unlocked) return; unlocked = true; try { A0().resume(); } catch (e) { } const n = curName; curName = ''; music(n); },
      music, tick: () => tone(1500, 1200, .03, 'square', .02), blip: () => tone(660, 880, .07, 'sine', .05), chime: () => { tone(880, 1320, .25); setTimeout(() => tone(1320, 1760, .35), 110); },
      bawk: () => tone(700, 420, .14, 'sawtooth', .03), moo: () => tone(180, 120, .5, 'sawtooth', .035), pop: () => tone(520, 780, .1, 'square', .03),
      plip: () => tone(1200, 600, .08, 'sine', .07), splash: () => noise(.35, .3, 900), rustle: () => noise(.25, .2, 2400), page: () => noise(.3, .25, 3200),
      set vol(v) { vol = v; if (cur) cur.volume = v * .6; }, get vol() { return vol; }, set sfx(v) { sfxOn = v; }, get sfx() { return sfxOn; },
    };
  })();
  ['pointerdown', 'keydown', 'touchstart'].forEach((e) => addEventListener(e, () => audio.unlock(), { once: false, passive: true }));
  function musicFor() {
    if (mode === 'title') return 'quiet';
    if (riding) return riding.drift ? 'dream' : 'road';
    if (G.classList.contains('drift-heavy')) return 'dream';
    const late = chapter >= 7;
    return ({ day: late ? 'chill' : 'calm', golden: late ? 'peaceful' : 'peaceful', dusk: late ? 'melancholia' : 'chill', night: late ? 'lament' : 'melancholia', overcast: late ? 'sad' : 'quiet', winter: late ? 'sad' : 'lament' })[mood] || 'calm';
  }

  // ======================= input =======================
  addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase(); keys[k] = true;
    if (mode !== 'explore' || busy || DC_overlay()) return;
    if (k === 'f' || k === 'e' || k === 'enter') { e.preventDefault(); act(); }
    if (k === 'tab') { e.preventDefault(); selIdx++; }
  });
  addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; });
  addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
  addEventListener('wheel', (e) => { if (mode === 'explore') selIdx += e.deltaY > 0 ? 1 : -1; }, { passive: true });
  const DC_overlay = () => document.getElementById('overlay').classList.contains('show');
  stage.addEventListener('pointerdown', (e) => {
    if (TOUCH || mode !== 'explore' || busy || e.button !== 0) return;
    const r = view.getBoundingClientRect(), k = r.width / VW;
    const wx = ox + (e.clientX - r.left) / k, wy = oy + (e.clientY - r.top) / k;
    const p = findPath(P.x, P.y, wx, wy); if (p) { P.path = p; P.run = !!keys.shift; }
  });
  // joystick
  (() => {
    const el = $('#stick'), knob = el.querySelector('.knob'); let id = null, cx = 0, cy = 0;
    el.addEventListener('pointerdown', (e) => { id = e.pointerId; el.setPointerCapture(id); const r = el.getBoundingClientRect(); cx = r.left + r.width / 2; cy = r.top + r.height / 2; mv(e); });
    const mv = (e) => { if (e.pointerId !== id) return; let dx = e.clientX - cx, dy = e.clientY - cy; const m = Math.hypot(dx, dy), R = 50; if (m > R) { dx = dx / m * R; dy = dy / m * R; } knob.style.transform = `translate(${dx}px,${dy}px)`; stick = { x: dx / R, y: dy / R, on: true }; };
    el.addEventListener('pointermove', mv);
    const up = (e) => { if (e.pointerId !== id) return; id = null; knob.style.transform = ''; stick = { x: 0, y: 0, on: false }; };
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    $('#t-act').addEventListener('pointerdown', (e) => { e.preventDefault(); if (mode === 'explore' && !busy) act(); });
    $('#t-run').addEventListener('pointerdown', (e) => { e.preventDefault(); runToggle = !runToggle; $('#t-run').classList.toggle('on', runToggle); });
  })();

  // ======================= interactions =======================
  let selIdx = 0, cands = [];
  const PET = { chicken: ['Pet the chicken', ['The chicken permits it. Briefly.', 'She tilts her head at you like you\'re the strange one.'], 'bawk'], cow: ['Pat the cow', ['Warm, enormous, and completely unbothered.'], 'moo'], sheep: ['Pet the sheep', ['Like putting your hand in a cloud that smells of hay.'], 'pop'], pig: ['Scratch the pig', ['The pig leans into it with its whole soul.'], 'pop'], duck: ['Say hello to the duck', ['Quack. Fair enough.'], 'pop'] };
  const once = {}; const calm = (key, fx) => { const k = key + ':' + chapter; if (once[k]) return; once[k] = true; window.DC && DC.apply(fx); };
  function candidates() {
    const out = [], near = (x, y, r) => dist(P.x, P.y, x, y) < r;
    if (quest && quest.npc && actors[quest.npc] && near(actors[quest.npc].x, actors[quest.npc].y, 24)) out.push({ label: 'Talk', name: NAMES[quest.npc], ic: '💬', quest: true, d: 0, run: () => resolveGoal() });
    for (const t of TOWN) if (t.vis && near(t.x, t.y, 20)) out.push({ label: 'Talk', name: NAMES[t.who] || 'Townsfolk', ic: '💬', d: dist(P.x, P.y, t.x, t.y), run: () => ambientTalk(t) });
    for (const k of sceneNpcs) { const a = actors[k]; if (k === (quest && quest.npc) || !a) continue; if (near(a.x, a.y, 20)) out.push({ label: 'Talk', name: NAMES[k], ic: '💬', d: dist(P.x, P.y, a.x, a.y), run: () => { emote(k, 'chat'); window.DC && DC.toast(`${NAMES[k]} is waiting for the conversation to start.`); } }); }
    PAGESPOT.forEach(([x, y], i) => { if (!st().pages || st().pages[i]) return; if (near(x, y, 16)) out.push({ label: 'Pick up', name: 'A loose page', ic: '📄', d: dist(P.x, P.y, x, y), run: () => pickPage(i) }); });
    if (!riding && near(horse.x, horse.y, 20)) out.push({ label: 'Pat', name: 'Pilgrim', ic: '🐴', d: dist(P.x, P.y, horse.x, horse.y), run: () => { calm('horse', { DRIFT: -1 }); emoteAt(horse.x, horse.y - 18, 'love'); audio.pop(); window.DC && DC.toast('Pilgrim leans his whole head into your hand.'); } });
    if (near(cat.x, cat.y, 16)) out.push({ label: 'Pet', name: 'The post office cat', ic: '🐈', d: dist(P.x, P.y, cat.x, cat.y), run: () => { calm('cat', { DRIFT: -1 }); emoteAt(cat.x, cat.y - 16, 'love'); audio.pop(); window.DC && DC.toast('The cat purrs like a small engine.'); } });
    for (const i of insts) {
      if (i.critter && PET[i.critter] && near(i.x, i.y, 15)) { const p = PET[i.critter]; out.push({ label: p[0], name: '', ic: '🐾', d: dist(P.x, P.y, i.x, i.y), run: () => { emoteAt(i.x, i.y - 18, 'love'); audio[p[2]](); window.DC && DC.toast(p[1][Math.floor(Math.random() * p[1].length)]); } }); }
      else if (/well/.test(i.s) && near(i.x, i.y, 22)) out.push({ label: 'Drop a pebble', name: 'Well', ic: '🪨', d: dist(P.x, P.y, i.x, i.y), run: () => { audio.plip(); setTimeout(() => audio.splash(), 800); window.DC && DC.toast('A long breath of nothing… then plip.'); } });
      else if (/campfire|firepit/.test(i.s) && near(i.x, i.y, 22)) out.push({ label: 'Warm your hands', name: '', ic: '🔥', d: dist(P.x, P.y, i.x, i.y), run: () => { calm('fire', { DRIFT: -1 }); window.DC && DC.toast('The coals still hold a little heat.'); } });
    }
    for (const [dx, dy] of [[0, 14], [14, 0], [-14, 0], [0, -14]]) if (isWater(P.x + dx, P.y + dy) && !skip) { out.push({ label: 'Skip a stone', name: '', ic: '💧', d: 30, run: () => throwStone(dx, dy) }); break; }
    out.sort((a, b) => (b.quest ? 1 : 0) - (a.quest ? 1 : 0) || a.d - b.d);
    return out.slice(0, 4);
  }
  function act() { if (!cands.length) return; const c = cands[((selIdx % cands.length) + cands.length) % cands.length]; audio.blip(); c.run(); }
  function pickPage(i) { const s = st(); s.pages[i] = true; audio.page(); const n = Object.keys(s.pages).length; window.DC && DC.banner('Loose page found', `“${PAGES[i]}”`, `${n} of ${PAGES.length}`, 'item'); if (n === PAGES.length) DC.apply({ HEART: 1, NERVE: 1 }); DC.save(); }
  function throwStone(dx, dy) { const l = Math.hypot(dx, dy); skip = { x: P.x, y: P.y - 4, vx: dx / l * 70, vy: dy / l * 40, hop: 0, hops: 2 + Math.floor(Math.random() * 6), t: 0 }; audio.pop(); }
  async function ambientTalk(t) {
    if (!window.DC) return; busy = true; const ls = t.lines(chapter); const line = ls[Math.floor(Math.random() * ls.length)];
    const a = actor(t.key, t.spec, t.x, t.y); a.alpha = 1;
    await DC.chat([{ s: t.who, to: 'eli', t: line }], t.key); busy = false;
  }

  // ======================= story hooks =======================
  function resolveGoal() { if (!goalResolve) return; const r = goalResolve; goalResolve = null; r(); }
  function sceneSpot(loc, i) {
    const L = LOC[loc], s = L.stand; const offs = [[0, 0], [16, -10], [-16, -10], [22, 8], [-22, 8], [0, -18]];
    const o = offs[i % offs.length]; return snap(s[0] + o[0], s[1] + o[1]);
  }
  function placeScene(sc) {
    for (const k of sceneNpcs) if (actors[k] && k !== 'eli') actors[k].visible = false;
    sceneNpcs = [];
    const keysIn = [sc.talk, ...(sc.others || [])].filter((k) => k && k !== 'eli');
    keysIn.forEach((k, i) => { const p = sceneSpot(sc.loc, i); const a = actor(k, k, p[0], p[1]); a.path = []; a.alpha = 0; a.face = p[0] > P.x ? -1 : 1; sceneNpcs.push(k); });
  }
  function setQuest(q) { quest = q; }
  function waitGoal() { return new Promise((r) => (goalResolve = r)); }
  async function stageDialogue(sc) {
    const keysIn = sceneNpcs.slice();
    const main = keysIn[0] ? actors[keysIn[0]] : null;
    P.path = [];
    if (main) {
      const side = P.x <= main.x ? -1 : 1; const spot = snap(main.x + side * 15, main.y + 1);
      if (dist(P.x, P.y, spot[0], spot[1]) > 3) {
        if (dist(P.x, P.y, spot[0], spot[1]) < 90) await walkTo(P, spot[0], spot[1]);
        else await fade(() => { P.x = spot[0]; P.y = spot[1]; });
      }
      P.face = main.x < P.x ? -1 : 1; main.face = P.x < main.x ? -1 : 1;
      for (const k of keysIn.slice(1)) { const a = actors[k]; a.face = (main.x + P.x) / 2 < a.x ? -1 : 1; }
    } else {
      const s = LOC[sc.loc].stand; if (dist(P.x, P.y, s[0], s[1]) > 40) await fade(() => { P.x = s[0]; P.y = s[1]; });
    }
    focusKeys = ['eli', ...keysIn];
    enterCine();
  }
  function enterCine() { mode = 'cine'; G.classList.add('cine'); zoomT = TOUCH ? 1.5 : 1.75; }
  function exitCine() { mode = 'explore'; G.classList.remove('cine'); zoomT = 1; speaker = null; focusKeys = []; }
  function fade(fn) { return new Promise((res) => { const f = $('#fade'); f.classList.add('on'); setTimeout(() => { fn && fn(); snapCam = true; setTimeout(() => { f.classList.remove('on'); setTimeout(res, 300 / SPEED); }, 250 / SPEED); }, 560 / SPEED); }); }
  let snapCam = false;
  function teleport(loc) { const s = LOC[loc].stand; P.x = s[0]; P.y = s[1]; P.path = []; snapCam = true; }
  function emote(key, kind) { const a = actors[key]; if (a) emoteAt(a.x, a.y - 22, kind); }
  function emoteAt(x, y, kind) { const e = document.createElement('img'); e.className = 'emo'; e.src = EMO[kind] || EMO.chat; wmarks.appendChild(e); emos.push({ e, x, y, t: 1.8 }); }
  async function ride(cfg, toLoc) {
    const to = LOC[toLoc].stand; let from = [P.x, P.y];
    if (dist(from[0], from[1], to[0], to[1]) < 260) { let far = null, fd = 0; for (const k in LOC) { const d = dist(LOC[k].stand[0], LOC[k].stand[1], to[0], to[1]); if (d > fd && d < 700 && findPath(LOC[k].stand[0], LOC[k].stand[1], to[0], to[1])) { fd = d; far = k; } } if (far) from = LOC[far].stand; }
    const path = findPath(from[0], from[1], to[0], to[1]) || [to];
    await fade(() => { horse.x = from[0]; horse.y = from[1]; P.visible = false; riding = { path: path.slice(), drift: !!cfg.drift, total: 0, done: 0 }; let L = 0, px = from[0], py = from[1]; for (const p of path) { L += dist(px, py, p[0], p[1]); [px, py] = p; } riding.total = L; riding.speed = clamp(L / (cfg.drift ? 11 : 8), 40, 130); mode = 'ride'; G.classList.add('ride'); });
    await new Promise((res) => (riding.res = res));
    await fade(() => { riding = null; P.visible = true; P.x = to[0]; P.y = to[1]; horse.x = HITCH[0]; horse.y = HITCH[1]; horse.face = -1; G.classList.remove('ride'); mode = 'cine'; });
  }
  function areaName(name, sub) { const el = $('#areaname'); el.querySelector('.an-name').textContent = name; el.querySelector('.an-sub').textContent = sub || ''; el.classList.add('show'); clearTimeout(areaName.t); areaName.t = setTimeout(() => el.classList.remove('show'), 3800 / SPEED); }

  // ======================= drawing =======================
  let SC = 4, VW = 320, VH = 200, ox = 0, oy = 0;
  function resize() {
    const W = innerWidth, H = innerHeight;
    SC = Math.max(2, Math.round(Math.min(H, W * .62) / 205));
    VW = Math.ceil(W / SC / 2) * 2 + 2; VH = Math.ceil(H / SC / 2) * 2 + 2;
    for (const c of [view, fxc, lc]) { c.width = VW; c.height = VH; }
    view.style.width = VW * SC + 'px'; view.style.height = VH * SC + 'px'; ctx.imageSmoothingEnabled = false;
  }
  addEventListener('resize', resize); resize();
  function drawCast(spec, x, y, face, moving, run, f, alpha = 1, talking = false) {
    const anim = moving ? (run ? 'run' : 'walk') : 'idle'; const m = CAST[`${spec}_${anim}`], im = castImg[`${spec}_${anim}`]; if (!m) return;
    const fr = Math.floor(f * (moving ? 1 : .55)) % m.n;
    ctx.save(); ctx.globalAlpha = alpha; ctx.translate(Math.round(x), Math.round(y - (talking ? Math.abs(Math.sin(T * 9)) * .9 : 0))); if (face < 0) ctx.scale(-1, 1);
    ctx.drawImage(im, fr * m.w, 0, m.w, m.h, -m.ox, -m.oy, m.w, m.h); ctx.restore();
  }
  const shadow = (x, y, rx) => { ctx.fillStyle = 'rgba(40,20,50,.28)'; ctx.beginPath(); ctx.ellipse(Math.round(x), Math.round(y), rx, rx * .4, 0, 0, 7); ctx.fill(); };
  function drawSprite(i) {
    const s = i.sp; const f = s.n > 1 && s.fps ? (Math.floor(T * s.fps + i.ph * s.n)) % s.n : Math.floor(i.f) % s.n;
    const flip = i.sx < 0 || i.flipX, x = Math.round(i.x), y = Math.round(i.y - (i.z || 0));
    if (flip) { ctx.save(); ctx.translate(x, y); ctx.scale(-1, 1); ctx.drawImage(s.im, f * s.w, 0, s.w, s.h, -s.ox, -s.oy, s.w, s.h); ctx.restore(); }
    else ctx.drawImage(s.im, f * s.w, 0, s.w, s.h, x - s.ox, y - s.oy, s.w, s.h);
  }
  const pageImg = (() => { const c = document.createElement('canvas'); c.width = 7; c.height = 8; const x = c.getContext('2d'); x.fillStyle = '#3a2c1c'; x.fillRect(0, 0, 7, 8); x.fillStyle = '#f4ead0'; x.fillRect(1, 1, 5, 6); x.fillStyle = '#8a7a5a'; x.fillRect(2, 2, 3, 1); x.fillRect(2, 4, 3, 1); return c; })();

  // tags & quest marker DOM
  const tagEls = {}; const qdEl = document.createElement('div'); qdEl.className = 'qd'; qdEl.innerHTML = '<div class="dia"></div><div class="dm"></div><div class="arr"></div>'; wmarks.appendChild(qdEl);
  function tag(key, show, x, y, label, sub) {
    let e = tagEls[key]; if (!e) { e = tagEls[key] = document.createElement('div'); e.className = 'tag'; wmarks.appendChild(e); }
    if (!show) { e.style.opacity = 0; return; }
    e.innerHTML = label + (sub ? `<span class="t-sub">${sub}</span>` : ''); e.style.opacity = 1; e.style.left = x + 'px'; e.style.top = y + 'px';
  }
  const toScreen = (x, y) => { const r = view.getBoundingClientRect(), k = r.width / VW; return [r.left + (x - ox) * k, r.top + (y - oy) * k]; };

  // ======================= frame =======================
  let last = performance.now(), T = 0, miniT = 0, loadDone = false;
  function frame(now) {
    const rdt = Math.min(.05, (now - last) / 1000); last = now; const dt = rdt * SPEED; T += dt;
    if (!ready) { requestAnimationFrame(frame); return; }
    if (!loadDone) { loadDone = true; $('#loading').classList.add('gone'); World.onReady && World.onReady(); }
    const tm = MOODS[mood]; for (const k in tm) { if (Array.isArray(tm[k])) mc[k] = tm[k]; else mc[k] = lerp(mc[k] ?? tm[k], tm[k], 1 - Math.exp(-rdt * 1.5)); }
    audio.music(musicFor());

    // --- player control
    if (mode === 'explore' && !busy && !DC_overlay()) {
      let mx = 0, my = 0;
      if (keys.w || keys.arrowup) my -= 1; if (keys.s || keys.arrowdown) my += 1; if (keys.a || keys.arrowleft) mx -= 1; if (keys.d || keys.arrowright) mx += 1;
      if (stick.on) { mx = stick.x; my = stick.y; }
      const m = Math.hypot(mx, my);
      if (m > .15) {
        P.path = []; const run = keys.shift || runToggle || (stick.on && m > .92); const sp = (run ? 78 : 46) * dt * Math.min(1, m);
        const nx = P.x + mx / m * sp, ny = P.y + my / m * sp; let moved = false;
        if (feetFree(nx, P.y)) { P.x = nx; moved = true; } if (feetFree(P.x, ny)) { P.y = ny; moved = true; }
        if (!moved) { // slide along corners
          const cx = Math.floor(P.x / CELL) * CELL + 4, cy = Math.floor(P.y / CELL) * CELL + 5;
          if (Math.abs(mx) > Math.abs(my)) { const ty = P.y + clamp(cy - P.y, -sp, sp); if (feetFree(P.x, ty)) P.y = ty; } else { const tx = P.x + clamp(cx - P.x, -sp, sp); if (feetFree(tx, P.y)) P.x = tx; }
        }
        P.moving = true; P.run = run; P.f += dt * (run ? 12 : 9); if (Math.abs(mx) > .2) P.face = mx < 0 ? -1 : 1;
        if (Math.random() < dt * (run ? 10 : 3)) particles.push({ x: P.x + (Math.random() - .5) * 4, y: P.y, vx: (Math.random() - .5) * 8, vy: -5, g: 0, t: .45, c: '#e8d8b0' });
      } else stepActor(P, dt);
      // arrival goals
      if (quest && !quest.npc && goalResolve && dist(P.x, P.y, quest.x, quest.y) < 14) { P.path = []; resolveGoal(); }
      // pages are picked up by walking over them too
    } else if (mode === 'cine') stepActor(P, dt);
    for (const k of sceneNpcs) { const a = actors[k]; if (a) { a.alpha = Math.min(1, a.alpha + dt * 2.5); stepActor(a, dt); } }
    // ride
    if (riding) {
      const r = riding; if (r.path.length) { const [tx, ty] = r.path[0], d = dist(horse.x, horse.y, tx, ty), sp = r.speed * dt; if (d <= sp) { horse.x = tx; horse.y = ty; r.path.shift(); r.done += d; } else { horse.x += (tx - horse.x) / d * sp; horse.y += (ty - horse.y) / d * sp; r.done += sp; if (Math.abs(tx - horse.x) > .5) horse.face = tx < horse.x ? -1 : 1; } horse.f += dt * 8; }
      else if (r.res) { const f = r.res; r.res = null; f(); }
      P.x = horse.x; P.y = horse.y;
    }
    // critters
    for (const i of insts) {
      if (!i.critter) continue;
      if (i.critter === 'bird') { if (!i.fly && dist(P.x, P.y, i.x, i.y) < 30 && mode === 'explore') { i.fly = 5; i.vx = (i.x - P.x) * 2 || 30; } if (i.fly) { i.fly -= dt; i.x += i.vx * dt; i.z = (i.z || 0) + dt * 40; if (i.fly <= 0) { i.fly = 0; i.x = i.hx; i.z = 0; } } continue; }
      const d = dist(P.x, P.y, i.x, i.y);
      if (d < 18 && mode === 'explore' && i.flee <= 0 && i.critter === 'chicken') { i.flee = .8; const a = Math.atan2(i.y - P.y, i.x - P.x); const t = [i.x + Math.cos(a) * 30, i.y + Math.sin(a) * 30]; if (openAt(t[0], t[1])) { i.tx = t[0]; i.ty = t[1]; } if (Math.random() < .5) { emoteAt(i.x, i.y - 16, 'alerted'); audio.bawk(); } }
      i.flee -= dt; i.wait -= dt;
      const dx = i.tx - i.x, dy = i.ty - i.y, dd = Math.hypot(dx, dy);
      if (dd > 1) { const sp = (i.flee > 0 ? 70 : 10) * dt; i.x += dx / dd * Math.min(sp, dd); i.y += dy / dd * Math.min(sp, dd); i.flipX = dx > 0; i.sortY = i.y - i.sp.oy + i.sp.h - 2; }
      else if (i.wait <= 0 && i.critter !== 'cow') { const t = [i.hx + (rnd() - .5) * 40, i.hy + (rnd() - .5) * 24]; if (openAt(t[0], t[1])) { i.tx = t[0]; i.ty = t[1]; } i.wait = 2 + rnd() * 4; }
    }
    for (const t of TOWN) { t.vis = mode !== 'title' && chapter >= t.ch[0] && chapter <= t.ch[1] && !sceneNpcs.includes(t.who) && !(t.who === 'ma' && sceneNpcs.includes('ma')); t.f = (t.f || 0) + dt * 6; }
    if (skip) { const s = skip; s.t += dt; s.x += s.vx * dt; s.y += s.vy * dt; if (s.t > .32) { s.t = 0; s.hop++; ripples.push({ x: s.x, y: s.y + 6, t: 1 }); audio.plip(); if (s.hop >= s.hops || !isWater(s.x, s.y + 6)) { const S = st(); const best = Math.max(S.flags.bestSkip || 0, s.hop); const nb = s.hop > (S.flags.bestSkip || 0); S.flags.bestSkip = best; audio.splash(); window.DC && DC.toast(`${s.hop} skip${s.hop === 1 ? '' : 's'}!${nb ? ' A new best.' : ` Best: ${best}.`}`); skip = null; } } }
    if (mood === 'winter') for (let i = 0; i < 3; i++) particles.push({ x: cam.x - VW / 2 + Math.random() * VW, y: cam.y - VH / 2 - 4, vx: (Math.random() - .5) * 8, vy: 14 + Math.random() * 10, g: 0, t: 8, c: '#ffffff', s: Math.random() < .3 ? 2 : 1 });
    if (mc.dark > .25 && Math.random() < dt * 10) particles.push({ x: cam.x - VW / 2 + Math.random() * VW, y: cam.y - VH / 2 + Math.random() * VH, vx: (Math.random() - .5) * 6, vy: -3, g: 0, t: 3, glow: true, ff: Math.random() * 6 });
    if (Math.random() < dt * 4) particles.push({ x: cam.x - VW / 2 + Math.random() * VW, y: cam.y - VH / 2 + Math.random() * VH, vx: 5, vy: -1, g: 0, t: 4, glow: true, mote: true });
    particles = particles.filter((p) => { p.t -= dt; p.vy += (p.g || 0) * dt; p.x += p.vx * dt; p.y += p.vy * dt; return p.t > 0; });
    ripples = ripples.filter((r) => (r.t -= dt) > 0);

    // --- camera & zoom
    let tx = P.x, ty = P.y - 8;
    if (mode === 'title') { tx = 680 + Math.sin(T * .05 / SPEED) * 330; ty = 400 + Math.cos(T * .04 / SPEED) * 120; }
    else if (mode === 'cine' && focusKeys.length) { let sx = 0, sy = 0, n = 0; for (const k of focusKeys) { const a = actors[k]; if (a && a.visible) { sx += a.x; sy += a.y; n++; } } if (n) { tx = sx / n; ty = sy / n - 12; } }
    const k1 = 1 - Math.exp(-rdt * (mode === 'title' ? 1 : mode === 'cine' ? 3 : 6));
    if (snapCam) { cam.x = tx; cam.y = ty; snapCam = false; }
    else if (mode === 'explore' && dist(cam.x, cam.y, tx, ty) < 30) { cam.x = tx; cam.y = ty; }
    else { cam.x = lerp(cam.x, tx, k1); cam.y = lerp(cam.y, ty, k1); }
    cam.x = clamp(cam.x, VW / 2, MW - VW / 2); cam.y = clamp(cam.y, VH / 2, MH - VH / 2);
    zoom = lerp(zoom, zoomT, 1 - Math.exp(-rdt * 3)); if (Math.abs(zoom - zoomT) < .002) zoom = zoomT;
    stage.style.transform = zoom === 1 ? '' : `scale(${zoom.toFixed(4)})`;
    ox = Math.round(cam.x) - VW / 2; oy = Math.round(cam.y) - VH / 2;

    // --- world
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
    ctx.drawImage(ground[Math.floor(T * WD.tileFps) % WD.groundFrames], ox, oy, VW, VH, 0, 0, VW, VH);
    if (mood === 'winter') { ctx.fillStyle = 'rgba(240,246,255,.42)'; ctx.fillRect(0, 0, VW, VH); }
    ctx.save(); ctx.translate(-ox, -oy);
    for (const r of ripples) { ctx.strokeStyle = `rgba(235,250,255,${r.t})`; ctx.beginPath(); ctx.ellipse(r.x, r.y, 2 + (1 - r.t) * 8, (2 + (1 - r.t) * 8) * .45, 0, 0, 7); ctx.stroke(); }
    const inView = (x, y, w = 60, h = 80) => x + w > ox - 20 && x - w < ox + VW + 20 && y + 10 > oy && y - h < oy + VH + 20;
    for (const i of insts) if (i.flat && inView(i.x, i.y, i.sp.w, i.sp.h)) drawSprite(i);
    const list = [];
    for (const o of WD.objects) if (o.x + o.w > ox - 10 && o.x < ox + VW + 10 && o.y + o.h > oy - 10 && o.y < oy + VH + 10) list.push({ y: o.sort, o });
    for (const i of insts) if (!i.flat && inView(i.x, i.y, i.sp.w, i.sp.h + 20)) list.push({ y: i.sortY, i });
    PAGESPOT.forEach(([x, y], i) => { if (st().pages && !st().pages[i] && mode !== 'title' && inView(x, y)) list.push({ y, draw: () => { ctx.drawImage(pageImg, Math.round(x - 3), Math.round(y - 9 - Math.abs(Math.sin(T * 2 + i)) * 2)); if (Math.sin(T * 4 + i * 2) > .75) { ctx.fillStyle = '#fffbd0'; ctx.fillRect(Math.round(x + 3), Math.round(y - 11), 1, 1); } } }); });
    for (const t of TOWN) if (t.vis && inView(t.x, t.y)) { const look = dist(P.x, P.y, t.x, t.y) < 40 ? (P.x < t.x ? -1 : 1) : 1; list.push({ y: t.y, draw: () => { shadow(t.x, t.y, 4); drawCast(t.spec, t.x, t.y, look, false, false, t.f); } }); }
    for (const k of sceneNpcs) { const a = actors[k]; if (a && a.visible && inView(a.x, a.y)) list.push({ y: a.y, draw: () => { shadow(a.x, a.y, 4); drawCast(a.spec, a.x, a.y, a.face, a.moving, a.run, a.f, a.alpha, speaker === k); } }); }
    list.push({ y: cat.y, draw: () => { shadow(cat.x, cat.y, 5); ctx.drawImage(catImg, 0, 0, 11, 17, Math.round(cat.x - 5), Math.round(cat.y - 15 + (Math.sin(T * 2) > .5 ? 0 : 1)), 11, 17); } });
    list.push({ y: horse.y, draw: () => { shadow(horse.x, horse.y, 10); const fr = riding ? Math.floor(horse.f) % 2 : (Math.sin(T * .8) > .9 ? 1 : 0); ctx.save(); ctx.translate(Math.round(horse.x), Math.round(horse.y)); if (horse.face > 0) ctx.scale(-1, 1); ctx.drawImage(horseImg, fr * 23, 0, 23, 16, -11, -15, 23, 16); ctx.restore(); if (riding) drawCast('eli', horse.x, horse.y - 7, horse.face, false, false, 0); } });
    if (P.visible && mode !== 'title') list.push({ y: P.y, draw: () => { shadow(P.x, P.y, 4); drawCast('eli', P.x, P.y, P.face, P.moving, P.run, P.f, 1, speaker === 'eli'); } });
    list.sort((a, b) => a.y - b.y);
    for (const d of list) {
      if (d.draw) { d.draw(); continue; }
      if (d.o) { const o = d.o; const behind = o.kind === 'building' && !riding && P.y < o.sort - Math.max(14, o.h * .4) && P.y > o.y + 8 && P.x > o.x + 4 && P.x < o.x + o.w - 4; ctx.globalAlpha = behind ? .5 : 1; ctx.drawImage(o.im, o.x, o.y); ctx.globalAlpha = 1; continue; }
      drawSprite(d.i);
    }
    if (skip) { ctx.fillStyle = '#5a5a60'; ctx.fillRect(Math.round(skip.x), Math.round(skip.y - Math.sin(skip.t / .32 * Math.PI) * 6), 2, 2); }
    for (const p of particles) { if (p.glow) continue; ctx.globalAlpha = Math.min(1, p.t * 2); ctx.fillStyle = p.c; const s = p.s || 1; ctx.fillRect(Math.round(p.x), Math.round(p.y), s, s); }
    ctx.globalAlpha = 1; ctx.drawImage(topImg, 0, 0); ctx.restore();

    // --- lighting
    const [tr, tg, tb] = mc.tint;
    if (mc.tA > .01) { ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = `rgba(${tr},${tg},${tb},${mc.tA * 2.2})`; ctx.fillRect(0, 0, VW, VH); ctx.globalCompositeOperation = 'source-over'; }
    if (mc.dark > .01) {
      const [dr, dg, db] = mc.darkC; lctx.globalCompositeOperation = 'source-over'; lctx.clearRect(0, 0, VW, VH); lctx.fillStyle = `rgba(${dr},${dg},${db},${mc.dark})`; lctx.fillRect(0, 0, VW, VH);
      lctx.globalCompositeOperation = 'destination-out';
      const Ls = lights.concat(quest ? [{ x: quest.x, y: quest.y - 10, r: 44 }] : [], [{ x: P.x, y: P.y - 8, r: 34, soft: .55 }]);
      for (const l of Ls) { const x = l.x - ox, y = l.y - oy; if (x < -80 || y < -80 || x > VW + 80 || y > VH + 80) continue; const r = l.r * (l.flick ? 1 + Math.sin(T * 7) * .04 : 1); const g = lctx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, `rgba(0,0,0,${l.soft || 1})`); g.addColorStop(1, 'rgba(0,0,0,0)'); lctx.fillStyle = g; lctx.fillRect(x - r, y - r, r * 2, r * 2); }
      ctx.drawImage(lc, 0, 0);
    }
    ctx.globalCompositeOperation = 'lighter';
    if (mc.glow > .05) for (const l of lights) { if (!l.always && mc.dark < .15) continue; const x = l.x - ox, y = l.y - oy; if (x < -60 || y < -60 || x > VW + 60 || y > VH + 60) continue; const r = l.r * .55; const g = ctx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, `rgba(${l.c},${.35 * mc.glow})`); g.addColorStop(1, `rgba(${l.c},0)`); ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2); }
    if (mc.rays > .02) for (let i = 0; i < 4; i++) { const x0 = ((i * 140 + T * 4) % (VW + 200)) - 100; ctx.save(); ctx.translate(x0, -20); ctx.rotate(.5); const g = ctx.createLinearGradient(0, 0, 0, VH * 1.4); g.addColorStop(0, `rgba(255,220,160,${.12 * mc.rays})`); g.addColorStop(1, 'rgba(255,220,160,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, 22 + (i % 2) * 16, VH * 1.4); ctx.restore(); }
    for (const p of particles) { if (!p.glow) continue; const x = p.x - ox, y = p.y - oy; const a = (p.mote ? .45 : (.5 + .5 * Math.sin(T * 4 + p.ff))) * Math.min(1, p.t); ctx.fillStyle = `rgba(255,240,170,${a})`; ctx.fillRect(Math.round(x), Math.round(y), 1, 1); }
    ctx.globalCompositeOperation = 'source-over';
    if (!LOWFX) {
      fctx.clearRect(0, 0, VW, VH); fctx.filter = 'blur(2px)'; fctx.drawImage(view, 0, 0); fctx.filter = 'none'; fctx.globalCompositeOperation = 'destination-in';
      const m = fctx.createLinearGradient(0, 0, 0, VH); m.addColorStop(0, 'rgba(0,0,0,1)'); m.addColorStop(.22, 'rgba(0,0,0,0)'); m.addColorStop(.74, 'rgba(0,0,0,0)'); m.addColorStop(1, 'rgba(0,0,0,1)'); fctx.fillStyle = m; fctx.fillRect(0, 0, VW, VH); fctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(fxc, 0, 0);
    }
    const v = ctx.createRadialGradient(VW / 2, VH / 2, VH * .35, VW / 2, VH / 2, VH * .9); v.addColorStop(0, 'rgba(20,10,30,0)'); v.addColorStop(1, 'rgba(20,10,30,.42)'); ctx.fillStyle = v; ctx.fillRect(0, 0, VW, VH);

    // --- DOM overlays
    updateDom(dt);
    requestAnimationFrame(frame);
  }

  const prEl = $('#prompts'), clockEl = $('#clock'), mini = $('#mini canvas'), mx2 = mini.getContext('2d'), qEl = $('#quest'), tAct = $('#t-act');
  let prKey = '';
  function updateDom(dt) {
    // prompts
    cands = mode === 'explore' && !busy && !DC_overlay() ? candidates() : [];
    const sel = cands.length ? ((selIdx % cands.length) + cands.length) % cands.length : 0;
    const key = cands.map((c) => c.label + c.name).join('|') + sel;
    if (key !== prKey) {
      prKey = key; prEl.innerHTML = '';
      cands.forEach((c, i) => { const b = document.createElement('div'); b.className = 'pr' + (i === sel ? ' sel' : '') + (c.quest ? ' quest' : ''); b.innerHTML = `<span class="k">F</span><span class="ic">${c.ic}</span><span>${c.label}${c.name ? ` <span style="opacity:.75;font-weight:600">· ${c.name}</span>` : ''}</span>`; b.onclick = () => { selIdx = i; act(); }; prEl.appendChild(b); });
    }
    tAct.classList.toggle('live', cands.length > 0);
    // name tags
    const showTags = mode === 'cine' || mode === 'explore';
    for (const k of Object.keys(tagEls)) tagEls[k]._keep = false;
    const tagFor = (k, a, label, sub, force) => { const near = dist(P.x, P.y, a.x, a.y) < 64; if (!(showTags && (force || near))) return; const m = CAST[a.spec + '_idle']; const [sx, sy] = toScreen(a.x, a.y - (m ? m.oy : 18) - 3); const z = zoom, cx = innerWidth / 2, cy = innerHeight / 2; tag(k, true, cx + (sx - cx) * z, cy + (sy - cy) * z, label, sub); tagEls[k]._keep = true; };
    if (mode !== 'title') {
      for (const k of sceneNpcs) { const a = actors[k]; if (a && a.visible && a.alpha > .5) tagFor(k, a, NAMES[k], '', mode === 'cine'); }
      for (const t of TOWN) if (t.vis && mode === 'explore') tagFor(t.key, t, NAMES[t.who], '', false);
    }
    for (const k of Object.keys(tagEls)) if (!tagEls[k]._keep) tag(k, false);
    // quest diamond
    if (quest && mode === 'explore' && goalResolve) {
      if (quest.npc && actors[quest.npc]) { quest.x = actors[quest.npc].x; quest.y = actors[quest.npc].y; }
      const m = quest.npc ? 30 : 12; const [sx, sy] = toScreen(quest.x, quest.y - m); const W = innerWidth, H = innerHeight, pad = 46;
      const d = Math.round(dist(P.x, P.y, quest.x, quest.y) / 8);
      qdEl.style.display = 'block'; qdEl.querySelector('.dm').textContent = d + 'm';
      if (sx < pad || sy < pad + 40 || sx > W - pad || sy > H - pad) {
        const cx = W / 2, cy = H / 2, a = Math.atan2(sy - cy, sx - cx), k = Math.min((W / 2 - pad) / Math.abs(Math.cos(a) || 1e-6), (H / 2 - pad - 20) / Math.abs(Math.sin(a) || 1e-6));
        qdEl.style.left = cx + Math.cos(a) * k + 'px'; qdEl.style.top = cy + Math.sin(a) * k + 10 + 'px'; qdEl.classList.add('edge'); const ar = qdEl.querySelector('.arr'); ar.style.display = 'block'; ar.style.transform = `rotate(${a}rad) translateX(16px)`;
      } else { qdEl.style.left = sx + 'px'; qdEl.style.top = sy + 'px'; qdEl.classList.remove('edge'); qdEl.querySelector('.arr').style.display = 'none'; }
      qEl.querySelector('.q-dist').textContent = d + 'm';
    } else qdEl.style.display = 'none';
    // emotes
    for (let i = emos.length - 1; i >= 0; i--) { const e = emos[i]; e.t -= dt; if (e.t <= 0) { e.e.remove(); emos.splice(i, 1); continue; } const [sx, sy] = toScreen(e.x, e.y); const z = zoom, cx = innerWidth / 2, cy = innerHeight / 2; e.e.style.left = cx + (sx - cx) * z + 'px'; e.e.style.top = cy + (sy - cy) * z + 'px'; e.e.style.width = 9 * SC * z + 'px'; e.e.style.opacity = Math.min(1, e.t * 2); }
    // clock
    const hr = mc.hour, hh = Math.floor(hr), mm = Math.floor((hr - hh) * 60 / 15) * 15;
    clockEl.textContent = `${((hh + 11) % 12) + 1}:${String(mm).padStart(2, '0')} ${hh >= 12 ? 'PM' : 'AM'}`;
    // minimap
    miniT -= dt; if (miniT <= 0 && mode !== 'title') { miniT = .1; drawMini(); }
    // visited locations (for the map / fast travel)
    if (mode === 'explore' && window.DC) for (const k in LOC) if (!DC.state.visited[k] && dist(P.x, P.y, LOC[k].stand[0], LOC[k].stand[1]) < 50) { DC.state.visited[k] = true; areaName(LOC[k].name, LOC[k].town); }
    // ride progress
    if (riding && window.DC) DC.rideProgress(riding.total ? riding.done / riding.total : 0, riding.drift);
  }
  function drawMini() {
    const S = 150, sc = .5, cx = P.x, cy = P.y;
    mx2.imageSmoothingEnabled = false; mx2.fillStyle = '#26507a'; mx2.fillRect(0, 0, S, S);
    mx2.drawImage(ground[0], cx - S / sc / 2, cy - S / sc / 2, S / sc, S / sc, 0, 0, S, S);
    mx2.fillStyle = 'rgba(15,20,40,.18)'; mx2.fillRect(0, 0, S, S);
    const tp = (x, y) => [(x - cx) * sc + S / 2, (y - cy) * sc + S / 2];
    for (const k in LOC) { const [x, y] = tp(LOC[k].stand[0], LOC[k].stand[1]); if (x < 0 || y < 0 || x > S || y > S) continue; mx2.fillStyle = window.DC && DC.state.visited[k] ? '#9cc4f0' : 'rgba(255,255,255,.35)'; mx2.fillRect(x - 2, y - 2, 4, 4); }
    for (const t of TOWN) if (t.vis) { const [x, y] = tp(t.x, t.y); mx2.fillStyle = '#e8e0c8'; mx2.fillRect(x - 1.5, y - 1.5, 3, 3); }
    if (quest && goalResolve) {
      let [x, y] = tp(quest.x, quest.y); const dx = x - S / 2, dy = y - S / 2, r = Math.hypot(dx, dy); if (r > S / 2 - 10) { x = S / 2 + dx / r * (S / 2 - 10); y = S / 2 + dy / r * (S / 2 - 10); }
      mx2.save(); mx2.translate(x, y); mx2.rotate(Math.PI / 4); mx2.fillStyle = '#f3dca2'; mx2.strokeStyle = '#5a4420'; mx2.lineWidth = 2; mx2.fillRect(-5, -5, 10, 10); mx2.strokeRect(-5, -5, 10, 10); mx2.restore();
    }
    mx2.save(); mx2.translate(S / 2, S / 2); mx2.rotate(P.face < 0 ? Math.PI : 0); mx2.fillStyle = '#fff'; mx2.strokeStyle = '#e8604a'; mx2.lineWidth = 2; mx2.beginPath(); mx2.moveTo(7, 0); mx2.lineTo(-5, -5); mx2.lineTo(-2, 0); mx2.lineTo(-5, 5); mx2.closePath(); mx2.fill(); mx2.stroke(); mx2.restore();
  }
  $('#mini').onclick = () => window.DC && DC.openMap();

  // full map (pre-rendered once)
  let mapCanvas = null;
  function mapImage() {
    if (mapCanvas) return mapCanvas;
    const c = document.createElement('canvas'); c.width = MW; c.height = MH; const x = c.getContext('2d');
    x.drawImage(ground[0], 0, 0); for (const o of WD.objects) x.drawImage(o.im, o.x, o.y); x.drawImage(topImg, 0, 0);
    return (mapCanvas = c);
  }

  requestAnimationFrame(frame);
  window.World = {
    LOC, NAMES, SPEED, TOUCH, actors, get ready() { return ready; }, get mode() { return mode; }, get player() { return P; }, get quest() { return quest; }, get waiting() { return !!goalResolve; },
    set busy(v) { busy = v; }, get busy() { return busy; },
    setMood(m) { mood = MOODS[m] ? m : 'golden'; }, setChapter(n) { chapter = n; },
    setMode(m) { mode = m; G.classList.toggle('title', m === 'title'); if (m === 'explore') { G.classList.remove('cine'); zoomT = 1; } },
    placeScene, setQuest, waitGoal, stageDialogue, enterCine, exitCine, fade, teleport, ride, emote, areaName, walkTo, findPath, snap, mapImage, audio,
    speak(k) { speaker = k; if (k && actors[k] && k !== 'eli' && P.visible) actors[k].face = P.x < actors[k].x ? -1 : 1; },
    focus(keysArr) { focusKeys = keysArr; },
    resolveGoal, candidates: () => cands, act, pages: PAGES, pageSpots: PAGESPOT,
    guide() { if (!quest || !goalResolve) return false; const p = findPath(P.x, P.y, quest.x, quest.y); if (p) { P.path = p; return true; } return false; },
    reset() { P.x = LOC.home.stand[0]; P.y = LOC.home.stand[1]; P.path = []; P.visible = true; sceneNpcs.forEach((k) => actors[k] && (actors[k].visible = false)); sceneNpcs = []; quest = null; goalResolve = null; riding = null; snapCam = true; },
    get cam() { return cam; },
  };
})();
