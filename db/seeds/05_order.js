var orders = require("../json_records/orders");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("order")
    .del()
    .then(function() {
      // Inserts seed entries
      // return knex("order").insert(orders);
    });
};
