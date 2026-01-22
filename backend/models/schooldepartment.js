const sequelize = require("../config/database");
const { DataTypes, Model } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
class SchoolDepartment extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
SchoolDepartment.init(
  {
    department_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Departments",
        key: "department_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    school_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Schools",
        key: "school_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "SchoolDepartment",
  }
);
// return SchoolDepartment;
// };

module.exports = SchoolDepartment;
