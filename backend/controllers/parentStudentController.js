const parentStudentServices = require("../services/parentStudentServices");

const createParentStudent = async (req, res) => {
  try {
    const parentStudent = await parentStudentServices.createParentStudent(
      req.body
    );
    res.status(201).json(parentStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllParentStudents = async (req, res) => {
  try {
    const parentStudents = await parentStudentServices.getAllParentStudents();
    res.json(parentStudents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getParentStudent = async (req, res) => {
  try {
    const parentStudent = await parentStudentServices.getParentStudent(
      req.params.parent_student_id
    );
    res.json(parentStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateParentStudent = async (req, res) => {
  try {
    const parentStudent = await parentStudentServices.updateParentStudent(
      req.params.parent_student_id,
      req.body
    );

    if (parentStudent) {
      res.status(200).json(parentStudent);
      res.json({ message: "Parent-Student record updated" });
    } else {
      res.json({ message: "Parent-Student record not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteParentStudent = async (req, res) => {
  try {
    const parentStudent = await parentStudentServices.deleteParentStudent(
      req.params.parent_student_id
    );

    if (!parentStudent) {
      res.json({ message: "Parent-Student record not found" });
    } else {
      res.json({ message: "Parent-Student record deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createParentStudent,
  getAllParentStudents,
  getParentStudent,
  updateParentStudent,
  deleteParentStudent,
};
