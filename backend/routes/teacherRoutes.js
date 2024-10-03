const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");

router.post("/create", teacherController.createTeacher);
router.get("/load", teacherController.getAllTeachers);
router.get("/loadu/:user_id", teacherController.getTeacherByUserId);
router.get("/load_s/:school_id", teacherController.getAllTeachersBySchool);
router.get("/load/:teacher_id", teacherController.getTeacher);
router.get("/total", teacherController.getTeacherTotal);
router.put("/update/:teacher_id", teacherController.updateTeacher);
router.delete("/delete/:teacher_id", teacherController.deleteTeacher);

module.exports = router;