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

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array);
  }
};

export const insertOrder = async (orders, userId, storeId) => {
  const mapped = [];
  await asyncForEach(orders, async order => {
    const price = await knex("product")
      .where("id", order.product_id)
      .then(product => product[0].price);
    mapped.push({
      total_price: price * order.quantity,
      quantity: order.quantity,
      store_id: storeId,
      product_id: order.product_id,
      user_id: userId
    });
  });
  return knex("order")
    .insert(mapped)
    .returning("id");
};

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
