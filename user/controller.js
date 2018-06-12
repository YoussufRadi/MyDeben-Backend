import { listAll } from "./model";

export const getUsers = (req, res, next) => {
  listAll().then(users => {
    res.status(200).json({
      users
    });
  });
};
