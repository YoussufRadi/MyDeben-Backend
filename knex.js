const config = require("./knexfile");

const knex = require("knex")(
  config[process.env.NODE_ENV] || config.development
);

module.exports = knex;
