const express = require("express");
const router = express.Router();
const assesmentController = require("../controllers/assesmentController");

router.post("/create", assesmentController.createAssesment);
router.get("/load", assesmentController.getAllAssesments);
router.get("/load/:assesment_id", assesmentController.getAssesment);
router.get("/load_t/:teacher_id", assesmentController.getAssesmentsByTeacherID);
router.get("/load_s/:student_id", assesmentController.getAssesmentsByStudentID);
router.get("/load_sc/:school_id", assesmentController.getAssesmentsBySchoolID);
router.put("/update/:assesment_id", assesmentController.updateAssesment);
router.delete("/delete/:assesment_id", assesmentController.deleteAssesment);

module.exports = router;