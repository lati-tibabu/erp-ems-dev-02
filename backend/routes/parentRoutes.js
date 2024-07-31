const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/create", studentController.createStudent);
router.get("/load", studentController.getAllStudents);
router.get("/load/:student_id", studentController.getStudent);
router.put("/update/:student_id", studentController.updateStudent);
router.delete("/delete/:student_id", studentController.deleteStudent);

module.exports = router;
