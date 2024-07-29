const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

class ParentStudentRelationship extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
ParentStudentRelationship.init(
  {
    student_id: DataTypes.UUID,
    parent_id: DataTypes.UUID,
    relationship: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "ParentStudentRelationship",
  }
);

module.exports = ParentStudentRelationship;
