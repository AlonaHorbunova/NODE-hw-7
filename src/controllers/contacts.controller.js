import {
  getContacts,
  getContactById,
  updateContactByID,
  deleteContactByID,
  addContact,
} from "../services/contacts.service.js";
import HttpError from "../utils/HttpError.js";

export const getContactsController = async (req, res) => {
  const result = await getContacts();
  res.json(result);
};

export const getContactByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await getContactById(id);
  if (!result) throw HttpError(404, `Contact with id=${id} not found`);

  res.json(result);
};

export const addContactController = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};

export const updateContactByIDController = async (req, res) => {
  const { id } = req.params;
  const result = await updateContactByID(id, req.body);
  if (!result) throw HttpError(404, `Contact with id=${id} not found`);
  res.json(result);
};

export const deleteContactByIDController = async (req, res) => {
  const { id } = req.params;
  const result = await deleteContactByID(id);
  if (!result) throw HttpError(404, `Contact with id=${id} not found`);
  res.json({ message: `Contact with id=${id} deleted` });
};
