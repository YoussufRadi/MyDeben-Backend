const categories = require('../json_records/categories');

exports.seed = function seed(knex) {
  return knex('category').insert(categories);
};
