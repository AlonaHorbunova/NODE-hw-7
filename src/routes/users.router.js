import { Router } from "express";

import {
  getUsersController,
  addUsersController,
} from "../controllers/user.controller.js";

const usersRouter = new Router();

usersRouter.get("/", getUsersController);

usersRouter.post("/", addUsersController);

export default usersRouter;
