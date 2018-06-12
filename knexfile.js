require("babel-register");
import config from "./config";
module.exports = {
  development: {
    client: "pg",
    connection: config.knex.connection,
    pool: config.knex.pool,
    migrations: config.knex.migrations,
    seeds: config.knex.seeds
  },
  test: {
    client: "pg",
    connection: config.knex.connection,
    pool: config.knex.pool,
    migrations: config.knex.migrations,
    seeds: config.knex.seeds
  },
  production: {
    client: "pg",
    debug: true,
    connection: config.knex.connection,
    pool: config.knex.pool,
    migrations: config.knex.migrations,
    ssl: true
  }
};
