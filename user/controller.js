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
const newOrder = async (req, res, next) => {
  req.order = await insertOrder(req.body.order, req.id)
    .then(orders => {
      req.orders = orders;
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
  // validate(validation.makeOrder),
  ensureAuthenticated,
  verfiyUser,
  newOrder
];
export const viewHistory = [ensureAuthenticated, verfiyUser, getHistory];
