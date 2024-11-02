const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

class ParentStudent extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
ParentStudent.init(
  {
    student_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Students",
        key: "student_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    parent_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Parents",
        key: "parent_id",
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
    modelName: "ParentStudent",
  }
);

module.exports = ParentStudent;
