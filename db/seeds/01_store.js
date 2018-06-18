const stores = require('../json_records/stores.json');

exports.seed = function seed(knex) {
  // Deletes ALL existing entries
  return knex('store')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('store').insert(stores),
    );
};
