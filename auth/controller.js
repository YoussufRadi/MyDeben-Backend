import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validate from "express-validation";
import config from "../config";
import validation from "./validation";
import { create, getByEmail } from "./model";

export const userCreate = (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  create(req.body)
    .then(_ => {
      next();
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        detail: err.detail
      });
    });
};

export const userVerify = (req, res, next) => {
  getByEmail(req.body.email)
    .then(user => {
      console.log(req.body.password);
      if (!user)
        return res.status(400).json({
          detail: "Invalid Username/Password",
          token: null,
          auth: false
        });
      const passIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passIsValid || !user)
        return res.status(400).json({
          detail: "Invalid Username/Password",
          token: null,
          auth: false
        });
      req.token = jwt.sign({ id: user._id, model: "user" }, config.jwtSecret, {
        expiresIn: config.jwtExpiry
      });
      next();
    })
    .catch(err => {
      res.status(400).json({
        detail: err,
        auth: false,
        token: null
      });
    });
};

export const ensureAuthenticated = (req, res, next) => {
  var token = req.headers["x-access-token"];
  if (!token)
    res.status(403).json({
      detail: "No token provided!"
    });
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) return res.status(500).json({ detail: err.message });
    req.userId = decoded.id;
    next();
  });
};

export const userSignUp = [validate(validation.signUp), userCreate];
export const userSignIn = [validate(validation.signIn), userVerify];
