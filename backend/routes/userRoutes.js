const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/create", userController.createUser);
router.get("/load", userController.getAllUsers);
router.get("/load/:user_id", userController.getUser);
router.put("/update/:user_id", userController.updateUser);
router.delete("/delete/:user_id", userController.deleteUser);

module.exports = router;
