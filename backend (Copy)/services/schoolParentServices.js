const SchoolParent = require("../models/schoolparent");

const createSchoolParent = async (schoolParentInfo) => {
  return await SchoolParent.create(schoolParentInfo);
};

const getAllSchoolParents = async () => {
  return await SchoolParent.findAll();
};

const getSchoolParent = async (schoolParentID) => {
  return await SchoolParent.findByPk(schoolParentID);
};

const updateSchoolParent = async (schoolParentID, schoolParentInfo) => {
  const schoolParent = await SchoolParent.findByPk(schoolParentID);
  if (schoolParent) {
    await schoolParent.update(schoolParentInfo);
  }
  return schoolParent;
};

const deleteSchoolParent = async (schoolParentID) => {
  const schoolParent = await SchoolParent.findByPk(schoolParentID);
  if (schoolParent) {
    await schoolParent.destroy();
  }
  return schoolParent;
};

module.exports = {
  createSchoolParent,
  getAllSchoolParents,
  getSchoolParent,
  updateSchoolParent,
  deleteSchoolParent,
};
