const TeacherClass = require("../models/teacherclass");

const createTeacherClass = async (teacherClassInfo) => {
  return await TeacherClass.create(teacherClassInfo);
};

const getAllTeacherClasses = async () => {
  return await TeacherClass.findAll();
};

const getTeacherClass = async (teacherClassID) => {
  return await TeacherClass.findByPk(teacherClassID);
};

const updateTeacherClass = async (teacherClassID, teacherClassInfo) => {
  const teacherClass = await TeacherClass.findByPk(teacherClassID);
  if (teacherClass) {
    await teacherClass.update(teacherClassInfo);
  }
  return teacherClass;
};

const deleteTeacherClass = async (teacherClassID) => {
  const teacherClass = await TeacherClass.findByPk(teacherClassID);
  if (teacherClass) {
    await teacherClass.destroy();
  }
  return teacherClass;
};

module.exports = {
  createTeacherClass,
  getAllTeacherClasses,
  getTeacherClass,
  updateTeacherClass,
  deleteTeacherClass,
};
