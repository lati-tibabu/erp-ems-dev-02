const departmentServices = require("../services/departmentServices");

const createDepartment = async (req, res) => {
  try {
    const department = await departmentServices.createDepartment(req.body);
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllDepartments = async (req, res) => {
  try {
    const departments = await departmentServices.getAllDepartments();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDepartment = async (req, res) => {
  try {
    const department = await departmentServices.getDepartment(
      req.params.department_id
    );
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const department = await departmentServices.updateDepartment(
      req.params.department_id,
      req.body
    );

    if (department) {
      res.status(200).json(department);
      res.json({ message: "Department updated" });
    } else {
      res.json({ message: "Department not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const department = await departmentServices.deleteDepartment(
      req.params.department_id
    );

    if (!department) {
      res.json({ message: "Department not found" });
    } else {
      res.json({ message: "Department deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDepartment,
  getAllDepartments,
  getDepartment,
  updateDepartment,
  deleteDepartment,
};
