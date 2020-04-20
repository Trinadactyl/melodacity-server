CREATE TABLE melodacity_melodies (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  date_created TIMESTAMP DEFAULT now() NOT NULL,
  user_id INTEGER REFERENCES melodacity_users(id) ON DELETE SET NULL
);