const express = require("express");
const router = express.Router();
const schoolDepartmentController = require("../controllers/schoolDepartmentController");

router.post("/create", schoolDepartmentController.createSchoolDepartment);
router.get("/load", schoolDepartmentController.getAllSchoolDepartments);
router.get(
  "/load/:school_department_id",
  schoolDepartmentController.getSchoolDepartment
);
router.put(
  "/update/:school_department_id",
  schoolDepartmentController.updateSchoolDepartment
);
router.delete(
  "/delete/:school_department_id",
  schoolDepartmentController.deleteSchoolDepartment
);

module.exports = router;
