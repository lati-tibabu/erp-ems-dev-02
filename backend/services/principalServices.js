const Principal = require("../models/principal");

const createPrincipal = async (principalInfo) => {
  return await Principal.create(principalInfo);
};

const getAllPrincipals = async () => {
  return await Principal.findAll();
};

const getPrincipal = async (principalID) => {
  return await Principal.findByPk(principalID);
};

const updatePrincipal = async (principalID, principalInfo) => {
  const principal = await Principal.findByPk(principalID);
  if (principal) {
    await principal.update(principalInfo);
  }
  return principal;
};

const deletePrincipal = async (principalID) => {
  const principal = await Principal.findByPk(principalID);
  if (principal) {
    await principal.destroy();
  }
  return principal;
};

module.exports = {
  createPrincipal,
  getAllPrincipals,
  getPrincipal,
  updatePrincipal,
  deletePrincipal,
};
