BEGIN;

TRUNCATE
  melodacity_users
  RESTART IDENTITY CASCADE;

INSERT INTO melodacity_users (full_name, user_name, password)
VALUES
  ('J. Hendrix', 'guitar_burner42', 'jimipw'),
  ('E. Presley', 'pbbacon', 'elvispw'),
  ('R. Plant', 'damothership', 'robertpw'),
  ('B. Dylan', 'rainy-day41', 'bobpw'),
  ('E. James', 'atlastlady', 'ettapw');


COMMIT;

