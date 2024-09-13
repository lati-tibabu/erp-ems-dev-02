const express = require("express");
const app = express();
const cors = require("cors");

// Route importing
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
// const teacherClassRoutes = require("./routes/teacherClassRoutes");
const courseRoutes = require("./routes/courseRoutes");
const classAssignRoutes = require("./routes/classAssignRoutes"); // Class Course Assign Routes
const teacherAssignRoutes = require("./routes/teacherClassRoutes"); // Teacher Class Assign Routes
const teacherCourseRoutes = require("./routes/teacherCourseRoutes");

// Database connection

const sequelize = require("./config/database");
const db = require("./models");

const authToken = require("./middlewares/auth-token");

// Middlewares
app.use(express.json());
app.use(cors());

// Database sync routes
app.post("/syncDatabase", async(req, res) => {
    try {
        await db.sequelize.sync({ force: true });
        res.json({ message: "Database Synced" });
    } catch (error) {
        res.status(500).send("Error syncing database: " + error.message);
    }
});

app.post("/syncDB", async(req, res) => {
    try {
        await sequelize.sync({ alter: true });
        res.json({ message: "Database Synced" });
    } catch (error) {
        res.status(500).send("Error syncing database: " + error.message);
    }
});

app.post("/syncSchool", async(req, res) => {
    try {
        await sequelize.models.School.sync({ alter: true });
        res.json({ message: "School Model Synced" });
    } catch (error) {
        res.status(500).send("Error syncing School model: " + error.message);
    }
});

app.post("/syncPrincipal", async(req, res) => {
    try {
        await sequelize.models.Principal.sync({ alter: true });
        res.json({ message: "Principal Model Synced" });
    } catch (error) {
        res.status(500).send("Error syncing Principal model: " + error.message);
    }
});

app.post("/syncCourse", async(req, res) => {
    try {
        await sequelize.models.Course.sync({ force: true });
        res.json({ message: "Course Model Synced" });
    } catch (error) {
        res.status(500).send("Error syncing Course model: " + error.message);
    }
});

app.post("/syncClass", async(req, res) => {
    try {
        await sequelize.models.Class.sync({ alter: true });
        res.json({ message: "Class Model Synced" });
    } catch (error) {
        res.status(500).send("Error syncing Class model: " + error.message);
    }
});

app.post("/syncStudent", async(req, res) => {
    try {
        await sequelize.models.Student.sync({ alter: true });
        res.json({ message: "Student Model Synced" });
    } catch (error) {
        res.status(500).send("Error syncing Student model: " + error.message);
    }
});

app.post("/syncUser", async(req, res) => {
    try {
        await sequelize.models.User.sync({ alter: true });
        res.json({ message: "User Model Synced" });
    } catch (error) {
        res.status(500).send("Error syncing User model: " + error.message);
    }
});

app.post("/syncTeacher", async(req, res) => {
    try {
        await sequelize.models.Teacher.sync({ alter: true });
        res.json({ message: "Teacher Model Synced" });
    } catch (error) {
        res.status(500).send("Error syncing Teacher model: " + error.message);
    }
});

app.post("/syncCourse", async(req, res) => {
    try {
        await sequelize.models.Course.sync({ alter: true });
        res.json({ message: "Course Model Synced" });
    } catch (error) {
        res.status(500).send("Error syncing Course model: " + error.message);
    }
});

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
app.use("/api/course", courseRoutes);
app.use("/api/assign_course", classAssignRoutes);
app.use("/api/teacher-class", teacherAssignRoutes);
app.use("/api/teacher-course", teacherCourseRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Route for a protected endpoint
app.get('/protected-route', authToken, (req, res) => {
    res.json({ message: `Welcome, user!` });
});

module.exports = app;