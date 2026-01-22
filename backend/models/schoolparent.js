const sequelize = require("../config/database");
const { DataTypes, UUID, Model } = require("sequelize");

const School = require("./school");
const Parent = require("./parent");

// module.exports = (sequelize, DataTypes) => {
class SchoolParent extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
SchoolParent.init(
  {
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
    child_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "SchoolParent",
  }
);
// return SchoolParent;
// };

module.exports = SchoolParent;
