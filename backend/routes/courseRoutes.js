const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.post("/create", courseController.createCourse);

router.get("/load", courseController.getAllCourses);

router.get("/load/:courseID", courseController.getCourse);

router.put("/update/:courseID", courseController.updateCourse);

router.delete("/delete/:courseID", courseController.deleteCourse);

module.exports = router;