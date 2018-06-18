const orders = require('../json_records/orders');

exports.seed = function seed(knex) {
  // Deletes ALL existing entries
  return knex('order')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('order').insert(orders),
    );
};
