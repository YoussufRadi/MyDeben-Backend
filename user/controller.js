import validate from 'express-validation';
import validation from './validation';
import { ensureAuthenticated } from '../auth/controller';
import { getUserById, insertCheckIn, insertOrder, retrieveAllOrders, retrieveGems } from './model';

const verfiyUser = (req, res, next) => {
  if (req.model !== 'user') {
    res.status(403).json({
      detail: 'Permision Denied',
    });
    return;
  }
  getUserById(req.id)
    .then((user) => {
      user.password = '';
      if (!user) {
        res.status(400).json({ detail: 'User doesnot exist' });
        return;
      }
      req.user = user;
      next();
    })
    .catch((err) => {
      res.status(403).json({ detail: err });
    });
};

const checkIn = (req, res, next) => {
  insertCheckIn(req.user, req.body)
    .then(() => {
      next();
    })
    .catch((err) => {
      res.status(400).json({ detail: err.detail, success: false });
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
export const userCheckIn = [validate(validation.checkIn), ensureAuthenticated, verfiyUser, checkIn];
export const addOrder = [validate(validation.makeOrder), ensureAuthenticated, verfiyUser, newOrder];
export const viewHistory = [ensureAuthenticated, verfiyUser, getHistory];
export const profile = [ensureAuthenticated, verfiyUser, getHistory, getProfile];
export const discover = [ensureAuthenticated, verfiyUser, getGems];
