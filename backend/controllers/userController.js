const userServices = require("../services/userServices");
// import bcrypt, { genSalt } from "bcrypt";
const bcrypt = require("bcrypt");

const createUser = async(req, res) => {
    try {
        const salt = await bcrypt.genSalt(10); // Generate salt asynchronously
        const userData = {
            ...req.body,
            username: req.body.username.toLowerCase(),
            // email: req.body.email.trim(),
            password: await bcrypt.hash(req.body.password, salt),
        };
        const user = await userServices.createUser(userData); // Pass the modified userData
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllUsers = async(req, res) => {
    try {
        const users = await userServices.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUser = async(req, res) => {
    try {
        const user = await userServices.getUser(req.params.user_id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateUser = async(req, res) => {
    try {
        const user = await userServices.updateUser(req.params.user_id, req.body);

        if (user) {
            res.status(200).json(user);
            res.json({ message: "User updated" });
        } else {
            res.json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUser = async(req, res) => {
    try {
        const user = await userServices.deleteUser(req.params.user_id);

        if (!user) {
            res.json({ message: "User not found" });
        } else {
            res.json({ message: "User deleted" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async(req, res) => {
    try {
        const user = await userServices.loginUser(req.body.username);

        if (!user) {
            res.status(404).json({ message: "User not found" });
        } else {
            const password_valid = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (password_valid) {
                res.json({ message: "Login successful" });
            } else {
                res.status(401).json({ message: "Invalid password" });
            }
        }
    } catch (err) {
        console.error("Error: ", err);
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    loginUser,
};