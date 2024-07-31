const express = require("express");
const router = express.Router();
const schoolParentController = require("../controllers/schoolParentController");

router.post("/create", schoolParentController.createSchoolParent);
router.get("/load", schoolParentController.getAllSchoolParents);
router.get("/load/:school_parent_id", schoolParentController.getSchoolParent);
router.put(
  "/update/:school_parent_id",
  schoolParentController.updateSchoolParent
);
router.delete(
  "/delete/:school_parent_id",
  schoolParentController.deleteSchoolParent
);

module.exports = router;
