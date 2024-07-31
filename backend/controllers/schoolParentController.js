const schoolParentServices = require("../services/schoolParentServices");

const createSchoolParent = async (req, res) => {
  try {
    const schoolParent = await schoolParentServices.createSchoolParent(
      req.body
    );
    res.status(201).json(schoolParent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllSchoolParents = async (req, res) => {
  try {
    const schoolParents = await schoolParentServices.getAllSchoolParents();
    res.json(schoolParents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSchoolParent = async (req, res) => {
  try {
    const schoolParent = await schoolParentServices.getSchoolParent(
      req.params.school_parent_id
    );
    res.json(schoolParent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSchoolParent = async (req, res) => {
  try {
    const schoolParent = await schoolParentServices.updateSchoolParent(
      req.params.school_parent_id,
      req.body
    );

    if (schoolParent) {
      res.status(200).json(schoolParent);
      res.json({ message: "School Parent updated" });
    } else {
      res.json({ message: "School Parent not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSchoolParent = async (req, res) => {
  try {
    const schoolParent = await schoolParentServices.deleteSchoolParent(
      req.params.school_parent_id
    );

    if (!schoolParent) {
      res.json({ message: "School Parent not found" });
    } else {
      res.json({ message: "School Parent deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSchoolParent,
  getAllSchoolParents,
  getSchoolParent,
  updateSchoolParent,
  deleteSchoolParent,
};
