import validate from 'express-validation';
import crypto from 'crypto';
import validation from './validation';
import { groupBy } from '../utilities';
import {
  generateQR,
  getStoreById,
  insertCategory,
  retrieveStoreCategories,
  delCategory,
  getCategoryById,
  updateCategory,
  insertProduct,
  retrieveCategoryProducts,
  getProductById,
  delProduct,
  updateProduct,
  retrieveAllOrders,
  retrieveCurrentOrders,
  retrieveCheckInUsers,
  setServeOrder,
  getOrderById,
  setCheckOutOrder,
  setCheckOutUser,
  setCancelOrder,
  insertRefToken,
  insertService,
  retrieveStoreServices,
  delService,
  getServiceById,
  updateService,
  insertProvider,
  retrieveServiceProviders,
  delProvider,
  updateProvider,
  getProviderById,
  retrieveUserOrders,
  retrieveAllStoreProviders,
  getUsersbyRef,
  delRefToken,
} from './model';
import { getUserById } from '../user/model';
import { ensureAuthenticated } from '../auth/controller';
import { log } from 'util';

const verfiyStore = (req, res, next) => {
  if (req.model !== 'store') {
    res.status(403).json({
      detail: 'Permision Denied',
    });
    return;
  }
  getStoreById(req.id)
    .then(store => {
      if (!store) {
        res.status(400).json({ detail: 'Store doesnot exist' });
        return;
      }
      req.store = store;
      next();
    })
    .catch(err => {
      res.status(403).json({ detail: err });
    });
};

const qRcode = (req, res, next) => {
  const input = `{"token":"${req.token}"}`;
  generateQR(input, (err, code) => {
    if (err) {
      res.status(400).json({
        detail: err,
      });
      return;
    }
    req.code = code;
    next();
  });
};

const refToken = (req, res, next) => {
  crypto.randomBytes(4, (err, buffer) => {
    req.token = buffer.toString('hex');
    insertRefToken(req.id, req.store.name, req.params.ref, req.token, req.params.date)
      .then(id => {
        next();
      })
      .catch(err => {
        res.status(400).json({ detail: err.detail, success: false });
      });
  });
};

const confirmRef = (req, res, next) => {
  getUsersbyRef(req.params.ref)
    .then(token => {
      if (token[0]) {
        res.status(409).json({
          detail: 'There is user still checked in with same token',
        });
        return;
      }
      next();
    })
    .catch(() => {
      if (err) {
        res.status(400).json({
          detail: err,
        });
      }
    });
};

const newService = (req, res, next) => {
  insertService(req.body, req.id)
    .then(service => {
      req.service = service;
      next();
    })
    .catch(err => {
      res.status(409).json({ detail: err.detail, success: false });
    });
};

const newCategory = (req, res, next) => {
  insertCategory(req.body, req.id)
    .then(category => {
      req.category = category;
      next();
    })
    .catch(err => {
      res.status(409).json({ detail: err.detail, success: false });
    });
};

const getStoreServices = (req, res, next) => {
  retrieveStoreServices(req.id)
    .then(services => {
      req.services = services;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail });
    });
};

const getStoreCategories = (req, res, next) => {
  retrieveStoreCategories(req.id, req.query.providerId)
    .then(categories => {
      req.categories = categories;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail });
    });
};

const checkCategory = (req, res, next) => {
  const categoryId = req.params.id || req.query.categoryId || req.body.category_id;
  getCategoryById(categoryId)
    .then(category => {
      if (!category) {
        res.status(404).json({
          detail: 'Category Id not found',
          success: false,
        });
        return;
      }
      if (category.store_id !== req.id) {
        res.status(403).json({
          detail: 'Permission Denied',
          success: false,
        });
        return;
      }
      next();
    })
    .catch(err => {
      res.status(400).json({
        detail: err,
        success: false,
      });
    });
};

const checkService = (req, res, next) => {
  const serviceId = req.params.id || req.query.serviceId || req.body.service_id;
  getServiceById(serviceId)
    .then(service => {
      if (!service) {
        res.status(404).json({
          detail: 'Service Id not found',
          success: false,
        });
        return;
      }
      if (service.store_id !== req.id) {
        res.status(403).json({
          detail: 'Permission Denied',
          success: false,
        });
        return;
      }
      next();
    })
    .catch(err => {
      res.status(400).json({
        detail: err,
        success: false,
      });
    });
};

const removeStoreService = (req, res, next) => {
  delService(req.id, req.params.id)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const removeStoreCategory = (req, res, next) => {
  delCategory(req.id, req.params.id)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const editStoreService = (req, res, next) => {
  updateService(req.id, req.params.id, req.body)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const editStoreCategory = (req, res, next) => {
  updateCategory(req.id, req.params.id, req.body)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const newProduct = (req, res, next) => {
  insertProduct(req.body, req.id)
    .then(product => {
      req.product = product;
      next();
    })
    .catch(err => {
      res.status(409).json({ detail: err.detail, success: false });
    });
};

const newProvider = (req, res, next) => {
  insertProvider(req.body, req.id)
    .then(provider => {
      req.provider = provider;
      next();
    })
    .catch(err => {
      res.status(409).json({ detail: err.detail, success: false });
    });
};

const getCategoryProducts = (req, res, next) => {
  retrieveCategoryProducts(req.id, req.query.categoryId)
    .then(products => {
      req.products = products;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail });
    });
};

const getServiceProviders = (req, res, next) => {
  retrieveServiceProviders(req.id, req.query.serviceId)
    .then(providers => {
      req.providers = providers;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail });
    });
};

const getAllStoreProviders = (req, res, next) => {
  retrieveAllStoreProviders(req.id)
    .then(providers => {
      req.providers = providers;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail });
    });
};

const checkProduct = (req, res, next) => {
  getProductById(req.params.id)
    .then(product => {
      if (!product) {
        res.status(404).json({
          detail: "Product Id doesn't exist",
          success: false,
        });
        return;
      }
      if (product.store_id !== req.id) {
        res.status(403).json({
          detail: 'Permission Denied',
          success: false,
        });
        return;
      }

      next();
    })
    .catch(err => {
      res.status(400).json({
        detail: err.detail,
        success: false,
      });
    });
};

const checkProvider = (req, res, next) => {
  const providerId = req.params.id || req.query.providerId || req.body.provider_id;
  getProviderById(providerId)
    .then(provider => {
      if (!provider) {
        res.status(404).json({
          detail: "Provider Id doesn't exist",
          success: false,
        });
        return;
      }
      if (provider.store_id !== req.id) {
        res.status(403).json({
          detail: 'Permission Denied',
          success: false,
        });
        return;
      }

      next();
    })
    .catch(err => {
      res.status(400).json({
        detail: err.detail,
        success: false,
      });
    });
};

const removeProvider = (req, res, next) => {
  delProvider(req.id, req.params.id)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const removeProduct = (req, res, next) => {
  delProduct(req.id, req.params.id)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const editProduct = (req, res, next) => {
  updateProduct(req.id, req.params.id, req.body)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const editProvider = (req, res, next) => {
  updateProvider(req.id, req.params.id, req.body)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const getAllOrders = (req, res, next) => {
  retrieveAllOrders(req.store)
    .then(orders => {
      req.orders = orders;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail });
    });
};

const getCurrentOrders = (req, res, next) => {
  retrieveCurrentOrders(req.store)
    .then(orders => {
      req.orders = orders;
      next();
    })
    .catch(err => {
      console.log(err);

      res.status(400).json({ detail: err.detail });
    });
};

const sortOrders = (req, res, next) => {
  if (req.query.sort === 'date') req.orders.sort((a, b) => a.created_at - b.created_at);
  if (req.query.sort === 'category') req.orders.sort((a, b) => a.category_id - b.category_id);
  if (req.query.sort === 'user') req.orders.sort((a, b) => a.user_id - b.user_id);
  next();
};

const sort = (req, res, next) => {
  if (req.services) req.services.sort((a, b)(`${a.name}`).localeCompare(b.name));
  if (req.providers) req.providers.sort((a, b) => `${a.name}`.localeCompare(b.name));
  if (req.categories) req.categories.sort((a, b) => `${a.name}`.localeCompare(b.name));
  if (req.products) req.products.sort((a, b) => `${a.name}`.localeCompare(b.name));

  next();
};
const getCheckedInUsers = (req, res, next) => {
  retrieveCheckInUsers(req.store)
    .then(users => {
      req.users = users;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail });
    });
};

const checkOrder = (req, res, next) => {
  getOrderById(req.params.id)
    .then(order => {
      if (!order) {
        res.status(404).json({
          detail: "Order Id doesn't exist",
          success: false,
        });
        return;
      }
      if (order.checked_out) {
        res.status(400).json({
          detail: 'This is an old order',
          success: false,
        });
        return;
      }
      if (order.served) {
        res.status(400).json({
          detail: 'This is order is previously served',
          success: false,
        });
        return;
      }
      if (order.cancelled) {
        res.status(400).json({
          detail: 'This is order is previously cancelled',
          success: false,
        });
        return;
      }
      if (order.store_id !== req.id) {
        res.status(403).json({
          detail: 'Permission Denied',
          success: false,
        });
        return;
      }
      next();
    })
    .catch(err => {
      res.status(400).json({
        detail: err.detail,
        success: false,
      });
    });
};

const orderServe = (req, res, next) => {
  setServeOrder(req.params.id, req.id)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const orderCancel = (req, res, next) => {
  setCancelOrder(req.params.id, req.id)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const userConfirmCheckedIn = (req, res, next) => {
  getUserById(req.query.userId || req.params.userId)
    .then(user => {
      if (user.checkin_store_id !== req.id) {
        res.status(403).json({ detail: 'Permission Denied', success: false });
        return;
      }
      next();
    })
    .catch(err => {
      res.status(404).json({ detail: err.detail, success: false });
    });
};

const userCheckOut = (req, res, next) => {
  setCheckOutUser(req.query.userId)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const userOrdersCheckOut = (req, res, next) => {
  setCheckOutOrder(req.query.userId, req.id)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const getHistory = (req, res, next) => {
  retrieveUserOrders(req.id, req.params.userId)
    .then(orders => {
      req.orders = orders;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err });
    });
};

const getProfile = (req, res, next) => {
  req.total = 0;
  req.orders.forEach(order => {
    if (order.served) req.total += order.total_price;
  });
  next();
};

const groupProviders = (req, res, next) => {
  if (req.query.group) req.providers = groupBy(req.providers, req.query.group);
  if (req.providers.undefined) {
    res.status(400).json({
      detail: 'Grouping Parameter Invalid',
    });
    return;
  }
  next();
};

export const generateQRcode = [ensureAuthenticated, verfiyStore, confirmRef, refToken, qRcode];
export const generateToken = [ensureAuthenticated, verfiyStore, confirmRef, refToken];
export const addService = [
  validate(validation.addService),
  ensureAuthenticated,
  verfiyStore,
  newService,
];
export const viewService = [ensureAuthenticated, verfiyStore, getStoreServices, sort];
export const deleteService = [ensureAuthenticated, verfiyStore, checkService, removeStoreService];
export const modifyService = [ensureAuthenticated, verfiyStore, checkService, editStoreService];
export const addProvider = [
  validate(validation.addProvider),
  ensureAuthenticated,
  verfiyStore,
  checkService,
  newProvider,
];
export const viewProvider = [
  validate(validation.viewProvider),
  ensureAuthenticated,
  verfiyStore,
  checkService,
  getServiceProviders,
  sort,
];
export const viewAllProvider = [
  ensureAuthenticated,
  verfiyStore,
  getAllStoreProviders,
  groupProviders,
];
export const deleteProvider = [ensureAuthenticated, verfiyStore, checkProvider, removeProvider];
export const modifyProvider = [ensureAuthenticated, verfiyStore, checkProvider, editProvider];
export const addCategory = [
  validate(validation.addCategory),
  ensureAuthenticated,
  verfiyStore,
  checkProvider,
  newCategory,
];
export const viewCategory = [
  validate(validation.viewCategory),
  ensureAuthenticated,
  verfiyStore,
  checkProvider,
  getStoreCategories,
  sort,
];
export const deleteCategory = [
  ensureAuthenticated,
  verfiyStore,
  checkCategory,
  removeStoreCategory,
];
export const modifyCategory = [ensureAuthenticated, verfiyStore, checkCategory, editStoreCategory];
export const addProduct = [
  validate(validation.addProduct),
  ensureAuthenticated,
  verfiyStore,
  checkCategory,
  newProduct,
];
export const viewProduct = [
  validate(validation.viewProduct),
  ensureAuthenticated,
  verfiyStore,
  checkCategory,
  getCategoryProducts,
  sort,
];
export const deleteProduct = [ensureAuthenticated, verfiyStore, checkProduct, removeProduct];
export const modifyProduct = [ensureAuthenticated, verfiyStore, checkProduct, editProduct];
export const viewOrders = [ensureAuthenticated, verfiyStore, getAllOrders, sortOrders];
export const viewCurrentOrders = [ensureAuthenticated, verfiyStore, getCurrentOrders, sortOrders];
export const viewCheckedInUsers = [ensureAuthenticated, verfiyStore, getCheckedInUsers];
export const serveOrder = [ensureAuthenticated, verfiyStore, checkOrder, orderServe];
export const cancelOrder = [ensureAuthenticated, verfiyStore, checkOrder, orderCancel];
export const checkOut = [
  validate(validation.checkOut),
  ensureAuthenticated,
  verfiyStore,
  userConfirmCheckedIn,
  userCheckOut,
  userOrdersCheckOut,
];
export const userReport = [
  ensureAuthenticated,
  verfiyStore,
  userConfirmCheckedIn,
  getHistory,
  getProfile,
];
