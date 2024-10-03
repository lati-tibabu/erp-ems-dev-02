const express = require("express");
const router = express.Router();
const teacherCourseController = require("../controllers/teacherCourseController");

router.post("/assign", teacherCourseController.assignTeacherToCourse);
router.get("/load_teacher/:course_id/teachers", teacherCourseController.getAllTeachersForCourse);
router.get("/load_course/:teacher_id/courses", teacherCourseController.getAllCoursesForTeacher);
router.delete("/remove", teacherCourseController.removeCourseFromTeacher);

module.exports = router;