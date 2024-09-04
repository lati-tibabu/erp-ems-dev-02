const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const authToken = require("../middlewares/auth-token");

router.post("/create", studentController.createStudent);
router.get("/load", studentController.getAllStudents);
router.get("/load_data/:student_id", studentController.getStudentData);
router.get("/load_s/:school_id", studentController.getAllStudentsBySchool);
router.get("/load_g/:school_id/:gender", studentController.getAllStudentsByGender);
router.get("/load_c/:school_id/:class_id", studentController.getAllStudentsByClass);
router.get("/load_grade/:school_id/:grade_level", studentController.getAllStudentsByGrade);
router.get("/load/:student_id", studentController.getStudent);
router.put("/update/:student_id", studentController.updateStudent);
router.delete("/delete/:student_id", studentController.deleteStudent);


module.exports = router;