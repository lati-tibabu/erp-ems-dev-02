const express = require("express");
const router = express.Router();
const teacherClassController = require("../controllers/teacherClassController");

router.post("/assign", teacherClassController.assignTeacherToClass);
router.get("/load_class/:teacher_id/classes", teacherClassController.getAllClassForTeacher);
router.get("/load_teacher/:class_id/teachers", teacherClassController.getAllTeacherForClass);
router.delete("/remove", teacherClassController.removeClassFromTeacher);

module.exports = router;









// const express = require("express");
// const router = express.Router();
// const teacherClassController = require("../controllers/teacherClassController");

// router.post("/create", teacherClassController.createTeacherClass);
// router.get("/load", teacherClassController.getAllTeacherClasses);
// router.get("/load/:teacher_class_id", teacherClassController.getTeacherClass);
// router.put(
//   "/update/:teacher_class_id",
//   teacherClassController.updateTeacherClass
// );
// router.delete(
//   "/delete/:teacher_class_id",
//   teacherClassController.deleteTeacherClass
// );

// module.exports = router;