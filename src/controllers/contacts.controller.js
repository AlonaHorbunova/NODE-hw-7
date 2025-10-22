import { addContact } from "../services/contacts.service.js";

export const addContactController = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};
