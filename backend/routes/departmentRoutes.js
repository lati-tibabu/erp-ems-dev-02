const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/departmentController");

router.post("/create", departmentController.createDepartment);
router.get("/load", departmentController.getAllDepartments);
router.get("/load/:department_id", departmentController.getDepartment);
router.put("/update/:department_id", departmentController.updateDepartment);
router.delete("/delete/:department_id", departmentController.deleteDepartment);

module.exports = router;
