const User = require("../models/user");

const createUser = async (userInfo) => {
  return await User.create(userInfo);
};

const getAllUsers = async () => {
  return await User.findAll();
};

const getUser = async (userID) => {
  return await User.findByPk(userID);
};

const updateUser = async (userID, userInfo) => {
  const user = await User.findByPk(userID);
  if (user) {
    await user.update(userInfo);
  }
  return user;
};

const deleteUser = async (userID) => {
  const user = await User.findByPk(userID);
  if (user) {
    await user.destroy();
  }
  return user;
};

const loginUser = async (userName) => {
  // const user = await User.findOne({ where: { username: userName } });
  return await User.findOne({ where: { username: userName } });
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
};
