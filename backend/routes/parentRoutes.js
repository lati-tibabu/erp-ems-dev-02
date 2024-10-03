const express = require("express");
const router = express.Router();
const parentController = require("../controllers/parentController");

router.post("/create", parentController.createParent);
router.get("/load", parentController.getAllParents);
router.get("/load/:student_id", parentController.getParent);
router.get("/total", parentController.getParentTotal);
router.put("/update/:student_id", parentController.updateParent);
router.delete("/delete/:student_id", parentController.deleteParent);

module.exports = router;