const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    ssl: process.env.DB_SSL === "true", // Convert string to boolean
    dialectOptions: {
      ssl: process.env.DB_SSL === "true" ? {
        require: true,
        rejectUnauthorized: false, // Ignore certificate validation for development
      } : undefined,
    },
  }
);

module.exports = sequelize;
