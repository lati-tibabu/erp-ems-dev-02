const principalServices = require("../services/principalServices");

const createPrincipal = async (req, res) => {
  try {
    const principal = await principalServices.createPrincipal(req.body);
    res.status(201).json(principal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPrincipals = async (req, res) => {
  try {
    const principals = await principalServices.getAllPrincipals();
    res.json(principals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPrincipal = async (req, res) => {
  try {
    const principal = await principalServices.getPrincipal(
      req.params.principal_id
    );
    res.json(principal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePrincipal = async (req, res) => {
  try {
    const principal = await principalServices.updatePrincipal(
      req.params.principal_id,
      req.body
    );

    if (principal) {
      res.status(200).json(principal);
      res.json({ message: "Principal updated" });
    } else {
      res.json({ message: "Principal not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePrincipal = async (req, res) => {
  try {
    const principal = await principalServices.deletePrincipal(
      req.params.principal_id
    );

    if (!principal) {
      res.json({ message: "Principal not found" });
    } else {
      res.json({ message: "Principal deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPrincipal,
  getAllPrincipals,
  getPrincipal,
  updatePrincipal,
  deletePrincipal,
};
