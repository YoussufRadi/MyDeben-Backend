import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validate from 'express-validation';
import validation from './validation';
import config from '../config';
import { createUser, getUserByEmail, createStore, getStoreByEmail } from './model';

const userCreate = (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  createUser(req.body)
    .then(() => {
      next();
    })
    .catch((err) => {
      console.log(err);

      res.status(400).json({
        success: false,
        detail: err.detail,
      });
    });
};

const userVerify = (req, res, next) => {
  getUserByEmail(req.body.email)
    .then((user) => {
      if (!user) {
        res.status(400).json({
          detail: 'Invalid Username/Password',
          token: null,
          auth: false,
        });
        return;
      }
      const passIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passIsValid) {
        res.status(400).json({
          detail: 'Invalid Username/Password',
          token: null,
          auth: false,
        });
        return;
      }
      req.token = jwt.sign({ id: user.id, model: 'user' }, config.jwtSecret, {
        expiresIn: config.jwtExpiry,
      });
      next();
    })
    .catch(err => res.status(400).json({ detail: err, auth: false, token: null }));
};

const storeCreate = (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  createStore(req.body)
    .then(() => {
      next();
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        detail: err.detail,
      });
    });
};

const storeVerify = (req, res, next) => {
  getStoreByEmail(req.body.email)
    .then((store) => {
      if (!store) {
        res.status(400).json({
          detail: 'Invalid Username/Password',
          token: null,
          auth: false,
        });
        return;
      }
      const passIsValid = bcrypt.compareSync(req.body.password, store.password);
      if (!passIsValid) {
        res.status(400).json({
          detail: 'Invalid Username/Password',
          token: null,
          auth: false,
        });
        return;
      }
      req.token = jwt.sign({ id: store.id, model: 'store' }, config.jwtSecret, {
        expiresIn: config.jwtExpiry,
      });
      next();
    })
    .catch((err) => {
      res.status(400).json({ detail: err, auth: false, token: null });
    });
};

export const ensureAuthenticated = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    res.status(403).json({
      detail: 'No token provided!',
    });
    return;
  }
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      res.status(500).json({ detail: err.message });
      return;
    }
    req.id = decoded.id;
    req.model = decoded.model;
    next();
  });
};

export const userSignUp = [validate(validation.signUp), userCreate];
export const userSignIn = [validate(validation.signIn), userVerify];
export const storeSignUp = [validate(validation.signUp), storeCreate];
export const storeSignIn = [validate(validation.signIn), storeVerify];
