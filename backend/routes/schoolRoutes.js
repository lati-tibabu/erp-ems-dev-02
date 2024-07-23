const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");

router.post("/create", schoolController.createSchool);
router.get("/load", schoolController.getAllSchools);
router.get("/load/:school_id", schoolController.getOneSchool);
router.put("/update/:school_id", schoolController.updateSchool);
router.delete("/delete/:school_id", schoolController.deleteSchool);

module.exports = router;
