"""Compile the story script (story/*.txt) into story.json for the web game."""
import json, re, glob, sys, os
D = __import__('os').path.dirname(__import__('os').path.abspath(__file__)) + '/'
NAMES = {
 'eli': 'Eli', 'ma': 'Ma', 'june': 'June', 'larkin': 'Mrs. Larkin', 'bright': 'Miss Bright', 'thorne': 'Miss Thorne', 'girl': 'A girl by the creek',
 'rhoda': 'Aunt Rhoda', 'toby': 'Toby', 'penelope': 'Penelope', 'nate': 'Nate', 'nico': 'Nico', 'rook': 'Rook', 'gideon': 'Gideon', 'abel': 'Abel',
 'clerk': 'Mr. Odell', 'amos': 'Old Amos', 'ezra': 'Ezra', 'adam': 'Adam', 'bram': 'Bram', 'rosie': 'Rosie', 'sam': 'Sam', 'master': 'Mr. Cutter',
 'hattie': 'Hattie', 'lou': 'Lou', 'percy': 'Percy', 'danny': 'Danny Marlowe', 'lettie': 'Lettie Shaw', 'delphine': 'Delphine', 'hargrove': 'Mr. Hargrove',
 'iris': 'Iris Lane', 'viola': 'Viola', 'nell': 'Nell', 'wren': 'Wren', 'doc': 'Doc Whitlow', 'wanting': 'The part that wants', 'knowing': 'The part that knows',
 'nobody': 'no one', 'mabel': 'Mabel',
}
STATS = {'HEART', 'STONE', 'DRIFT', 'NERVE'}
def fx_parse(s):
    out = {}
    s = s.strip()
    if not s: return out
    for part in s.split(','):
        part = part.strip()
        if not part: continue
        k, v = [x.strip() for x in part.split(':', 1)] if ':' in part else [x.strip() for x in part.split('=', 1)]
        if k == 'set': out.setdefault('set', []).append(v); continue
        if k == 'N': k = 'NERVE'
        out[k] = int(v)
    return out
def expr(e):
    return re.sub(r'\bN\b', 'NERVE', e.strip())
def spk(code):
    code = code.strip(); key = code.lower()
    if key not in NAMES: raise SystemExit(f'unknown speaker {code}')
    return key
LINE = re.compile(r'^(?:\[if (?P<if>[^\]]+)\]\s*)?(?P<body>.*)$')
def parse_line(raw, ctx):
    m = LINE.match(raw.strip()); cond = m.group('if'); b = m.group('body')
    ln = None
    if b.startswith('N:'): ln = {'k': 'narr', 't': b[2:].strip()}
    elif b.startswith('~:'): ln = {'s': 'eli', 'k': 'thought', 't': b[2:].strip()}
    elif b.startswith('CARD ') or b.startswith('@card '):
        t, body = b.split(' ', 1)[1].split('|', 1); ln = {'card': {'title': t.strip(), 'body': body.strip()}}
    elif b.startswith('@item '):
        k, n, d = [x.strip() for x in b[6:].split('|')]; ln = {'item': {'id': k, 'name': n, 'desc': d}}
    else:
        mm = re.match(r'^(LETTER |WIRE )?([A-Za-z ]+?)(?:>([A-Za-z ]+))?:\s*(.*)$', b)
        if not mm: raise SystemExit(f'bad line: {raw!r} in {ctx}')
        kind, s, to, t = mm.groups()
        ln = {'s': spk(s), 't': t}
        if to: ln['to'] = spk(to)
        if kind: ln['k'] = kind.strip().lower()
    if cond: ln['if'] = expr(cond)
    return ln
def opt_parse(raw):
    s = raw.strip()[1:].strip(); o = {}
    while s.startswith('['):
        tag, s = s[1:].split(']', 1); s = s.strip()
        if tag == 'silent': o['silent'] = True
        elif tag.startswith('crack'): o['crack'] = True; o['crackNote'] = tag.split(':', 1)[1].strip() if ':' in tag else ''
        elif tag.startswith('req:'): r, lock = tag[4:].split('|', 1); o['req'] = expr(r); o['lock'] = lock.strip()
    nxt = None
    if ' -> ' in s: s, nxt = s.rsplit(' -> ', 1)
    fx = {}
    m = re.search(r'\{([^}]*)\}\s*$', s)
    if m: fx = fx_parse(m.group(1)); s = s[:m.start()].strip()
    o['t'] = s.strip().strip('"').replace('" "', '"') if False else s.strip()
    if fx: o['fx'] = fx
    if nxt: o['next'] = nxt.strip()
    o['say'] = []
    return o
chapters, scenes, endings, rules = [], [], {}, []
for f in sorted(glob.glob(D + '[0-9]*.txt')):
    cur = None; mode = None; opt = None; ending = None
    for i, raw in enumerate(open(f, encoding='utf-8').read().split('\n')):
        ctx = f'{f.split("/")[-1]}:{i+1}'
        if not raw.strip(): continue
        s = raw.rstrip()
        if s.startswith('@chapter'):
            n, t, sub, intro = [x.strip() for x in s[8:].split('|')]; chapters.append({'n': int(n), 'title': t, 'sub': sub, 'intro': intro}); continue
        if s.startswith('@scene'):
            parts = [x.strip() for x in s[6:].split('|')]; cur = {'id': parts[0], 'chapter': chapters[-1]['n'], 'lines': []}
            for p in parts[1:]:
                k, v = p.split('=', 1); k = k.strip(); v = v.strip()
                if k == 'others': cur['others'] = [spk(x) for x in v.split(',') if x.strip()]
                elif k == 'talk': cur['talk'] = spk(v)
                else: cur[k] = v
            scenes.append(cur); mode = 'lines'; opt = None; ending = None; continue
        if s.startswith('@endrules'): mode = 'rules'; cur = None; continue
        if s.startswith('@ending'):
            k, t, sub, loc, mood, cast = [x.strip() for x in s[7:].split('|')]
            ending = endings[k] = {'title': t, 'sub': sub, 'loc': loc, 'mood': mood, 'lines': []}
            if cast: ending['cast'] = spk(cast)
            mode = 'ending'; cur = None; continue
        if mode == 'rules':
            cond, go = s.split('->'); rules.append({'if': expr(cond)} if cond.strip() else {}); rules[-1]['go'] = go.strip(); continue
        if mode == 'ending':
            if s.startswith('@retry'):
                p = [x.strip() for x in s[6:].split('|')]; ending['retry'] = p[0]; ending['retryLabel'] = p[1]
                if len(p) > 2 and p[2]: ending['retryFx'] = {'eq': {('NERVE' if a == 'N' else a): int(b) for a, b in (x.split('=') for x in p[2].split(','))}}
                continue
            ending['lines'].append(parse_line(s, ctx)); continue
        if s.startswith('@post'): mode = 'lines'; opt = None; continue
        if s.startswith('@journal'): mode = 'journal'; cur['journal'] = []; continue
        if s.startswith('@enter'):
            k, v = s[6:].strip().split('='); cur['onEnter'] = {k: int(v)}; continue
        if s.startswith('@ride'):
            r = {}; rest = s[5:].strip()
            if rest.startswith('drift'): r['drift'] = True; rest = rest[5:].strip()
            if rest.startswith('notices='): r['notices'] = [x.strip() for x in rest[8:].split(';')]
            cur['lines'].append({'ride': r}); mode = 'lines'; continue
        if mode == 'journal':
            o = opt_parse(s); o.pop('say'); cur['journal'].append(o); continue
        if s.startswith('?'):
            p = s[1:].split('| timer='); ch = {'prompt': p[0].strip(), 'opts': []}
            if len(p) > 1: ch['timer'] = int(p[1])
            cur['lines'].append({'choice': ch}); cur['_ch'] = ch
            mode = 'choice'; continue
        if mode == 'choice' and s.lstrip().startswith('* ') and not s.startswith('  '):
            opt = opt_parse(s); cur['_ch']['opts'].append(opt); continue
        if mode == 'choice' and s.startswith('  ') and opt is not None:
            opt['say'].append(parse_line(s, ctx)); continue
        if mode == 'choice': mode = 'lines'
        cur['lines'].append(parse_line(s, ctx))
# validate
ids = {s['id'] for s in scenes}
for s in scenes:
    s.pop('_ch', None)
    for ln in s['lines']:
        for o in (ln.get('choice') or {}).get('opts', []):
            if not o['say']: o.pop('say')
            if o.get('next') and o['next'] not in ids: raise SystemExit('bad next ' + o['next'])
for e in endings.values():
    if e.get('retry') and e['retry'] not in ids: raise SystemExit('bad retry ' + e['retry'])
for r in rules:
    if r['go'] not in endings: raise SystemExit('bad ending ' + r['go'])
used = set()
def walk(o):
    if isinstance(o, dict):
        for k in ('s', 'to'):
            if k in o and isinstance(o[k], str): used.add(o[k])
        for v in o.values(): walk(v)
    elif isinstance(o, list):
        for v in o: walk(v)
walk(scenes); walk(endings)
for s in scenes:
    for k in [s.get('talk')] + s.get('others', []):
        if k: used.add(k)
out = {'title': 'The Quiet Kind', 'chapters': chapters, 'scenes': scenes, 'endingRules': rules, 'endings': endings, 'names': {k: NAMES[k] for k in sorted(used)}}
OUT = os.path.join(D, '..', 'public', 'data')
txt = json.dumps(out, ensure_ascii=False, indent=1)
open(os.path.join(OUT, 'story.json'), 'w', encoding='utf-8').write(txt)
open(os.path.join(OUT, 'story-data.js'), 'w', encoding='utf-8').write('window.STORY_DATA=' + txt + ';\n')
nlines = sum(len(s['lines']) + sum(len(o.get('say', [])) for ln in s['lines'] for o in (ln.get('choice') or {}).get('opts', [])) for s in scenes)
print('chapters', len(chapters), 'scenes', len(scenes), 'goals', sum(1 for s in scenes if s.get('goal')), 'lines', nlines, 'endings', len(endings), 'chars', sum(len(json.dumps(s)) for s in scenes))
print('cast used', sorted(used))
print('locs', sorted({s['loc'] for s in scenes}))
