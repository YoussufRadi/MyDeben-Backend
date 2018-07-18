import Joi from 'joi';

export default {
  checkIn: {
    body: {
      store_name: Joi.string().required(),
      store_id: Joi.number().required(),
      checkout_date: Joi.date().required(),
    },
  },
  token: {
    body: {
      token: Joi.string().required(),
    },
  },
  viewCategory: {
    query: {
      providerId: Joi.number().required(),
    },
  },
  viewProduct: {
    query: {
      categoryId: Joi.number().required(),
    },
  },
  search: {
    query: {
      keyword: Joi.string().required(),
    },
  },
  makeOrder: {
    body: {
      store_id: Joi.number().required(),
      order: Joi.array().items(
        Joi.object({
          quantity: Joi.number().required(),
          product_id: Joi.number().required(),
        }),
      ),
    },
  },
};
