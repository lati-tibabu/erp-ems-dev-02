const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");
const authToken = require("../middlewares/auth-token");
// const authToken = require("../middlewares/auth-token");

router.post("/create", roleController.createRole);
// router.get("/load/", roleController.getAllRole);
router.get("/load/:role_id", roleController.getRole);
router.get("/loadn/:role_name", roleController.getRoleByName);
router.get("/load", roleController.getAllRole);
router.put("/update/:role_id", roleController.updateRole);
router.delete("/delete/:role_id", roleController.deleteRole);

module.exports = router;
