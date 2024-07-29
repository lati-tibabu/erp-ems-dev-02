const express = require("express");
const app = express();
const schoolRoutes = require("./routes/schoolRoutes");
const userRoutes = require("./routes/userRoute");
const sequelize = require("./config/database");

const UserModel = require("./models/user");
const TeacherModel = require("./models/teacher");
const StudentModel = require("./models/student");
const ParentModel = require("./models/parent");
const SchoolModel = require("./models/school");
const AddressModel = require("./models/address");
const RoleModel = require("./models/role");
const ParentStudentRelationshipModel = require("./models/parentstudentrelationship");
const ContactModel = require("./models/contact");
const DepartmentModel = require("./models/department");
const ClassModel = require("./models/class");
const UserRoleModel = require("./models/userrole");
const ClassTeacherModel = require("./models/classteacher");

const cors = require("cors");
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

module.exports = app;
