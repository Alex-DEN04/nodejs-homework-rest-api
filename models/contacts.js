const fs = require('fs/promises')
const path = require("path");
const { nanoid } = require("nanoid");

const newContactId = nanoid();
const contactsPath = path.join(__dirname, "/contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contactById = await contacts.find((item) => item.id === contactId);
  return contactById || null;
}

const removeContact = async (contactId) => {}

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = { id: newContactId, ...body };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
