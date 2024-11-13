const { Sequelize } = require("sequelize");
const config = require("../config/config.json");
require("dotenv").config();

// const env = "development";
const env = "development";

const dbConfig = config[env];

// const sequelize = new Sequelize(
//     dbConfig.database,
//     dbConfig.username,
//     dbConfig.password, {
//         host: dbConfig.host,
//         dialect: dbConfig.dialect,
//     },
// );

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      host: dbConfig.host,
      dialect: dbConfig.dialect,
      port: dbConfig?.port,
    }
  );
  

// const sequelize = new Sequelize(
//   process.env.DB_DATABASE,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//   }
// );

module.exports = sequelize;