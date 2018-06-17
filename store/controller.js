import {
  generateQR,
  getStoreById,
  insertCategory,
  retrieveStoreCategories,
  delCategory,
  getCategoryById,
  updateCategory,
  insertProduct,
  retrieveCategoryProducts,
  getProductById,
  delProduct,
  updateProduct
} from "./model";
import { ensureAuthenticated } from "../auth/controller";
import validate from "express-validation";
import validation from "./validation";

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
    .then(category => {
      req.category = category;
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

const newProduct = (req, res, next) => {
  insertProduct(req.body, req.id)
    .then(product => {
      req.product = product;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const getCategoryProducts = (req, res, next) => {
  retrieveCategoryProducts(req.id, req.query.category)
    .then(products => {
      req.products = products;
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail });
    });
};

const checkProduct = (req, res, next) => {
  getProductById(req.params.id)
    .then(product => {
      if (!product)
        return res.status(400).json({
          detail: "Product Id doesn't exist",
          success: false
        });
      if (product.store_id !== req.id)
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

const removeProduct = (req, res, next) => {
  delProduct(req.id, req.params.id)
    .then(_ => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

const editProduct = (req, res, next) => {
  updateProduct(req.id, req.params.id, req.body)
    .then(_ => {
      next();
    })
    .catch(err => {
      res.status(400).json({ detail: err.detail, success: false });
    });
};

export const generateQRcode = [ensureAuthenticated, verfiyStore, qRcode];
export const addCategory = [
  validate(validation.addCategory),
  ensureAuthenticated,
  verfiyStore,
  newCategory
];
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
export const addProduct = [
  validate(validation.addProduct),
  ensureAuthenticated,
  verfiyStore,
  newProduct
];
export const viewProduct = [
  validate(validation.viewProduct),
  ensureAuthenticated,
  verfiyStore,
  getCategoryProducts
];
export const deleteProduct = [
  ensureAuthenticated,
  verfiyStore,
  checkProduct,
  removeProduct
];
export const modifyProduct = [
  ensureAuthenticated,
  verfiyStore,
  checkProduct,
  editProduct
];
