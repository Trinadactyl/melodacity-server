CREATE TABLE melodacity_melodies (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  music_key TEXT NOT NULL,
  tonic TEXT,
  progression TEXT NOT NULL,
  melody TEXT,
  date_created TIMESTAMP DEFAULT now() NOT NULL,
  user_id INTEGER REFERENCES melodacity_users(id) ON DELETE SET NULL
);