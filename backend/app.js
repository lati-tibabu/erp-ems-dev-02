const express = require("express");
const app = express();
const schoolRoutes = require("./routes/schoolRoutes");
const userRoutes = require("./routes/userRoute");
const roleRoutes = require("./routes/roleRoute");
const sequelize = require("./config/database");

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

const cors = require("cors");
const { createRole } = require("./services/roleServices");
// const { json } = require("sequelize");

app.use(express.json());

app.use(cors());
// const syncDB = async() => {
//     await sequelize.sync({ force: true });
// };

app.post("/syncDB", async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    res.json({ message: "Database Synced" });
  } catch (error) {
    res.status(500).send("Error syncing database: " + error.message);
  }
});
app.use("/api/school", schoolRoutes);
app.use("/api/user", userRoutes);
app.use("/api/role", roleRoutes);

module.exports = app;
