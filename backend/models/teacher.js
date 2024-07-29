const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

class Teacher extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Teacher.init(
  {
    teacher_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "user_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    hire_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    qualifications: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    employee_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    office_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    contract_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    joining_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    last_evaluation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    professional_development: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teaching_schedule: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    additional_roles: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_classroom_teacher: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    access_level: {
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
    school_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Teacher",
  }
);

module.exports = Teacher;
