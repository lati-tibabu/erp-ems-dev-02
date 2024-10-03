const administratorServices = require("../services/administratorServices");

const createAdministrator = async (req, res) => {
  try {
    const administrator = await administratorServices.createAdministrator(
      req.body
    );
    res.status(201).json(administrator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllAdministrators = async (req, res) => {
  try {
    const administrators = await administratorServices.getAllAdministrators();
    res.json(administrators);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAdministrator = async (req, res) => {
  try {
    const administrator = await administratorServices.getAdministrator(
      req.params.admin_id
    );
    res.json(administrator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAdministrator = async (req, res) => {
  try {
    const administrator = await administratorServices.updateAdministrator(
      req.params.admin_id,
      req.body
    );

    if (administrator) {
      res.status(200).json(administrator);
      res.json({ message: "Administrator updated" });
    } else {
      res.json({ message: "Administrator not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAdministrator = async (req, res) => {
  try {
    const administrator = await administratorServices.deleteAdministrator(
      req.params.admin_id
    );

    if (!administrator) {
      res.json({ message: "Administrator not found" });
    } else {
      res.json({ message: "Administrator deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAdministrator,
  getAllAdministrators,
  getAdministrator,
  updateAdministrator,
  deleteAdministrator,
};
