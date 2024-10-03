const Administrator = require("../models/administrator");

const createAdministrator = async (adminInfo) => {
  return await Administrator.create(adminInfo);
};

const getAllAdministrators = async () => {
  return await Administrator.findAll();
};

const getAdministrator = async (adminID) => {
  return await Administrator.findByPk(adminID);
};

const updateAdministrator = async (adminID, adminInfo) => {
  const administrator = await Administrator.findByPk(adminID);
  if (administrator) {
    await administrator.update(adminInfo);
  }
  return administrator;
};

const deleteAdministrator = async (adminID) => {
  const administrator = await Administrator.findByPk(adminID);
  if (administrator) {
    await administrator.destroy();
  }
  return administrator;
};

module.exports = {
  createAdministrator,
  getAllAdministrators,
  getAdministrator,
  updateAdministrator,
  deleteAdministrator,
};
