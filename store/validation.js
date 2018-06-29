import Joi from 'joi';

export default {
  addCategory: {
    body: {
      name: Joi.string().required(),
    },
  },
  viewProduct: {
    query: {
      categoryId: Joi.number().required(),
    },
  },
  checkOut: {
    query: {
      userId: Joi.number().required(),
    },
  },
  addProduct: {
    body: {
      name: Joi.string().required(),
      price: Joi.number().required(),
      category_id: Joi.number().required(),
    },
  },
};
