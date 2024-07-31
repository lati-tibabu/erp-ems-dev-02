const express = require("express");
const router = express.Router();
const teacherClassController = require("../controllers/teacherClassController");

router.post("/create", teacherClassController.createTeacherClass);
router.get("/load", teacherClassController.getAllTeacherClasses);
router.get("/load/:teacher_class_id", teacherClassController.getTeacherClass);
router.put(
  "/update/:teacher_class_id",
  teacherClassController.updateTeacherClass
);
router.delete(
  "/delete/:teacher_class_id",
  teacherClassController.deleteTeacherClass
);

module.exports = router;
