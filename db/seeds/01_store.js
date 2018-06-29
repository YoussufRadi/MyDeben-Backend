const stores = require('../json_records/stores.json');

exports.seed = function seed(knex) {
  return knex('store').insert(stores);
};
