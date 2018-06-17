import knex from "../knex";
import QRCode from "qrcode";

export const generateQR = async (text, cb) => {
  try {
    cb(null, await QRCode.toDataURL(text));
  } catch (err) {
    cb(err);
  }
};

export const getStoreById = id =>
  knex("store")
    .where("id", id)
    .then(stores => stores[0]);

export const insertCategory = (category, storeId) =>
  knex("category")
    .insert({
      name: category.name,
      picture: category.picture,
      description: category.description,
      store_id: storeId
    })
    .returning("id");

export const retrieveStoreCategories = storeId =>
  knex
    .select("id", "name", "picture", "description")
    .table("category")
    .where("store_id", storeId);

export const getCategoryById = id =>
  knex("category")
    .where("id", id)
    .then(categories => categories[0]);

export const delCategory = (storeId, categoryId) => {
  return knex("category")
    .del()
    .where({
      store_id: storeId,
      id: categoryId
    });
};

export const updateCategory = (storeId, categoryId, category) =>
  knex("category")
    .where({ store_id: storeId, id: categoryId })
    .update({
      ...category
    });

export const insertProduct = (product, storeId) =>
  knex("product")
    .insert({
      name: product.name,
      picture: product.picture,
      description: product.description,
      store_id: storeId,
      category_id: product.category_id,
      gem: product.gem,
      price: product.price
    })
    .returning("id");

export const retrieveCategoryProducts = (storeId, categoryId) =>
  knex
    .select("id", "name", "picture", "description", "price", "gem")
    .table("product")
    .where({ store_id: storeId, category_id: categoryId });

export const getProductById = id =>
  knex("product")
    .where("id", id)
    .then(products => products[0]);

export const delProduct = (storeId, productId) => {
  return knex("product")
    .del()
    .where({
      store_id: storeId,
      id: productId
    });
};

export const updateProduct = (storeId, productId, product) =>
  knex("product")
    .where({ store_id: storeId, id: productId })
    .update({
      ...product
    });
