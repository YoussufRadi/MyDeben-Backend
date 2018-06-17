var categories = require("../json_records/categories");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("category")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("category").insert(categories);
    });
};
