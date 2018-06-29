import QRCode from 'qrcode';
import knex from '../knex';

export const generateQR = async (text, cb) => {
  try {
    cb(null, await QRCode.toDataURL(text));
  } catch (err) {
    cb(err);
  }
};

export const getStoreById = id =>
  knex('store')
    .where('id', id)
    .then(stores => stores[0]);

export const insertCategory = (category, storeId) =>
  knex('category')
    .insert({
      name: category.name,
      picture: category.picture,
      description: category.description,
      store_id: storeId,
    })
    .returning('id');

export const retrieveStoreCategories = storeId =>
  knex
    .select('id', 'name', 'picture', 'description')
    .table('category')
    .where('store_id', storeId);

export const getCategoryById = id =>
  knex('category')
    .where('id', id)
    .then(categories => categories[0]);

export const delCategory = (storeId, categoryId) =>
  knex('category')
    .del()
    .where({
      store_id: storeId,
      id: categoryId,
    });

export const updateCategory = (storeId, categoryId, category) =>
  knex('category')
    .where({ store_id: storeId, id: categoryId })
    .update({
      ...category,
    });

export const insertProduct = (product, storeId) =>
  knex('product')
    .insert({
      name: product.name,
      picture: product.picture,
      description: product.description,
      store_id: storeId,
      category_id: product.category_id,
      gem: product.gem,
      price: product.price,
    })
    .returning('id');

export const retrieveCategoryProducts = (storeId, categoryId) =>
  knex
    .select('id', 'name', 'picture', 'description', 'price', 'gem')
    .table('product')
    .where({ store_id: storeId, category_id: categoryId });

export const getProductById = id =>
  knex('product')
    .where('id', id)
    .then(products => products[0]);

export const delProduct = (storeId, productId) =>
  knex('product')
    .del()
    .where({
      store_id: storeId,
      id: productId,
    });

export const updateProduct = (storeId, productId, product) =>
  knex('product')
    .where({ store_id: storeId, id: productId })
    .update({
      name: product.name,
      picture: product.picture,
      description: product.description,
      store_id: storeId,
      category_id: product.category_id,
      gem: product.gem,
      price: product.price,
    });

export const retrieveAllOrders = store =>
  knex
    .select(
      'order.id',
      'product.name',
      'product.picture',
      'product.description',
      'product.price',
      'product.category_id',
      'order.total_price',
      'order.quantity',
      'order.total_price',
      'order.user_id',
      'order.checked_out',
      'order.served',
      'order.cancelled',
      'order.created_at',
    )
    .from('order')
    .innerJoin('product', 'order.product_id', 'product.id')
    .where({ 'order.store_id': store.id });

export const retrieveCurrentOrders = store =>
  knex
    .select(
      'order.id',
      'product.name',
      'product.picture',
      'product.description',
      'product.price',
      'product.category_id',
      'order.total_price',
      'order.quantity',
      'order.total_price',
      'order.user_id',
      'order.checked_out',
      'order.served',
      'order.cancelled',
      'order.created_at',
    )
    .from('order')
    .innerJoin('product', 'order.product_id', 'product.id')
    .where({ 'order.store_id': store.id, served: false, cancelled: false });

export const retrieveCheckInUsers = store =>
  knex
    .select('id', 'name', 'email')
    .table('user')
    .where('checkin_store_id', store.id)
    .then(users => users);

export const getOrderById = id =>
  knex('order')
    .where('id', id)
    .then(categories => categories[0]);

export const setServeOrder = (orderId, storeId) =>
  knex('order')
    .where({ id: orderId, store_id: storeId })
    .update({
      served: true,
    });

export const setCancelOrder = (orderId, storeId) =>
  knex('order')
    .where({ id: orderId, store_id: storeId })
    .update({
      cancelled: true,
    });

export const setCheckOutOrder = (userId, storeId) =>
  knex('order')
    .where({ user_id: userId, store_id: storeId })
    .update({
      checked_out: true,
    });

export const setCheckOutUser = userId =>
  knex('user')
    .where({ id: userId })
    .update({
      checkin_store_id: null,
      checkin_store_name: null,
    });
