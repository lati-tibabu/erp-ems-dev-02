const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authToken = require("../middlewares/auth-token");

router.post("/create", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/load", userController.getAllUsers);
router.get("/load/:user_id", userController.getUser);
router.put("/update/:user_id", userController.updateUser);
router.delete("/delete/:user_id", userController.deleteUser);

module.exports = router;
