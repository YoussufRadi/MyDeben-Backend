exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("store", function(table) {
      table.increments();
      table
        .string("email")
        .unique()
        .notNullable();
      table.string("name");
      table.string("password").notNullable();
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.timestamp("updatedAt").defaultTo(knex.fn.now());
    }),

    knex.schema.createTable("category", function(table) {
      table.increments();
      table.string("name");
      table.string("picture");
      table.string("description");
      table
        .integer("store_id")
        .references("id")
        .inTable("store");
    }),

    knex.schema.createTable("product", function(table) {
      table.increments();
      table.string("name");
      table.string("picture");
      table.string("description");
      table
        .integer("store_id")
        .references("id")
        .inTable("store");
      table
        .integer("category_id")
        .references("id")
        .inTable("category");
    }),

    knex.schema.createTable("order", function(table) {
      table.increments();
      table.float("price");
      table.integer("quantity");
      table
        .integer("store_id")
        .references("id")
        .inTable("store");
      table
        .integer("user_id")
        .references("id")
        .inTable("user");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("store"),
    knex.schema.dropTable("category"),
    knex.schema.dropTable("product"),
    knex.schema.dropTable("order")
  ]);
};
