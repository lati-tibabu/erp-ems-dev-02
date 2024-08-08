const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController");
const authToken = require("../middlewares/auth-token");

router.post("/create", classController.createClass);
router.get("/load", classController.getAllClasses);
router.get("/load/:class_id", classController.getClass);
router.put("/update/:class_id", classController.updateClass);
router.delete("/delete/:class_id", classController.deleteClass);

module.exports = router;
