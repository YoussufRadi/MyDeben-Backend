const users = require('../json_records/users');

exports.seed = function seed(knex) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('user').insert(users),
    );
};
