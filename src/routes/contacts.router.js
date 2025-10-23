import { Router } from "express";
import {
  getContactsController,
  getContactByIdController,
  addContactController,
  updateContactByIDController,
  deleteContactByIDController,
} from "../controllers/contacts.controller.js";

const contactsRouter = Router();

contactsRouter.get("/", getContactsController);

contactsRouter.get("/:id", getContactByIdController);

contactsRouter.post("/", addContactController);

contactsRouter.put("/:id", updateContactByIDController);

contactsRouter.delete("/:id", deleteContactByIDController);

export default contactsRouter;
