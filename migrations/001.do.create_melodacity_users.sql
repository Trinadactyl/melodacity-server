CREATE TABLE melodacity_users (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  user_name TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  date_created TIMESTAMPTZ NOT NULL DEFAULT now()
);