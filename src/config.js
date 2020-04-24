module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DB_URL || 'postgresql://trina:123@localhost/melodacity',
  TEST_DATABASE_URL="postgresql://trina:123@localhost/melodacity-test",
  JWT_SECRET: process.env.JWT_SECRET || 'ty56gh23bnqo89'
}