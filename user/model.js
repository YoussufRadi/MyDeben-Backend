import knex from '../knex';
import { asyncForEach } from '../utilities';

export const retrieveAll = () => knex.select('id', 'name', 'email').table('user');

export const getUserById = id =>
  knex('user')
    .where('id', id)
    .then(users => users[0]);

export const getRefByToken = token =>
  knex('checkin-token')
    .where('token', token)
    .then(refs => refs[0]);

export const insertRefCheckIn = (user, store_id, store_name, ref, checkout_date) =>
  knex('user')
    .where({ id: user.id })
    .update({
      checkin_store_id: store_id,
      checkin_store_name: store_name,
      checkin_store_ref: ref,
      checkout_date,
    });

export const delToken = id =>
  knex('checkin-token')
    .del()
    .where({
      id,
    });

export const insertCheckIn = (user, store) =>
  knex('user')
    .where({ id: user.id })
    .update({
      checkin_store_id: store.store_id,
      checkin_store_name: store.store_name,
      checkout_date: store.checkout_date,
      checkin_store_ref: store.ref,
    });

export const insertOrder = async (orders, userId, storeId) => {
  const mapped = [];
  await asyncForEach(orders, async order => {
    const price = await knex('product')
      .where({ id: order.product_id, deleted: false, store_id: storeId })
      .then(product => product[0].price);
    mapped.push({
      total_price: price * order.quantity,
      quantity: order.quantity,
      store_id: storeId,
      product_id: order.product_id,
      user_id: userId,
      served: false,
    });
  });
  return knex('order')
    .insert(mapped)
    .returning('id');
};

export const retrieveAllOrders = user =>
  knex
    .select(
      'order.id',
      'product.name',
      'product.picture',
      'product.description',
      'product.price',
      'order.total_price',
      'order.quantity',
      'order.total_price',
      'order.store_id',
      'order.user_id',
      'order.checked_out',
      'order.served',
    )
    .from('order')
    .innerJoin('product', 'order.product_id', 'product.id')
    .where({ 'order.store_id': user.checkin_store_id, user_id: user.id });

export const retrieveGems = storeId =>
  knex('provider').where({ store_id: storeId, gem: true, deleted: false });

export const retrieveStoreCategories = storeId =>
  knex
    .select('id', 'name', 'picture', 'description')
    .table('category')
    .where('store_id', storeId);

export const getCategoryById = id =>
  knex('category')
    .where({ id, deleted: false })
    .then(categories => categories[0]);

export const retrieveStoreServices = storeId =>
  knex
    .select(
      'service.id as service_id',
      'service.name as service_name',
      'provider.id as provider_id',
      'provider.deleted',
      'provider.name as provide_name',
      'provider.picture as provider_picture',
    )
    .from('service')
    .leftOuterJoin('provider', 'provider.service_id', 'service.id')
    .where({ 'service.store_id': storeId, 'service.deleted': false });

export const getSearchResutlts = (keyword, storeId) =>
  knex('product')
    .whereRaw('LOWER(name) LIKE ?', [`${keyword}%`])
    .andWhere('store_id', storeId)
    .andWhere('deleted', false);
