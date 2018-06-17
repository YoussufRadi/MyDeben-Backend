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
    .returning("name");

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
