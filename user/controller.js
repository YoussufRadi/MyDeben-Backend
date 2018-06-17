import {
  getUserById,
  insertCheckIn,
  insertOrder,
  retrieveAllOrders
} from "./model";
import { ensureAuthenticated } from "../auth/controller";
import validate from "express-validation";
import validation from "./validation";

const verfiyUser = (req, res, next) => {
  if (req.model !== "user")
    return res.status(403).json({
      detail: "Permision Denied"
    });
  getUserById(req.id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => {
      res.status(403).json({ detail: err });
    });
};

const checkIn = (req, res, next) => {
  insertCheckIn(req.user, req.body)
    .then(_ => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};
const mapOrderRequest = orders => {
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
};

const newOrder = (req, res, next) => {
  insertOrder(req.body, req.id)
    .then(order => {
      console.log(order);

      req.order = order[0];
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err, success: false });
    });
};

const getHistory = (req, res, next) => {
  retrieveAllOrders(req.id)
    .then(orders => {
      req.orders = orders;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail });
    });
};

export const userCheckIn = [
  validate(validation.checkIn),
  ensureAuthenticated,
  verfiyUser,
  checkIn
];
export const addOrder = [
  validate(validation.makeOrder),
  ensureAuthenticated,
  verfiyUser,
  newOrder
];
export const viewHistory = [ensureAuthenticated, verfiyUser, getHistory];
