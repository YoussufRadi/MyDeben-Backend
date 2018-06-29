import validate from 'express-validation';
import nodemailer from 'nodemailer';
import validation from './validation';
import { ensureAuthenticated } from '../auth/controller';
import { getUserById, insertCheckIn, insertOrder, retrieveAllOrders, retrieveGems } from './model';
import { retrieveStoreCategories, getCategoryById, retrieveCategoryProducts } from '../store/model';

const verfiyUser = (req, res, next) => {
  if (req.model !== 'user') {
    res.status(403).json({
      detail: 'Permision Denied',
    });
    return;
  }
  getUserById(req.id)
    .then((user) => {
      if (!user) {
        res.status(400).json({ detail: 'User doesnot exist' });
        return;
      }
      req.user = user;
      delete user.password;
      delete user.createdAt;
      delete user.updatedAt;
      next();
    })
    .catch((err) => {
      res.status(403).json({ detail: err });
    });
};

const checkIn = (req, res, next) => {
  if (req.user.checkin_store_id) {
    res.status(400).json({ detail: 'Must Checkout from store first', success: false });
    return;
  }
  insertCheckIn(req.user, req.body)
    .then(() => {
      next();
    })
    .catch((err) => {
      res.status(404).json({ detail: err.detail, success: false });
    });
};

const newOrder = async (req, res, next) => {
  const storeId = req.user.checkin_store_id;
  if (!storeId || req.body.store_id !== storeId) {
    res.status(400).json({ detail: 'User didnot checkin into store' });
    return;
  }
  req.order = await insertOrder(req.body.order, req.id, storeId)
    .then((orders) => {
      req.orders = orders;
      next();
    })
    .catch((err) => {
      res.status(400).json({ detail: 'Product ID not valid', success: false });
    });
};

const getHistory = (req, res, next) => {
  retrieveAllOrders(req.user)
    .then((orders) => {
      req.orders = orders;
      next();
    })
    .catch((err) => {
      res.status(400).json({ detail: err });
    });
};

const getProfile = (req, res, next) => {
  req.total = 0;
  req.orders.forEach((order) => {
    req.total += order.total_price;
  });
  next();
};

const getGems = (req, res, next) => {
  retrieveGems(req.user.checkin_store_id)
    .then((gems) => {
      req.gems = gems;
      next();
    })
    .catch((err) => {
      res.status(400).json({ detail: err.detail });
    });
};

const getStoreCategories = (req, res, next) => {
  if (!req.user.checkin_store_id) {
    res.status(400).json({ detail: 'User didnot checkin into store' });
    return;
  }
  retrieveStoreCategories(req.user.checkin_store_id)
    .then((categories) => {
      req.categories = categories;
      next();
    })
    .catch((err) => {
      res.status(400).json({ detail: err.detail });
    });
};

const getCategoryProducts = (req, res, next) => {
  if (!req.user.checkin_store_id) {
    res.status(400).json({ detail: 'User didnot checkin into store' });
    return;
  }
  retrieveCategoryProducts(req.user.checkin_store_id, req.query.categoryId)
    .then((products) => {
      req.products = products;
      next();
    })
    .catch((err) => {
      res.status(400).json({ detail: err.detail });
    });
};

const checkCategory = (req, res, next) => {
  getCategoryById(req.query.categoryId)
    .then((category) => {
      if (!category) {
        res.status(404).json({
          detail: 'Category Id not found',
          success: false,
        });
        return;
      }
      if (category.store_id !== req.user.checkin_store_id) {
        res.status(403).json({
          detail: 'Permission Denied',
          success: false,
        });
        return;
      }
      next();
    })
    .catch((err) => {
      res.status(400).json({
        detail: err,
        success: false,
      });
    });
};

export const userCheckIn = [validate(validation.checkIn), ensureAuthenticated, verfiyUser, checkIn];
export const addOrder = [validate(validation.makeOrder), ensureAuthenticated, verfiyUser, newOrder];
export const viewHistory = [ensureAuthenticated, verfiyUser, getHistory];
export const profile = [ensureAuthenticated, verfiyUser, getHistory, getProfile];
export const discover = [ensureAuthenticated, verfiyUser, getGems];
export const viewCategory = [ensureAuthenticated, verfiyUser, getStoreCategories];
export const viewProduct = [
  validate(validation.viewProduct),
  ensureAuthenticated,
  verfiyUser,
  checkCategory,
  getCategoryProducts,
];
