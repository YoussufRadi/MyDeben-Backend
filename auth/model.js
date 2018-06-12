import knex from "../knex";

export const create = user =>
  knex("users")
    .insert({
      ...user
    })
    .returning("email");

export const getByEmail = email =>
  knex("users")
    .where("email", email)
    .then(users => users[0]);
