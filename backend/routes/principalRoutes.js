const express = require("express");
const router = express.Router();
const principalController = require("../controllers/principalController");

router.post("/create", principalController.createPrincipal);
router.get("/load", principalController.getAllPrincipals);
router.get("/load/:principal_id", principalController.getPrincipal);
router.put("/update/:principal_id", principalController.updatePrincipal);
router.delete("/delete/:principal_id", principalController.deletePrincipal);

module.exports = router;
