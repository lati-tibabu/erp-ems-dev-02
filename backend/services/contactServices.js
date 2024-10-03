const Contact = require("../models/contact");

const createContact = async(contactInfo) => {
    return await Contact.create(contactInfo);
};

const createContacts = async(contactsInfo) => {
    return await Promise.all(
        contactsInfo.map((contact) => Contact.create(contact))
    );
};

const getAllContacts = async() => {
    return await Contact.findAll();
};

const getContact = async(contactID) => {
    return await Contact.findByPk(contactID);
};

const getUserContact = async(userID) => {
    return await Contact.findAll({ where: { user_id: userID } });
};

const updateContact = async(contactID, contactInfo) => {
    const contact = await Contact.findByPk(contactID);
    if (contact) {
        await contact.update(contactInfo);
    }
    return contact;
};

const deleteContact = async(contactID) => {
    const contact = await Contact.findByPk(contactID);
    if (contact) {
        await contact.destroy();
    }
    return contact;
};

module.exports = {
    createContact,
    createContacts,
    getAllContacts,
    getContact,
    getUserContact,
    updateContact,
    deleteContact,
};