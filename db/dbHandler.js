import knex from "../knex";
import users from "./json_records/users";
import stores from "./json_records/stores";
import categories from "./json_records/categories";
import orders from "./json_records/orders";
import products from "./json_records/products";

const dict = {
  users,
  stores,
  categories,
  orders,
  products
};

export const insertion = (tableName, limit = Number.MAX_SAFE_INTEGER) => {
  // Inserts seed entries
  users.splice(limit);
  return knex(tableName)
    .insert(dict[tableName])
    .catch(error => console.log("ERR: ", error));
};

export const deletion = tableName => {
  return knex(tableName)
    .del()
    .catch(error => console.log("ERR: ", error));
};

export function seed(tableName, knex, Promise) {
  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(() => {
      return insertion(tableName);
    })
    .catch(err => {
      console.log(err);
    });
}
