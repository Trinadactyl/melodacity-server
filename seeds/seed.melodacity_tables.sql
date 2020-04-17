BEGIN;

TRUNCATE
  melodacity_users
  RESTART IDENTITY CASCADE;

INSERT INTO melodacity_users (full_name, user_name, password)
VALUES
  ('Test User', 'test', '$2a$12$uLQyLsaAiZxrOwk.bxOhRuS9OVaestvaAVPQovwWMW7dKEQM.bk5W'),
  ('J. Hendrix', 'guitar_burner42', '$2a$12$n6otM5VEMuF1QtEFCc9W3esmcfbAKdMi8wYPlwyIoRakNDi4qqn8C'),
  ('E. Presley', 'pbbacon', '$2a$12$GhLkfME6asQBBjgvTXtpGeZjsN8gKTxFvMwnzfkF7L22jTAcg29W2'),
  ('R. Plant', 'damothership', '$2a$12$CKRpAicwptlARzC32RLrvu1OFKXQu/mz1wUNC9aLcaQ7DExq0UELO'),
  ('B. Dylan', 'rainy-day41', '$2a$12$hyrlA/w15RYCe95h0Z6gU.wCGdVo5qZfqIenanGNopH8lzOq4QdGC'),
  ('E. James', 'atlastlady', '$2a$12$.yE7nUkx1cUyvxFjCQ1ImO4W9SsQSzpFAgEbmjlon7s7cQbLyOVqm');


COMMIT;

/*
  ('Test User', 'test', 'password'),
  ('J. Hendrix', 'guitar_burner42', 'jimipw'),
  ('E. Presley', 'pbbacon', 'elvispw'),
  ('R. Plant', 'damothership', 'robertpw'),
  ('B. Dylan', 'rainy-day41', 'bobpw'),
  ('E. James', 'atlastlady', 'ettapw');
*/