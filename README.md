# The Quiet Kind

A choice-based 2.5D pixel story game for the web. It runs on **Cloudflare Workers** and saves player accounts and progress in **D1 (SQLite)**.

## Folder layout

```
public/          the game (HTML, CSS, JS, art, music, story data); served as static assets
src/worker.js    the API: sign up, log in, log out, change password, cloud saves
migrations/      the D1 database tables
story-script/    the story source (.txt) and compile.py, which builds public/data/story.json
wrangler.jsonc   Cloudflare config
```

## First-time deploy

```bash
npm install
npx wrangler login
npx wrangler d1 create quiet-kind-db      # copy the database_id it prints
# paste that id into wrangler.jsonc → d1_databases[0].database_id
npm run db:remote                          # creates the tables in the live database
npm run deploy                             # publishes to https://quiet-kind.<your-subdomain>.workers.dev
```

## Run it locally

```bash
npm run db:local     # creates the tables in a local SQLite file (one time)
npm run dev          # http://localhost:8787
```

## Edit the story

Edit the files in `story-script/`, then rebuild:

```bash
python story-script/compile.py
```

## Accounts and saves

- Players log in with an email and a password. Passwords are stored only as PBKDF2-SHA256 hashes (100,000 rounds, random salt).
- Sessions use an HttpOnly cookie that lasts 30 days. The database stores only a hash of the session token.
- After 8 wrong passwords in 15 minutes, login for that email is blocked until the 15 minutes are up.
- Changing the password (Pause menu → Account) signs out every other device.
- Progress, found endings and settings sync to the account. Guests can still play; their saves stay on that device, and signing up later uploads them.

## Test bot

Open `/?autoplay=present&speed=10` to watch the bot play through to an ending. The endings are present, room, kindno, cure, stone, autopilot and unsaid.
