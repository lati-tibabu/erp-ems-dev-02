const express = require("express");
const router = express.Router();
const classAssignController = require("../controllers/classAssignController");

router.post("/assign", classAssignController.assignCourseToClass);
router.get("/:class_id/courses", classAssignController.getAllCoursesForClass);
router.delete("/remove", classAssignController.removeCourseFromClass);

module.exports = router;