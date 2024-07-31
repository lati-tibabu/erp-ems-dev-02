const teacherClassServices = require("../services/teacherClassServices");

const createTeacherClass = async (req, res) => {
  try {
    const teacherClass = await teacherClassServices.createTeacherClass(
      req.body
    );
    res.status(201).json(teacherClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTeacherClasses = async (req, res) => {
  try {
    const teacherClasses = await teacherClassServices.getAllTeacherClasses();
    res.json(teacherClasses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTeacherClass = async (req, res) => {
  try {
    const teacherClass = await teacherClassServices.getTeacherClass(
      req.params.teacher_class_id
    );
    res.json(teacherClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTeacherClass = async (req, res) => {
  try {
    const teacherClass = await teacherClassServices.updateTeacherClass(
      req.params.teacher_class_id,
      req.body
    );

    if (teacherClass) {
      res.status(200).json(teacherClass);
      res.json({ message: "Teacher Class updated" });
    } else {
      res.json({ message: "Teacher Class not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTeacherClass = async (req, res) => {
  try {
    const teacherClass = await teacherClassServices.deleteTeacherClass(
      req.params.teacher_class_id
    );

    if (!teacherClass) {
      res.json({ message: "Teacher Class not found" });
    } else {
      res.json({ message: "Teacher Class deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTeacherClass,
  getAllTeacherClasses,
  getTeacherClass,
  updateTeacherClass,
  deleteTeacherClass,
};
