const users = require('../json_records/users');
const stores = require('../json_records/stores.json');
const services = require('../json_records/services');
const providers = require('../json_records/providers');
const categories = require('../json_records/categories');
const products = require('../json_records/products');
const orders = require('../json_records/orders');

exports.seed = function (knex, Promise) {
  return Promise.all([
    knex('store')
      .del()
      .then(() => knex('store').insert(stores))
      .then(() =>
        knex('user')
          .del()
          .then(() => knex('user').insert(users)),
      )
      .then(() =>
        knex('service')
          .del()
          .then(() => knex('service').insert(services)),
      )
      .then(() =>
        knex('provider')
          .del()
          .then(() => knex('provider').insert(providers)),
      )
      .then(() =>
        knex('category')
          .del()
          .then(() => knex('category').insert(categories)),
      )
      .then(() =>
        knex('product')
          .del()
          .then(() => knex('product').insert(products)),
      )
      .then(() =>
        knex('order')
          .del()
          .then(() => knex('order').insert(orders)),
      ),
  ]);
};
