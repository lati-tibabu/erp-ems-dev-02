const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

class Role extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Role.init(
  {
    role_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    role_description: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "Role",
  }
);

module.exports = Role;
