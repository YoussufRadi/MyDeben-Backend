const users = require('../json_records/users');

exports.seed = function seed(knex) {
  return knex('user').insert(users);
};
