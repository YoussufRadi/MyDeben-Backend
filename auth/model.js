import knex from '../knex';

export const createUser = user =>
  knex('user')
    .insert({
      email: user.email,
      name: user.name,
      password: user.password,
    })
    .returning('email');

export const getUserByEmail = email =>
  knex('user')
    .where('email', email)
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

export const createResetToken = (email, model, token) => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return knex('reset-token')
    .where('email', email)
    .del()
    .then(() =>
      knex('reset-token')
        .insert({
          email,
          model,
          token,
          expires_at: date,
        })
        .returning('email'),
    );
};
