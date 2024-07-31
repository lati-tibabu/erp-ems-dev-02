const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

const SchoolParent = require("./schoolparent");
const Parent = require("./parent");

const Principal = require("./principal");
const Teacher = require("./teacher");

const Student = require("./student");
const Address = require("./address");
const Contact = require("./contact");

const Department = require("./department");
class School extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    School.belongsToMany(Parent, {
      through: "SchoolParent",
      foreignKey: "school_id",
      otherKey: "parent_id",
    });

    School.hasMany(Student, { foreignKey: "school_id" });
    School.belongsTo(Address, { foreignKey: "address_id" });
    School.hasMany(Contact, { foreignKey: "school_id" });

    School.hasMany(Principal, { foreignKey: "school_id" });
    School.hasMany(Teacher, { foreignKey: "school_id" });

    School.belongsToMany(Department, {
      through: "SchoolDepartment",
      foreignKey: "school_id",
      otherKey: "department_id",
    });
  }
}
School.init(
  {
    school_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Addresses",
        key: "address_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    established_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
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
      type: DataTypes.STRING,
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
    accreditation_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    campus_area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facilities_number_of_classrooms: {
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
    school_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    language_offerings: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: true,
    },
    special_programs: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accessibility_features: {
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
