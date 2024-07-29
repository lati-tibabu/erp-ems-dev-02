const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

const User = require("./user");

class Administrator extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    Administrator.belongsTo(User, { foreignKey: "user_id" });
    // define association here
  }
}
Administrator.init(
  {
    admin_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "user_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    hire_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    office_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    employment_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    education_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    years_of_experience: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Administrator",
  }
);

module.exports = Administrator;
