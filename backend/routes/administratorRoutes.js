const express = require("express");
const router = express.Router();
const administratorController = require("../controllers/administratorController");

router.post("/create", administratorController.createAdministrator);
router.get("/load", administratorController.getAllAdministrators);
router.get("/load/:admin_id", administratorController.getAdministrator);
router.put("/update/:admin_id", administratorController.updateAdministrator);
router.delete("/delete/:admin_id", administratorController.deleteAdministrator);

module.exports = router;
