import validate from 'express-validation';
import validation from './validation';
import { ensureAuthenticated } from '../auth/controller';
import {
  getUserById,
  insertCheckIn,
  insertOrder,
  retrieveAllOrders,
} from './model';

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
      res.status(400).json({ detail: err, success: false });
    });
};

const getHistory = (req, res, next) => {
  retrieveAllOrders(req.id)
    .then((orders) => {
      req.orders = orders;
      next();
    })
    .catch((err) => {
      res.status(400).json({ detail: err.detail });
    });
};

export const userCheckIn = [
  validate(validation.checkIn),
  ensureAuthenticated,
  verfiyUser,
  checkIn,
];
export const addOrder = [
  validate(validation.makeOrder),
  ensureAuthenticated,
  verfiyUser,
  newOrder,
];
export const viewHistory = [ensureAuthenticated, verfiyUser, getHistory];
