import knex from "../knex";
export const listAll = () => knex.select().table("users");
