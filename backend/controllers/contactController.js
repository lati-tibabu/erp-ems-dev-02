const contactServices = require("../services/contactServices");

const createContact = async (req, res) => {
  try {
    const contact = await contactServices.createContact(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactServices.getAllContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getContact = async (req, res) => {
  try {
    const contact = await contactServices.getContact(req.params.contact_id);
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const contact = await contactServices.updateContact(
      req.params.contact_id,
      req.body
    );

    if (contact) {
      res.status(200).json(contact);
      res.json({ message: "Contact updated" });
    } else {
      res.json({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await contactServices.deleteContact(req.params.contact_id);

    if (!contact) {
      res.json({ message: "Contact not found" });
    } else {
      res.json({ message: "Contact deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createContact,
  getAllContacts,
  getContact,
  updateContact,
  deleteContact,
};
