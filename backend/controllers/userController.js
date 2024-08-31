const userServices = require("../services/userServices");
// import bcrypt, { genSalt } from "bcrypt";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const nodemailer = require('nodemailer');
const axios = require('axios');

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


// const createUser = async(req, res) => {
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const userData = {
//             ...req.body,
//             username: req.body.username.toLowerCase(),
//             password: await bcrypt.hash(req.body.password, salt),
//         };

//         const user = await userServices.createUser(userData);

//         // Fetch the role name using axios or another HTTP library
//         const response = await axios.get(`http://localhost:3060/api/role/load/${userData.role_id}`);
//         const role_name = response.data.role_name;

//         if (user) {
//             if (req.body.email != null) {
//                 const transporter = nodemailer.createTransport({
//                     service: 'gmail',
//                     auth: {
//                         user: process.env.EMAIL_USER || 'flexidon3@gmail.com', // Store in environment variable
//                         pass: process.env.EMAIL_PASS || 'vsai cftg meju vhht', // Store in environment variable
//                     }
//                 });

//                 const mailOptions = {
//                     from: process.env.EMAIL_USER || 'flexidon3@gmail.com',
//                     to: userData.email,
//                     subject: 'Your Account Has Been Created',
//                     html: `
//                         <p>Dear ${userData.first_name} ${userData.middle_name} ${userData.last_name},</p>
//                         <p>Your account has been created successfully with role ${role_name}.</p>
//                         <p>Please keep this information secure and change your password after your first login.</p>
//                         <p>Best regards,<br><strong>SchoolStream</strong></p>
//                     `
//                 };

//                 transporter.sendMail(mailOptions, function(error, info) {
//                     if (error) {
//                         console.error(error);
//                     } else {
//                         console.log("Email sent: " + info.response);

//                     }
//                 })
//             }

//             res.status(201).json(user);
//         } else {
//             res.status(500).json({ message: "User creation failed" });
//         }
//     } catch (error) {
//         console.error("Error: ", error);
//         res.status(500).json({ message: error.message });
//     }
// };

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

const getUserByUname = async(req, res) => {
    try {
        const user = await userServices.getUserByUname(req.params.username);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async(req, res) => {
    try {
        const user = await userServices.updateUser(req.params.user_id, req.body);

        if (user) {
            res.status(200).json(user);
            // res.json({ message: "User updated" });
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

// const loginUser = async (req, res) => {
//   try {
//     const user = await userServices.loginUser(req.body.username);

//     if (!user) {
//       res.status(404).json({ message: "User not found" });
//     } else {
//       const password_valid = await bcrypt.compare(
//         req.body.password,
//         user.password
//       );
//       if (password_valid) {
//         // res.json({ message: "Login successful" });
//         const token = jwt.sign(
//           {
//             id: user.user_id,
//             username: user.username,
//             role: user.role_id,
//           },
//           JWT_SECRET,
//           { expiresIn: 100 }
//         );

//         res.json({ token });
//       } else {
//         res.status(401).json({ message: "Invalid password" });
//       }
//     }
//   } catch (err) {
//     console.error("Error: ", err);
//   }
// };

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
                const token = jwt.sign({
                        id: user.user_id,
                        username: user.username,
                        role: user.role_id,
                    },
                    JWT_SECRET, { expiresIn: "1h" }
                );

                res.json({
                    message: "Login successful",
                    token,
                    user: {
                        username: user.username,
                        role: user.role_id,
                    },
                });
            } else {
                res.status(401).json({ message: "Invalid password" });
            }
        }
    } catch (err) {
        console.error("Error: ", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

const verifyUser = async(req, res) => {
    try {
        const grant = true;
        res.json({ grant });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    getUserByUname,
    updateUser,
    deleteUser,
    loginUser,
    verifyUser,
};