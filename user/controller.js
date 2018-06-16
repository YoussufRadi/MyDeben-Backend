import { retrieveAll } from "./model";
import { ensureAuthenticated } from "../auth/controller";

export const fetchAllUsers = (req, res, next) => {
  retrieveAll()
    .then(users => {
      req.users = users;
      next();
    })
    .catch(err => {
      res.status(500).json({ detail: err.detail });
    });
};

export const getUsers = [ensureAuthenticated, fetchAllUsers];
