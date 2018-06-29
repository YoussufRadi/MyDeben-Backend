const orders = require('../json_records/orders');

exports.seed = function seed(knex) {
  return knex('order').insert(orders);
};
