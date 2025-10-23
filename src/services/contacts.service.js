import Contact from "../db/models/Contact.js";

export const getContacts = () => Contact.findAll();

export const getContactById = (id) => Contact.findByPk(id);

export const addContact = (payload) => Contact.create(payload);

export const updateContactByID = async (id, payload) => {
  const contact = await getContactById(id);
  if (!contact) return null;

  await contact.update(payload);
  return contact;
};

export const deleteContactByID = async (id) => {
  const contact = await getContactById(id);
  if (!contact) return null;
  await contact.destroy();
  return contact;
};
