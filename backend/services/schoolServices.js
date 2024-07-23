const { where } = require("sequelize");
const School = require("../models/school");

// Service code to create school
const createSchool = async (school_info) => {
  return await School.create(school_info);
};

// Service code to get schools(all schools or one school(by school_id))
const getAllSchools = async () => {
  return await School.findAll();
};

const getOneSchool = async (schoolId) => {
  return await School.findByPk(schoolId);
};

// Service code to update one student

const updateSchool = async (schoolId, school_info) => {
  const school = await School.findByPk(schoolId);
  if (school) {
    await school.update(school_info);
  }
  return school;
};

// Sevice code to delete student

const deleteSchool = async (schoolId) => {
  const school = await School.findByPk(schoolId);
  if (school) {
    await school.destroy();
  }
  return school;
};

module.exports = {
  createSchool,
  getAllSchools,
  getOneSchool,
  updateSchool,
  deleteSchool,
};
