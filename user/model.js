import knex from "../knex";

export const retrieveAll = () =>
  knex.select("id", "name", "email").table("user");

export const getUserById = id =>
  knex("user")
    .where("id", id)
    .then(users => users[0]);

export const insertCheckIn = (user, storeName, storeId) =>
  knex("user")
    .where({ id: user.id })
    .update({ checkin_store_id: storeId, checkin_store_name: storeName });
