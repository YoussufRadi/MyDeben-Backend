const products = require('../json_records/products');

exports.seed = function seed(knex) {
  // Deletes ALL existing entries
  return knex('product')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('product').insert(products),
    );
};
