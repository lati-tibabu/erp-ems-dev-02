const express = require("express");
const router = express.Router();
const userCredentialsController = require("../controllers/userCredentialsController");

router.post("/create", userCredentialsController.createCredentials);
router.get("/load", userCredentialsController.getAllCredentials);
router.get("/load/:credential_id", userCredentialsController.getCredentials);
router.get("/loadu/:user_id", userCredentialsController.getCredentialsByUser);
router.put("update/:credential_id", userCredentialsController.updateCredentials);
router.delete("delete/:credential_id", userCredentialsController.deleteCredentials);

module.exports = router;