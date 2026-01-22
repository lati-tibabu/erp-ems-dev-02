const sequelize = require("../config/database");
const { DataTypes, Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
class TeacherClass extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
TeacherClass.init(
  {
    teacher_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Teachers",
        key: "teacher_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    class_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Classes",
        key: "class_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "TeacherClass",
  }
);
// return TeacherClass;
// };
module.exports = TeacherClass;
