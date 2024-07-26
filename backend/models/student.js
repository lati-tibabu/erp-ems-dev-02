'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
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
  Student.init({
    FirstName: DataTypes.STRING,
    MiddleName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    DateOfBirth: DataTypes.DATE,
    Gender: DataTypes.ENUM,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Email: DataTypes.STRING,
    EnrollmentDate: DataTypes.DATE,
    GradeLevel: DataTypes.STRING,
    ClassID: DataTypes.INTEGER,
    ParentGuardianID: DataTypes.INTEGER,
    EmergencyContact: DataTypes.STRING,
    MedicalConditions: DataTypes.TEXT,
    ProfilePhoto: DataTypes.STRING,
    AdmissionNumber: DataTypes.STRING,
    Status: DataTypes.ENUM,
    Nationality: DataTypes.STRING,
    LanguageProficiency: DataTypes.TEXT,
    ExtracurricularActivities: DataTypes.TEXT,
    HealthInsurance: DataTypes.STRING,
    PreviousSchool: DataTypes.STRING,
    PastAchievements: DataTypes.TEXT,
    Hobbies: DataTypes.TEXT,
    DateOfLeaving: DataTypes.DATE,
    TransferReason: DataTypes.TEXT,
    DateOfAdmission: DataTypes.DATE,
    GuardianContact: DataTypes.STRING,
    SpecialNeeds: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};