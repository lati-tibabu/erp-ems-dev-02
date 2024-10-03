const schoolDepartmentServices = require("../services/schoolDeparmentServices");

const createSchoolDepartment = async (req, res) => {
  try {
    const schoolDepartment =
      await schoolDepartmentServices.createSchoolDepartment(req.body);
    res.status(201).json(schoolDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllSchoolDepartments = async (req, res) => {
  try {
    const schoolDepartments =
      await schoolDepartmentServices.getAllSchoolDepartments();
    res.json(schoolDepartments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSchoolDepartment = async (req, res) => {
  try {
    const schoolDepartment = await schoolDepartmentServices.getSchoolDepartment(
      req.params.school_department_id
    );
    res.json(schoolDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSchoolDepartment = async (req, res) => {
  try {
    const schoolDepartment =
      await schoolDepartmentServices.updateSchoolDepartment(
        req.params.school_department_id,
        req.body
      );

    if (schoolDepartment) {
      res.status(200).json(schoolDepartment);
      res.json({ message: "School Department updated" });
    } else {
      res.json({ message: "School Department not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSchoolDepartment = async (req, res) => {
  try {
    const schoolDepartment =
      await schoolDepartmentServices.deleteSchoolDepartment(
        req.params.school_department_id
      );

    if (!schoolDepartment) {
      res.json({ message: "School Department not found" });
    } else {
      res.json({ message: "School Department deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSchoolDepartment,
  getAllSchoolDepartments,
  getSchoolDepartment,
  updateSchoolDepartment,
  deleteSchoolDepartment,
};
