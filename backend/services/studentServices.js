const Student = require("../models/student");

const createStudent = async (studentInfo) => {
  return await Student.create(studentInfo);
};

const getAllStudents = async () => {
  return await Student.findAll();
};

const getStudent = async (studentID) => {
  return await Student.findByPk(studentID);
};

const updateStudent = async (studentID, studentInfo) => {
  const student = await Student.findByPk(studentID);
  if (student) {
    await student.update(studentInfo);
  }
  return student;
};

const deleteStudent = async (studentID) => {
  const student = await Student.findByPk(studentID);
  if (student) {
    await student.destroy();
  }
  return student;
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
};
