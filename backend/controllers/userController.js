const userServices = require("../services/userServices");

const createUser = async (req, res) => {
  try {
    const user = await userServices.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userServices.getUser(req.params.user_id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userServices.updateUser(req.params.user_id, req.body);

    if (user) {
      res.status(200).json(user);
      res.json({ message: "User updated" });
    } else {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await userServices.deleteUser(req.params.user_id);

    if (!user) {
      res.json({ message: "User not found" });
    } else {
      res.json({ message: "User deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
