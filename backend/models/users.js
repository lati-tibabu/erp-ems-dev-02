const sequelize = require("../config/database");
const { DataTypes, Model } = require("sequelize");
const School = require("./school");
class Users extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // Users.hasMany(models.School, {
    //   foreignKey: "id",
    // });
    // define association here
  }
}
Users.init(
  {
    uname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Users",
  }
);

module.exports;
