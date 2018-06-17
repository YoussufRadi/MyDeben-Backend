import { retrieveAll, getUserById, insertCheckIn } from "./model";
import { ensureAuthenticated } from "../auth/controller";

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
  insertCheckIn(req.user, req.body.store_name, req.body.store_id)
    .then(_ => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const fetchAllUsers = (req, res, next) => {
  retrieveAll()
    .then(users => {
      req.users = users;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail });
    });
};

export const getUsers = [ensureAuthenticated, verfiyUser, fetchAllUsers];
export const userCheckIn = [ensureAuthenticated, verfiyUser, checkIn];
