const schoolServices = require("../services/schoolServices");

const createSchool = async (req, res) => {
  try {
    const school = await schoolServices.createSchool(req.body);
    res.status(201).json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllSchools = async (req, res) => {
  try {
    const school = await schoolServices.getAllSchools();
    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOneSchool = async (req, res) => {
  try {
    const school = await schoolServices.getOneSchool(req.params.school_id);
    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSchool = async (req, res) => {
  try {
    const school = await schoolServices.updateSchool(
      req.params.school_id,
      req.body
    );
    if (school) {
      res.status(200).json(school);
      res.json({ message: "School updated" });
    } else {
      res.json({ message: "School not found" });
    }
  } catch (error) {
    res.json({ message: "to tes" + error.message });
  }
};
const deleteSchool = async (req, res) => {
  try {
    const school = await schoolServices.deleteSchool(req.params.school_id);
    if (!school) {
      res.status(404).json({ message: "School not found" });
    } else {
      //   school.destroy();
      res.status(200).json({ message: "School deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSchool,
  getAllSchools,
  getOneSchool,
  updateSchool,
  deleteSchool,
};
