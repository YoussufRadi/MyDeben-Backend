exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("user", table => {
    table.increments();
    table
      .string("email")
      .unique()
      .notNullable();
    table.string("name");
    table.string("password").notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    table.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user");
};
