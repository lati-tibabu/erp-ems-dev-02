const Department = require("../models/department");

const createDepartment = async (departmentInfo) => {
  return await Department.create(departmentInfo);
};

const getAllDepartments = async () => {
  return await Department.findAll();
};

const getDepartment = async (departmentID) => {
  return await Department.findByPk(departmentID);
};

const updateDepartment = async (departmentID, departmentInfo) => {
  const department = await Department.findByPk(departmentID);
  if (department) {
    await department.update(departmentInfo);
  }
  return department;
};

const deleteDepartment = async (departmentID) => {
  const department = await Department.findByPk(departmentID);
  if (department) {
    await department.destroy();
  }
  return department;
};

module.exports = {
  createDepartment,
  getAllDepartments,
  getDepartment,
  updateDepartment,
  deleteDepartment,
};
