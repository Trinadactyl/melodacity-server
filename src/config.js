module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL || 'postgresql://trina:123@localhost/melodacity',
  JWT_SECRET: process.env.JWT_SECRET || 'ty56gh23bnqo89'
}