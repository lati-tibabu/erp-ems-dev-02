const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

router.post("/create", addressController.createAddress);
router.get("/load", addressController.getAllAddress);
router.get("/load/:address_id", addressController.getAddress);
router.put("/update/:address_id", addressController.updateAddress);
router.delete("/delete/:address_id", addressController.deleteAddress);

module.exports = router;
