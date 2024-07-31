const Contact = require("../models/contact");

const createContact = async (contactInfo) => {
  return await Contact.create(contactInfo);
};

const getAllContacts = async () => {
  return await Contact.findAll();
};

const getContact = async (contactID) => {
  return await Contact.findByPk(contactID);
};

const updateContact = async (contactID, contactInfo) => {
  const contact = await Contact.findByPk(contactID);
  if (contact) {
    await contact.update(contactInfo);
  }
  return contact;
};

const deleteContact = async (contactID) => {
  const contact = await Contact.findByPk(contactID);
  if (contact) {
    await contact.destroy();
  }
  return contact;
};

module.exports = {
  createContact,
  getAllContacts,
  getContact,
  updateContact,
  deleteContact,
};
