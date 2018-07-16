import QRCode from 'qrcode';
import knex from '../knex';

export const generateQR = async (text, cb) => {
  try {
    cb(null, await QRCode.toDataURL(text));
  } catch (err) {
    cb(err);
  }
};

export const insertRefToken = (store_id, name, ref, token, checkout_date) =>
  knex('checkin-token')
    .insert({
      store_id,
      name,
      ref,
      token,
      checkout_date,
    })
    .returning('id');

export const getStoreById = id =>
  knex('store')
    .where('id', id)
    .then(stores => stores[0]);

export const insertService = (service, storeId) =>
  knex('service')
    .insert({
      name: service.name,
      store_id: storeId,
    })
    .returning('id');

export const retrieveStoreServices = storeId =>
  knex
    .select('id', 'name')
    .table('service')
    .where('store_id', storeId);

export const getServiceById = id =>
  knex('service')
    .where('id', id)
    .then(services => services[0]);

export const delService = (storeId, serviceId) =>
  knex('service')
    .del()
    .where({
      store_id: storeId,
      id: serviceId,
    });

export const updateService = (storeId, serviceId, service) =>
  knex('service')
    .where({ store_id: storeId, id: serviceId })
    .update({
      ...service,
    });

export const insertCategory = (category, storeId) =>
  knex('category')
    .insert({
      name: category.name,
      picture: category.picture,
      description: category.description,
      store_id: storeId,
      provider_id: category.provider_id,
    })
    .returning('id');

export const retrieveStoreCategories = (storeId, providerId) =>
  knex
    .select('id', 'name', 'picture', 'description')
    .table('category')
    .where({ store_id: storeId, provider_id: providerId });

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

export const insertProvider = (provider, storeId) =>
  knex('provider')
    .insert({
      name: provider.name,
      picture: provider.picture,
      store_id: storeId,
      service_id: provider.service_id,
    })
    .returning('id');

export const retrieveServiceProviders = (storeId, serviceId) =>
  knex
    .select('id', 'name', 'picture')
    .table('provider')
    .where({ store_id: storeId, service_id: serviceId });

export const retrieveAllStoreProviders = storeId =>
  knex
    .select(
      'provider.id',
      'provider.name',
      'provider.picture',
      'provider.service_id',
      'service.name as service_name',
    )
    .from('provider')
    .innerJoin('service', 'provider.service_id', 'service.id')
    .where({ 'service.id': storeId });

export const getProviderById = id =>
  knex('provider')
    .where('id', id)
    .then(providers => providers[0]);

export const delProvider = (storeId, providerId) =>
  knex('provider')
    .del()
    .where({
      store_id: storeId,
      id: providerId,
    });

export const updateProvider = (storeId, providerId, provider) =>
  knex('provider')
    .where({ store_id: storeId, id: providerId })
    .update({
      name: provider.name,
      picture: provider.picture,
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

export const retrieveUserOrders = (storeId, userId) =>
  knex
    .select(
      'order.id',
      'product.name',
      'product.price',
      'order.total_price',
      'order.quantity',
      'order.total_price',
      'order.checked_out',
      'order.served',
      'order.cancelled',
    )
    .from('order')
    .innerJoin('product', 'order.product_id', 'product.id')
    .where({ 'order.store_id': storeId, user_id: userId, 'order.checked_out': false });

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
    .select('id', 'name', 'email', 'facebook', 'gmail', 'checkout_date')
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
      checkin_store_ref: null,
      checkout_date: null,
    });
