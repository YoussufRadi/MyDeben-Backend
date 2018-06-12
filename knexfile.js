require("babel-register");
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "root",
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
      database: "tangram_crm"
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  },
  test: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "root",
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
      database: "tangram_crm_test"
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
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    ssl: true
  }
};
