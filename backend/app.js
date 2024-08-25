const express = require("express");
const app = express();
const cors = require("cors");

// route importing
const schoolRoutes = require("./routes/schoolRoutes");
const userRoutes = require("./routes/userRoutes");
const roleRoutes = require("./routes/roleRoutes");
const addressRoutes = require("./routes/addressRoutes");
const administratorRoutes = require("./routes/administratorRoutes");
const classRoutes = require("./routes/classRoutes");
const contactRoutes = require("./routes/contactRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const parentRoutes = require("./routes/parentRoutes");
const parentStudentRoutes = require("./routes/parentStudentRoutes");
const principalRoutes = require("./routes/principalRoutes");
const schoolDepartmentRoutes = require("./routes/schoolDepartmentRoutes");
const schoolParentRoutes = require("./routes/schoolParentRoutes");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const teacherClassRoutes = require("./routes/teacherClassRoutes");

const sequelize = require("./config/database");

// model importing
const Address = require("./models/address");
const Administrator = require("./models/administrator");
const Class = require("./models/class");
const Contact = require("./models/contact");
const Department = require("./models/department");
const Parent = require("./models/parent");
const ParentStudent = require("./models/parentstudent");
const Principal = require("./models/principal");
const Role = require("./models/role");
const SchoolDepartment = require("./models/schooldepartment");
const School = require("./models/school");
const SchoolParent = require("./models/schoolparent");
const Student = require("./models/student");
const Teacher = require("./models/teacher");
const TeacherClass = require("./models/teacherclass");
const User = require("./models/user");

const authToken = require("./middlewares/auth-token");
// middle-wares
app.use(express.json());
app.use(cors());

// database sync route
app.post("/syncDB", async(req, res) => {
    try {
        await sequelize.sync({ force: true });
        // await sequelize.sync({ alter: true });
        res.json({ message: "Database Synced" });
    } catch (error) {
        res.status(500).send("Error syncing database: " + error.message);
    }
});

app.post("/syncSchool", async(req, res) => {
    try {
        await sequelize.models.School.sync({ alter: true }); //  { force: true }
        res.json({ message: "School Model Synced" });
    } catch (error) {
        res.status(500).send("Error syncing School model: " + error.message);
    }
});

app.post("/syncPrincipal", async(req, res) => {
    try {
        await sequelize.models.Principal.sync({ alter: true }); // or { force: true }
        res.json({ message: "Principal Model Synced" });
    } catch (error) {
        res.status(500).send("Error syncing Principal model: " + error.message);
    }
});

app.post("/syncClass", async(req, res) => {
    try {
        await sequelize.models.Class.sync({ alter: true }); // or { force: true }
        res.json({ message: "Class Model Synced" });
    } catch (error) {
        res.status(500).send("Error syncing Class model: " + error.message);
    }
});

app.post("/syncTeacher", async(req, res) => {
    try {
        await sequelize.models.Teacher.sync({ alter: true }); // or { force: true }
        res.json({ message: "Teacher Model Synced" });
    } catch (error) {
        res.status(500).send("Error syncing Teacher model: " + error.message);
    }
});

// app.post("/syncUser", async (req, res) => {
//   try {
//     await sequelize.models.user.sync({ alter: true }); // or { force: true } if you want to drop and recreate the table
//     res.json({ message: "User Model Synced" });
//   } catch (error) {
//     res.status(500).send("Error syncing User model: " + error.message);
//   }
// });

// Route middleware
app.use("/api/school", schoolRoutes);
app.use("/api/user", userRoutes);
app.use("/api/role", roleRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/administrator", administratorRoutes);
app.use("/api/class", classRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/department", departmentRoutes);
app.use("/api/parent", parentRoutes);
app.use("/api/parent-student", parentStudentRoutes);
app.use("/api/principal", principalRoutes);
app.use("/api/school-department", schoolDepartmentRoutes);
app.use("/api/school-parent", schoolParentRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/teacher-class", teacherClassRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});


// route for a protected endpoint
app.get('/protected-route', authToken, (req, res) => {
    // Access the user details provided by the authToken middleware
    // const user = req.user;

    // Respond with data or perform actions for the authorized user
    // res.json({ message: `Welcome, ${user.username}!` });
    res.json({ message: `Welcome, user!` });
});

module.exports = app;