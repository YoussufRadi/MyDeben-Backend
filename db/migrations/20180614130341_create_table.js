exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('store', (table) => {
      table.increments();
      table
        .string('email')
        .unique()
        .notNullable();
      table.string('name');
      table.string('password').notNullable();
      table.timestamps(false, true);
    }),
    knex.schema.createTable('user', (table) => {
      table.increments();
      table
        .string('email')
        .unique()
        .notNullable();
      table.string('name');
      table.string('facebook_id');
      table.string('gmail_id');
      table.string('password').notNullable();
      table.string('checkin_store_name');
      table
        .integer('checkin_store_id')
        .references('id')
        .inTable('store');
      table.timestamps(false, true);
    }),
    knex.schema.createTable('category', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('picture');
      table.string('description');
      table
        .integer('store_id')
        .references('id')
        .inTable('store')
        .notNullable();
      table.unique(['name', 'store_id']);
    }),
    knex.schema.createTable('product', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.float('price').notNullable();
      table.boolean('gem').defaultTo(false);
      table.string('picture');
      table
        .integer('store_id')
        .references('id')
        .inTable('store')
        .notNullable();
      table.string('description');
      table
        .integer('category_id')
        .references('id')
        .inTable('category')
        .notNullable();
      table.unique(['name', 'store_id']);
    }),
    knex.schema.createTable('order', (table) => {
      table.increments();
      table.boolean('checked_out').defaultTo(false);
      table.boolean('served').defaultTo(false);
      table.boolean('cancelled').defaultTo(false);
      table.float('total_price').notNullable();
      table
        .integer('quantity')
        .notNullable()
        .defaultTo(1);
      table
        .integer('store_id')
        .references('id')
        .inTable('store')
        .notNullable();
      table
        .integer('user_id')
        .references('id')
        .inTable('user')
        .notNullable();
      table
        .integer('product_id')
        .references('id')
        .inTable('product')
        .notNullable();
      table.timestamps(false, true);
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('order'),
    knex.schema.dropTable('product'),
    knex.schema.dropTable('category'),
    knex.schema.dropTable('user'),
    knex.schema.dropTable('store'),
  ]);
};
