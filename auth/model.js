import knex from "../knex";

export const createUser = user =>
  knex("user")
    .insert({
      email: user.email,
      name: user.name,
      password: user.password
    })
    .returning("email");

export const getUserByEmail = email =>
  knex("user")
    .where("email", email)
    .then(users => users[0]);

export const createStore = store =>
  knex("store")
    .insert({
      email: store.email,
      name: store.name,
      password: store.password
    })
    .returning("email");

export const getStoreByEmail = email =>
  knex("store")
    .where("email", email)
    .then(users => users[0]);
