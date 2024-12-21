const { Sequelize } = require("sequelize");
const config = require("../config/config.json");
require("dotenv").config();

const env = "development2";  // Use 'development2' for remote connection
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    ssl: dbConfig.ssl, // Ensure SSL is true as per your config
    dialectOptions: {
      ssl: dbConfig.ssl ? {
        require: true, // This ensures SSL is used
        rejectUnauthorized: false, // Use this if you want to ignore certificate validation (for development)
      } : undefined,
    }
  }
);

module.exports = sequelize;
