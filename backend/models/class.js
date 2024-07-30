const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

const School = require("./school");
const Teacher = require("./teacher");
const Student = require("./student");

class Class extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Class.belongsTo(School, { foreignKey: "school_id" });
    Class.belongsToMany(Teacher, {
      through: "TeacherClass",
      foreignKey: "class_id",
      otherKey: "teacher_id",
    });
    Class.hasMany(Student, { foreignKey: "class_id" });
  }
}
Class.init(
  {
    class_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    class_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    class_grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
