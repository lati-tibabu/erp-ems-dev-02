const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

class ClassTeacher extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
ClassTeacher.init(
  {
    class_id: DataTypes.UUID,
    teacher_id: DataTypes.UUID,
  },
  {
    sequelize,
    modelName: "ClassTeacher",
  }
);

module.exports = ClassTeacher;
