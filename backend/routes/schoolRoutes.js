const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");
const authToken = require("../middlewares/auth-token");

router.post("/create", schoolController.createSchool);
router.get("/load", schoolController.getAllSchools);
router.get("/load/active", schoolController.getActiveSchool);
router.get("/load/pending", schoolController.getPendingSchool);
router.get("/load/deleted", schoolController.getDeletedSchool);
router.get("/load/archived", schoolController.getArchivedSchool);
router.get("/load/:school_id", schoolController.getSchool);
router.put("/update/:school_id", schoolController.updateSchool);
router.delete("/delete/:school_id", schoolController.deleteSchool);

module.exports = router;
