const { Sequelize } = require("sequelize");
const config = require("../config/config.json");
require("dotenv").config();

// const env = "development";
// const env = "development";

// const dbConfig = config[env];

// const sequelize = new Sequelize(
//     dbConfig.database,
//     dbConfig.username,
//     dbConfig.password, {
//         host: dbConfig.host,
//         dialect: dbConfig.dialect,
//     },
// );

// const sequelize = new Sequelize(
//     dbConfig.database,
//     dbConfig.username,
//     dbConfig.password,
//     {
//       host: dbConfig.host,
//       dialect: dbConfig.dialect,
//       port: dbConfig?.port,
//     }
//   );
  

const sequelize = new Sequelize(
  process.env.DB_DATABASE_AI,
  process.env.DB_USERNAME_AI,
  process.env.DB_PASSWORD_AI,
  {
    host: process.env.DB_HOST_AI,
    dialect: process.env.DB_DIALECT_AI,
    port: process.env.DB_PORT_AI,
  }
);

module.exports = sequelize;