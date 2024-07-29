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
    name: DataTypes.STRING,
    address_id: DataTypes.UUID,
    contact_id: DataTypes.UUID,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    established_year: DataTypes.INTEGER,
    type: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN,
    school_code: DataTypes.STRING,
    affiliation: DataTypes.STRING,
    medium_of_instruction: DataTypes.STRING,
    school_level: DataTypes.STRING,
    total_students: DataTypes.INTEGER,
    total_teachers: DataTypes.INTEGER,
    accreditation_status: DataTypes.STRING,
    campus_area: DataTypes.STRING,
    facilities_number_of_classrooms: DataTypes.INTEGER,
    number_of_labs: DataTypes.INTEGER,
    annual_budget: DataTypes.DECIMAL,
    school_motto: DataTypes.STRING,
    school_logo: DataTypes.STRING,
    school_type: DataTypes.STRING,
    language_offerings: DataTypes.STRING,
    transport_facility: DataTypes.BOOLEAN,
    hostel_facility: DataTypes.BOOLEAN,
    health_services: DataTypes.BOOLEAN,
    school_manager: DataTypes.STRING,
    accreditation_number: DataTypes.STRING,
    sponsorship_details: DataTypes.STRING,
    annual_tuition_fee: DataTypes.DECIMAL,
    student_gender_ratio: DataTypes.STRING,
    teacher_student_ratio: DataTypes.STRING,
    special_programs: DataTypes.STRING,
    accessibility_features: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "School",
  }
);

module.exports = School;
