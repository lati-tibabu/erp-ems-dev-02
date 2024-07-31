const studentServices = require("../services/studentServices");

const createStudent = async (req, res) => {
  try {
    const student = await studentServices.createStudent(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await studentServices.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await studentServices.getStudent(req.params.student_id);
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await studentServices.updateStudent(
      req.params.student_id,
      req.body
    );

    if (student) {
      res.status(200).json(student);
      res.json({ message: "Student updated" });
    } else {
      res.json({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await studentServices.deleteStudent(req.params.student_id);

    if (!student) {
      res.json({ message: "Student not found" });
    } else {
      res.json({ message: "Student deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
};
