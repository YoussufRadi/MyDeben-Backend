import { retrieveAll } from "./model";
import config from "../config";
import jwt from "jsonwebtoken";

const ensureAuthenticated = (req, res, next) => {
  var token = req.headers["x-access-token"];
  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err)
        res.status(400).json({
          success: false,
          msg: "Error decoding your token!"
        });
      else {
        req.currentUser = decoded;
        next();
      }
    });
  } else {
    res.status(400).json({
      msg: "No token provided!"
    });
  }
};

export const fetchAllUsers = (req, res, next) => {
  retrieveAll().then(users => {
    res.status(200).json({
      users
    });
  });
};

export const getUsers = [ensureAuthenticated, fetchAllUsers];
