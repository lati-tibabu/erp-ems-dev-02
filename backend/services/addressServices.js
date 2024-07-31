const Address = require("../models/address");

const createAddress = async (address_info) => {
  return await Address.create(address_info);
};

const getAllAddress = async () => {
  return await Address.findAll();
};

const getAddress = async (addressID) => {
  return await Address.findByPk(addressID);
};

const updateAddress = async (addressID, address_info) => {
  const address = await Address.findByPk(addressID);
  if (address) {
    await address.update(address_info);
  }
  return address;
};

const deleteAddress = async (addressID) => {
  const address = await Address.findByPk(addressID);
  if (address) {
    await address.destroy();
  }
  return address;
};

module.exports = {
  createAddress,
  getAllAddress,
  getAddress,
  updateAddress,
  deleteAddress,
};
