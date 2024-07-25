const Sequelize = require("sequelize");
const Users = require("../models/users");

const createUser = async (user_info) => {
  return await Users.create(user_info);
};

module.exports = {
  createUser,
};
