const SchoolDepartment = require("../models/schooldepartment");

const createSchoolDepartment = async (schoolDepartmentInfo) => {
  return await SchoolDepartment.create(schoolDepartmentInfo);
};

const getAllSchoolDepartments = async () => {
  return await SchoolDepartment.findAll();
};

const getSchoolDepartment = async (schoolDepartmentID) => {
  return await SchoolDepartment.findByPk(schoolDepartmentID);
};

const updateSchoolDepartment = async (
  schoolDepartmentID,
  schoolDepartmentInfo
) => {
  const schoolDepartment = await SchoolDepartment.findByPk(schoolDepartmentID);
  if (schoolDepartment) {
    await schoolDepartment.update(schoolDepartmentInfo);
  }
  return schoolDepartment;
};

const deleteSchoolDepartment = async (schoolDepartmentID) => {
  const schoolDepartment = await SchoolDepartment.findByPk(schoolDepartmentID);
  if (schoolDepartment) {
    await schoolDepartment.destroy();
  }
  return schoolDepartment;
};

module.exports = {
  createSchoolDepartment,
  getAllSchoolDepartments,
  getSchoolDepartment,
  updateSchoolDepartment,
  deleteSchoolDepartment,
};
