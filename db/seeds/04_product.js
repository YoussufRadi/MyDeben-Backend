const products = require('../json_records/products');

exports.seed = function seed(knex) {
  return knex('product').insert(products);
};
