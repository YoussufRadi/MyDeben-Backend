import {
  generateQR,
  getStoreById,
  insertCategory,
  retrieveStoreCategories,
  delCategory,
  getCategoryById,
  updateCategory
} from "./model";
import { ensureAuthenticated } from "../auth/controller";

const verfiyStore = (req, res, next) => {
  if (req.model !== "store")
    return res.status(403).json({
      detail: "Permision Denied"
    });
  getStoreById(req.id)
    .then(store => {
      req.store = store;
      next();
    })
    .catch(err => {
      res.status(403).json({ detail: err });
    });
};

const qRcode = (req, res, next) => {
  generateQR(
    "{id: " + req.id + ", name: " + req.store.name + "}",
    (err, code) => {
      if (err)
        return res.status(400).json({
          detail: err
        });
      req.code = code;
      next();
    }
  );
};

const newCategory = (req, res, next) => {
  insertCategory(req.body, req.id)
    .then(name => {
      req.name = name;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const getStoreCategories = (req, res, next) => {
  retrieveStoreCategories(req.id)
    .then(categories => {
      req.categories = categories;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail });
    });
};

const checkCategory = (req, res, next) => {
  getCategoryById(req.params.id)
    .then(category => {
      if (!category)
        return res.status(400).json({
          detail: "Category Id doesn't exist",
          success: false
        });
      if (category.store_id !== req.id)
        return res.status(403).json({
          detail: "Permission Denied",
          success: false
        });

      next();
    })
    .catch(err => {
      res.status(400).json({
        detail: err.detail,
        success: false
      });
    });
};

const removeStoreCategory = (req, res, next) => {
  delCategory(req.id, req.params.id)
    .then(_ => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const editStoreCategory = (req, res, next) => {
  updateCategory(req.id, req.params.id, req.body)
    .then(_ => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

export const generateQRcode = [ensureAuthenticated, verfiyStore, qRcode];
export const addCategory = [ensureAuthenticated, verfiyStore, newCategory];
export const viewCategory = [
  ensureAuthenticated,
  verfiyStore,
  getStoreCategories
];
export const deleteCategory = [
  ensureAuthenticated,
  verfiyStore,
  checkCategory,
  removeStoreCategory
];
export const modifyCategory = [
  ensureAuthenticated,
  verfiyStore,
  checkCategory,
  editStoreCategory
];
