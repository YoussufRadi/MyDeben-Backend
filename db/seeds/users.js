import knex from "../../knex";
import users from "../json_records/users";

export const insertion = function(limit = Number.MAX_SAFE_INTEGER) {
  // Inserts seed entries

  users.splice(limit);
  return knex("users")
    .insert(users)
    .catch(error => console.log("ERR: ", error));
};

export const deletion = function() {
  return knex("users")
    .del()
    .catch(error => console.log("ERR: ", error));
};

export function seed(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      return insertion();
    })
    .catch(function(err) {
      console.log(err);
    });
}
