const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

class Student extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Student.init(
  {
    student_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "Users",
        key: "user_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    enrollment_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    grade_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    class_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    medical_conditions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    admission_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    language_proficiency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    extracurricular_activities: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    health_insurance: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    previous_school: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    past_achievements: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hobbies: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of_leaving: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    transfer_reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of_admission: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    special_needs: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    school_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Student",
  }
);

module.exports = Student;
