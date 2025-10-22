import { Router } from "express";
import { addContactController } from "../controllers/contacts.controller.js";

const contactsRouter = Router();

contactsRouter.post("/", addContactController);

export default contactsRouter;
