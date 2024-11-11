const express = require("express");
const router = express.Router();
const assesmentStudentController = require("../controllers/assesmentStudentController");

router.post("/assign", assesmentStudentController.assignAssesmentToStudent);
router.get("/:student_id/assesments", assesmentStudentController.getAllAssesmentForStudent);
router.get("/:student_id/:teacher_id/assesments", assesmentStudentController.getAllAssesmentForStudentByTeacher);
router.delete("/remove", assesmentStudentController.removeAssesmentFromStudent);
router.put("/add-mark/:assesment_id/:student_id", assesmentStudentController.addMarkForStudent);

module.exports = router;