const express = require("express");
const app = express();
const schoolRoutes = require("./routes/schoolRoutes");
const sequelize = require("./config/database");
const Users = require("./models/users");
const cors = require("cors");
// const { json } = require("sequelize");

app.use(express.json());

app.use(cors()); // Use this after the variable declaration
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

module.exports = app;
