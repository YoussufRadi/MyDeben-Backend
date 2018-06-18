const categories = require('../json_records/categories');

exports.seed = function seed(knex) {
  // Deletes ALL existing entries
  return knex('category')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('category').insert(categories),
    );
};
