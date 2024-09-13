const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");
const authToken = require("../middlewares/auth-token");

router.post("/create", schoolController.createSchool);
router.get("/load", authToken, schoolController.getAllSchools);
router.get("/load_s", schoolController.getAllSchools);
router.get("/load/pagination", authToken, schoolController.getSchoolsPagination);
router.get("/load/paginationC", authToken, schoolController.getSchoolsPaginationC);
router.get("/load/active", authToken, schoolController.getActiveSchool);
router.get("/load/pending", authToken, schoolController.getPendingSchool);
router.get("/load/deleted", authToken, schoolController.getDeletedSchool);
router.get("/load/archived", authToken, schoolController.getArchivedSchool);
router.get("/load/:school_id", schoolController.getSchool);
router.put("/update/:school_id", authToken, schoolController.updateSchool);
router.delete("/delete/:school_id", authToken, schoolController.deleteSchool);

module.exports = router;