const config = require('./config');

module.exports = {
  development: {
    client: 'pg',
    connection: config.knex.connection,
    pool: config.knex.pool,
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
  },
  test: {
    client: 'pg',
    connection: config.knex.connection,
    pool: config.knex.pool,
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
  },
  production: {
    client: 'postgresql',
    connection:
      'postgres://gukivlbo:oJhM5Xv1mGq81i39Xb1fvWpftMVtU5_l@stampy.db.elephantsql.com:5432/gukivlbo',
    pool: config.knex.pool,
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    ssl: true,
  },
};
