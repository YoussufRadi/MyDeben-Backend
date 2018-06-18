module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'secret',
  jwtExpiry: process.env.JWT_EXPIRY || 60 * 60 * 24,
  knex: {
    connection: {
      database:
        process.env.PG_DATABASE_NAME ||
        (process.env.NODE_ENV === 'test' ? 'mydeben_test' : 'mydeben'),
      user: process.env.PG_DATABASE_USER,
      password: process.env.PG_DATABASE_PASSWORD,
    },
    pool: {
      min: process.env.PG_DATABASE_POOL_MIN || 2,
      max: process.env.PG_DATABASE_POOL_MAX || 10,
    },
  },
};
