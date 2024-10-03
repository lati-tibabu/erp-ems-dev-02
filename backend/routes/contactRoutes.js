const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const authToken = require("../middlewares/auth-token");

router.post("/create", contactController.createContact);
router.get("/load", contactController.getAllContacts);
router.get("/load/:contact_id", contactController.getContact);
router.get("/loadu/:user_id", contactController.getUserContact);
router.put("/update/:contact_id", contactController.updateContact);
router.delete("/delete/:contact_id", contactController.deleteContact);

module.exports = router;