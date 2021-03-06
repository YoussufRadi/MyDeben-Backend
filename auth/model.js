import knex from '../knex';

export const createUser = user =>
  knex('user')
    .insert({
      email: user.email,
      name: user.name,
      password: user.password,
    })
    .returning('email');

export const createUserWithService = service =>
  knex('user')
    .insert(service)
    .returning('email');

export const getUserByEmail = service =>
  knex('user')
    .where(service)
    .then(users => users[0]);

export const createStore = store =>
  knex('store')
    .insert({
      email: store.email,
      name: store.name,
      password: store.password,
    })
    .returning('email');

export const getStoreByEmail = email =>
  knex('store')
    .where('email', email)
    .then(stores => stores[0]);

export const createResetToken = (email, name, model, token) => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return knex('reset-token')
    .where('email', email)
    .del()
    .then(() =>
      knex('reset-token')
        .insert({
          email,
          name,
          model,
          token,
          expires_at: date,
        })
        .returning('email'),
    );
};

export const deleteToken = token =>
  knex('reset-token')
    .where('token', token)
    .del();

export const getTokenObject = token =>
  knex('reset-token')
    .where('token', token)
    .then(model => model[0]);

export const changePassword = (email, password, model) =>
  knex(model)
    .where('email', email)
    .update({ password });
