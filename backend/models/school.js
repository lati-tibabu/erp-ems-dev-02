const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    established_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: ENUM("Private", "Public"),
      allowNull: true,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    school_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    affiliation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    medium_of_instruction: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    school_level: {
      type: ENUM("Elementary", "Middle", "High"),
      allowNull: true,
    },
    total_students: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total_teachers: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    campus_area: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    facilities: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    number_of_classrooms: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    number_of_labs: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    annual_budget: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    school_motto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    school_logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    language_offerings: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    transport_facility: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    hostel_facility: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    emergency_contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    health_services: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    school_manager: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accreditation_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sponsorship_details: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    annual_tuition_fee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    student_gender_ratio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teacher_student_ratio: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    special_programs: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    accessibility_features: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "School",
  }
);

module.exports = School;
