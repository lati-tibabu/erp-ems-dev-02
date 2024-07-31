const Parent = require("../models/parent");

const createParent = async (parentInfo) => {
  return await Parent.create(parentInfo);
};

const getAllParents = async () => {
  return await Parent.findAll();
};

const getParent = async (parentID) => {
  return await Parent.findByPk(parentID);
};

const updateParent = async (parentID, parentInfo) => {
  const parent = await Parent.findByPk(parentID);
  if (parent) {
    await parent.update(parentInfo);
  }
  return parent;
};

const deleteParent = async (parentID) => {
  const parent = await Parent.findByPk(parentID);
  if (parent) {
    await parent.destroy();
  }
  return parent;
};

module.exports = {
  createParent,
  getAllParents,
  getParent,
  updateParent,
  deleteParent,
};
