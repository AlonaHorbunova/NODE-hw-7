import { getUsers, addUser } from "../services/user.service.js";

export const getUsersController = async (req, res) => {
  const users = await getUsers();
  res.json(users);
};

export const addUsersController = async (req, res) => {
  const result = await addUser(req.body);

  res.status(201).json(result);
};
