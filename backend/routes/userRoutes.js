const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authToken = require("../middlewares/auth-token");

router.post("/create", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/load_", userController.getAllUsers);
router.get("/load", authToken, userController.getAllUsers);
router.get("/loadx", userController.getAllUsers);
router.get("/load/:user_id", authToken, userController.getUser);
router.get("/loadu/:username", userController.getUserByUname);
router.put("/update/:user_id", authToken, userController.updateUser);
router.delete("/delete/:user_id", userController.deleteUser);
// router.get("/verify", authToken, authToken, userController.verifyUser);

module.exports = router;