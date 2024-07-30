const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

const Teacher = require("./teacher");

const School = require("./school");

class Department extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Department.hasMany(Teacher, { foreignKey: "department_id" });
    Department.belongsToMany(School, {
      through: "SchoolDepartment",
      foreignKey: "department_id",
      otherKey: "department_id",
    });
  }
}
Department.init(
  {
    department_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    school_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Department",
  }
);

module.exports = Department;
