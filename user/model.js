import knex from "../knex";

export const create = user =>
  knex("users")
    .insert({
      ...user
    })
    .returning("*");

export const getByEmail = email =>
  knex("users")
    .where("email", email)
    .then(users => users[0]);

export const retrieveAll = () =>
  knex.select("id", "name", "email").table("users");
