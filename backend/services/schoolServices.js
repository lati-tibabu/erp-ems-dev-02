const School = require("../models/school");

const createSchool = async (schoolInfo) => {
  return await School.create(schoolInfo);
};

const createSchools = async (schoolsInfo) => {
  return await Promise.all(schoolsInfo.map((school) => School.create(school)));
};
const getAllSchools = async () => {
  return await School.findAll();
};

const getActiveSchool = async () => {
  return await School.findAll({ where: { status: "active" } });
};

const getPendingSchool = async () => {
  return await School.findAll({ where: { status: "pending" } });
};

const getDeletedSchool = async () => {
  return await School.findAll({ where: { status: "deleted" } });
};

const getArchivedSchool = async () => {
  return await School.findAll({ where: { status: "archived" } });
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
  createSchools,
  getAllSchools,
  getActiveSchool,
  getPendingSchool,
  getDeletedSchool,
  getArchivedSchool,
  getSchool,
  updateSchool,
  deleteSchool,
};
