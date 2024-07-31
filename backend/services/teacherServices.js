const Teacher = require("../models/teacher");

const createTeacher = async (teacherInfo) => {
  return await Teacher.create(teacherInfo);
};

const getAllTeachers = async () => {
  return await Teacher.findAll();
};

const getTeacher = async (teacherID) => {
  return await Teacher.findByPk(teacherID);
};

const updateTeacher = async (teacherID, teacherInfo) => {
  const teacher = await Teacher.findByPk(teacherID);
  if (teacher) {
    await teacher.update(teacherInfo);
  }
  return teacher;
};

const deleteTeacher = async (teacherID) => {
  const teacher = await Teacher.findByPk(teacherID);
  if (teacher) {
    await teacher.destroy();
  }
  return teacher;
};

module.exports = {
  createTeacher,
  getAllTeachers,
  getTeacher,
  updateTeacher,
  deleteTeacher,
};
