require("babel-register");
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.PG_DATABASE_NAME || "mydeben",
      user: process.env.PG_DATABASE_USER,
      password: process.env.PG_DATABASE_PASSWORD
    },
    pool: {
      min: process.env.PG_DATABASE_POOL_MIN || 2,
      max: process.env.PG_DATABASE_POOL_MAX || 10
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  },
  test: {
    client: "pg",
    connection: {
      database: process.env.PG_DATABASE_NAME || "mydeben_test",
      user: process.env.PG_DATABASE_USER,
      password: process.env.PG_DATABASE_PASSWORD
    },
    pool: {
      min: process.env.PG_DATABASE_POOL_MIN || 2,
      max: process.env.PG_DATABASE_POOL_MAX || 10
    },
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
    connection: {
      database: process.env.PG_DATABASE_NAME,
      user: process.env.PG_DATABASE_USER,
      password: process.env.PG_DATABASE_PASSWORD
    },
    pool: {
      min: process.env.PG_DATABASE_POOL_MIN,
      max: process.env.PG_DATABASE_POOL_MAX
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    ssl: true
  }
};
