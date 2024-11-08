const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

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
const userCredentialsRoutes = require("./routes/userCredentialsRoutes");
const assesmentStudentRoutes = require("./routes/assesmentStudentRoutes");
const assesmentRoutes = require("./routes/assesmentRouter");

// const User = require('./models/user');

// console.log('User associations: ', User.associations)

// Database connection

const sequelize = require("./config/database");
const db = require("./models");

const User = db.User;
console.log('User associations: ', User.associations)


const authToken = require("./middlewares/auth-token");

// Middlewares
app.use(express.json());
app.use(cors());

// Serve static files from React app
app.use(express.static(path.join(__dirname, 'client/dist')));

// Catch all other routes and return the React app
app.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

//Database-Model Syncronization routes
{
    // Database sync routes
    app.post("/syncDatabase", async(req, res) => {
        try {
            await sequelize.sync({ force: true });
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

    app.post("/syncAssesment", async(req, res)=> {
        try{
            await sequelize.models.Assesment.sync({alter: true});
            res.json({message: "Assesment Model Synced"});
        }catch(error){
            res.status(500).send("Error syncing Assesment Model: " + error.message);
        }
    });
}

// Route middleware
{
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
    app.use("/api/credentials", userCredentialsRoutes);
    app.use("/api/assesment", assesmentRoutes);
    app.use("/api/assesment-student", assesmentStudentRoutes);

}

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/protected-route', authToken, (req, res) => {
    res.json({ message: `Welcome, user!` });
});

module.exports = app;