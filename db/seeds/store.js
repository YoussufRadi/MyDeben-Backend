var stores = require("../json_records/stores");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("store")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("store").insert(stores);
    });
};
