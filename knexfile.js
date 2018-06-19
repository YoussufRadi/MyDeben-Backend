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
      'postgres://vwrbzenxmtrilo:cdc22fedb71c1ef6318d6a5afcdedbe468f0edacff8df249c463cb61bc6b7fd6@ec2-23-23-226-190.compute-1.amazonaws.com:5432/d4ecbvnntrg1s4',
    pool: config.knex.pool,
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    ssl: true,
  },
};
