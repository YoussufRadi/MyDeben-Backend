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
    knex.schema.createTable("user", function(table) {
      table.increments();
      table
        .string("email")
        .unique()
        .notNullable();
      table.string("name");
      table.string("password").notNullable();
      table.string("checkin_store_name");
      table
        .integer("checkin_store_id")
        .references("id")
        .inTable("store");
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.timestamp("updatedAt").defaultTo(knex.fn.now());
    }),
    knex.schema.createTable("category", function(table) {
      table.increments();
      table
        .string("name")
        .notNullable()
        .unique();
      table.string("picture");
      table.string("description");
      table
        .integer("store_id")
        .references("id")
        .inTable("store")
        .notNullable();
    }),
    knex.schema.createTable("product", function(table) {
      table.increments();
      table.string("name").notNullable();
      table.float("price").notNullable();
      table.boolean("gem").defaultTo(false);
      table.string("picture");
      table.string("description");
      table
        .integer("store_id")
        .references("id")
        .inTable("store").notNullable;
      table
        .integer("category_id")
        .references("id")
        .inTable("category")
        .notNullable();
    }),
    knex.schema.createTable("order", function(table) {
      table.increments();
      table.boolean("done").defaultTo(false);
      table.float("price").notNullable();
      table
        .integer("quantity")
        .notNullable()
        .defaultTo(1);
      table
        .integer("store_id")
        .references("id")
        .inTable("store")
        .notNullable();
      table
        .integer("user_id")
        .references("id")
        .inTable("user")
        .notNullable();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("order"),
    knex.schema.dropTable("product"),
    knex.schema.dropTable("category"),
    knex.schema.dropTable("user"),
    knex.schema.dropTable("store")
  ]);
};
