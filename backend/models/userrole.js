const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

class UserRole extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
UserRole.init(
  {
    user_id: DataTypes.UUID,
    role_id: DataTypes.UUID,
  },
  {
    sequelize,
    modelName: "UserRole",
  }
);

module.exports = UserRole;
