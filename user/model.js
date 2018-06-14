import knex from "../knex";

export const retrieveAll = () =>
  knex.select("id", "name", "email").table("user");
