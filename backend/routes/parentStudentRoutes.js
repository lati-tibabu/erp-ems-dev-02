const express = require("express");
const router = express.Router();
const parentStudentController = require("../controllers/parentStudentController");

router.post("/create", parentStudentController.createParentStudent);
router.get("/load", parentStudentController.getAllParentStudents);
router.get(
  "/load/:parent_student_id",
  parentStudentController.getParentStudent
);
router.put(
  "/update/:parent_student_id",
  parentStudentController.updateParentStudent
);
router.delete(
  "/delete/:parent_student_id",
  parentStudentController.deleteParentStudent
);

module.exports = router;
