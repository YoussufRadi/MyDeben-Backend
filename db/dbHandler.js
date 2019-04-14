import knex from '../knex';
import users from './json_records/users.json';
import stores from './json_records/stores.json';
import categories from './json_records/categories.json';
import orders from './json_records/orders.json';
import products from './json_records/products.json';

const dict = {
  users,
  stores,
  categories,
  orders,
  products,
};

export const insertion = (tableName, limit = Number.MAX_SAFE_INTEGER) => {
  // Inserts seed entries
  users.splice(limit);
  return knex(tableName)
    .insert(dict[tableName])
    .catch(error => console.log('ERR: ', error));
};

export const deletion = tableName =>
  knex(tableName)
    .del()
    .catch(error => console.log('ERR: ', error));

export function seed(tableName) {
  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(() => insertion(tableName))
    .catch((err) => {
      console.log(err);
    });
}
