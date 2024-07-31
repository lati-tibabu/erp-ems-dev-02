const School = require("../models/school");

const createSchool = async (schoolInfo) => {
  return await School.create(schoolInfo);
};

const getAllSchools = async () => {
  return await School.findAll();
};

const getSchool = async (schoolID) => {
  return await School.findByPk(schoolID);
};

const updateSchool = async (schoolID, schoolInfo) => {
  const school = await School.findByPk(schoolID);
  if (school) {
    await school.update(schoolInfo);
  }
  return school;
};

const deleteSchool = async (schoolID) => {
  const school = await School.findByPk(schoolID);
  if (school) {
    await school.destroy();
  }
  return school;
};

module.exports = {
  createSchool,
  getAllSchools,
  getSchool,
  updateSchool,
  deleteSchool,
};
