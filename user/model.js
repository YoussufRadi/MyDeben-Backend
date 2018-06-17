import knex from "../knex";

export const retrieveAll = () =>
  knex.select("id", "name", "email").table("user");

export const getUserById = id =>
  knex("user")
    .where("id", id)
    .then(users => users[0]);

export const insertCheckIn = (user, store) =>
  knex("user")
    .where({ id: user.id })
    .update({
      checkin_store_id: store.store_id,
      checkin_store_name: store.store_name
    });

const mapOrderRequest = (orders, product, userId) => {
  mapped = [];
  orders.forEach(order => {
    mapped.push({
      total_price: product[0].price * order.quantity,
      quantity: order.quantity,
      store_id: order.store_id,
      product_id: order.product_id,
      user_id: userId
    });
  });
  console.log(mapped);
};

export const insertOrder = (order, userId) =>
  knex("product")
    .where("id", order.product_id)
    .then(product =>
      knex("order")
        .insert(mapOrderRequest(orders, product, userId))
        .returning(["id", "total_price"])
    );

export const retrieveAllOrders = userId =>
  knex
    .select(
      "order.id",
      "product.name",
      "product.picture",
      "product.description",
      "price",
      "order.item_price",
      "order.quantity",
      "order.total_price"
    )
    .from("order")
    .innerJoin("product", "order.product_id", "product.id")
    .where({ store_id: storeId, user_id: userId });
