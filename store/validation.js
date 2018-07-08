import Joi from 'joi';

export default {
  addService: {
    body: {
      name: Joi.string().required(),
    },
  },
  addProvider: {
    body: {
      name: Joi.string().required(),
      service_id: Joi.number().required(),
    },
  },
  addCategory: {
    body: {
      name: Joi.string().required(),
      provider_id: Joi.number().required(),
    },
  },
  addProduct: {
    body: {
      name: Joi.string().required(),
      price: Joi.number().required(),
      category_id: Joi.number().required(),
    },
  },
  viewProvider: {
    query: {
      serviceId: Joi.number().required(),
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
  checkOut: {
    query: {
      userId: Joi.number().required(),
    },
  },
};
