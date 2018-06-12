import { retrieveAll } from "./model";
import config from "../config";
import jwt from "jsonwebtoken";

const ensureAuthenticated = (req, res, next) => {
  var token = req.headers["x-access-token"];
  if (!token)
    res.status(403).json({
      msg: "No token provided!"
    });
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err)
      res.status(500).json({
        msg: "Failed to authenticate token!"
      });
    req.userId = decoded.id;
    next();
  });
};

export const fetchAllUsers = (req, res, next) => {
  retrieveAll()
    .then(users => {
      req.users = users;
      next();
    })
    .catch(err => {
      res.status(500).json({
        err
      });
    });
};

export const getUsers = [ensureAuthenticated, fetchAllUsers];
