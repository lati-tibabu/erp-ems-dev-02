const express = require("express");
const app = express();
const schoolRoutes = require("./routes/schoolRoutes");
const userRoutes = require("./routes/userRoute");
const sequelize = require("./config/database");

// const UserModel = require("./models/user");
// const TeacherModel = require("./models/teacher");
// const StudentModel = require("./models/student");
// const ParentModel = require("./models/parent");
// const SchoolModel = require("./models/school");
// const AddressModel = require("./models/address");
// const RoleModel = require("./models/role");
// const ParentStudentModel = require("./models/parentstudent");
// const ContactModel = require("./models/contact");
// const DepartmentModel = require("./models/department");
// const ClassModel = require("./models/class");
// const UserRoleModel = require("./models/userrole");
// const TeacherClassModel = require("./models/teacherclass");
// const SchoolParentModel = require("./models/schoolparent");
// const SchoolDepartmentModel = require("./models/schooldepertment");

const Address = require("./models/address");
const Administrator = require("./models/administrator");
const Class = require("./models/class");
const Contact = require("./models/contact");
const Department = require("./models/department");
// const Index = require("./models/index");
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
// const UserRole = require("./models/userrole");

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
