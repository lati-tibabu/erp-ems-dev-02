const sequelize = require("../config/database");
const { DataTypes, Model } = require("sequelize");
class School extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

School.init(
  {
    school_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    school_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    school_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subcity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    woreda: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kebele: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    estabilished_year: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    school_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_capacity: DataTypes.INTEGER,
    current_enrollment: DataTypes.INTEGER,
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "School",
  }
);

module.exports = School;
