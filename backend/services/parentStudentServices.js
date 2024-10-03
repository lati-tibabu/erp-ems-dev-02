const ParentStudent = require("../models/parentstudent");

const createParentStudent = async (parentStudentInfo) => {
  return await ParentStudent.create(parentStudentInfo);
};

const getAllParentStudents = async () => {
  return await ParentStudent.findAll();
};

const getParentStudent = async (parentStudentID) => {
  return await ParentStudent.findByPk(parentStudentID);
};

const updateParentStudent = async (parentStudentID, parentStudentInfo) => {
  const parentStudent = await ParentStudent.findByPk(parentStudentID);
  if (parentStudent) {
    await parentStudent.update(parentStudentInfo);
  }
  return parentStudent;
};

const deleteParentStudent = async (parentStudentID) => {
  const parentStudent = await ParentStudent.findByPk(parentStudentID);
  if (parentStudent) {
    await parentStudent.destroy();
  }
  return parentStudent;
};

module.exports = {
  createParentStudent,
  getAllParentStudents,
  getParentStudent,
  updateParentStudent,
  deleteParentStudent,
};
