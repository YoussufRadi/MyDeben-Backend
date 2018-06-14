var config = require("./config");
module.exports = {
  development: {
    client: "pg",
    connection: config.knex.connection,
    pool: config.knex.pool,
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  },
  test: {
    client: "pg",
    connection: config.knex.connection,
    pool: config.knex.pool,
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  },
  production: {
    client: "pg",
    debug: true,
    connection: config.knex.connection,
    pool: config.knex.pool,
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    ssl: true
  }
};
