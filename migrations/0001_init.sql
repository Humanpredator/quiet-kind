-- The Quiet Kind: accounts, sessions and cloud saves (Cloudflare D1 / SQLite)
CREATE TABLE IF NOT EXISTS users (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  email       TEXT    NOT NULL UNIQUE COLLATE NOCASE,
  pass_hash   TEXT    NOT NULL,              -- pbkdf2-sha256$<iterations>$<salt b64>$<hash b64>
  created_at  INTEGER NOT NULL,
  updated_at  INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  token_hash  TEXT    PRIMARY KEY,           -- sha-256 of the cookie token; the raw token is never stored
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at  INTEGER NOT NULL,
  expires_at  INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);

-- one row per user per slot: 'progress' (story state), 'endings' (endings found), 'settings'
CREATE TABLE IF NOT EXISTS saves (
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  slot        TEXT    NOT NULL,
  data        TEXT    NOT NULL,
  updated_at  INTEGER NOT NULL,
  PRIMARY KEY (user_id, slot)
);

-- simple brute-force protection for logins
CREATE TABLE IF NOT EXISTS login_attempts (
  email        TEXT    PRIMARY KEY COLLATE NOCASE,
  fails        INTEGER NOT NULL,
  window_start INTEGER NOT NULL
);
