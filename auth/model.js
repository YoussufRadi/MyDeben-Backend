import knex from "../knex";

export const create = user =>
  knex("user")
    .insert({
      ...user
    })
    .returning("email");

export const getByEmail = email =>
  knex("user")
    .where("email", email)
    .then(users => users[0]);
