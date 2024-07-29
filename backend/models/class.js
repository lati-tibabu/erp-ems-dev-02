const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

class Class extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Class.init(
  {
    class_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    class_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teacher_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    school_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Class",
  }
);

module.exports = Class;
