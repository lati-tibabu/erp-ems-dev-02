'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FirstName: {
        type: Sequelize.STRING
      },
      MiddleName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      DateOfBirth: {
        type: Sequelize.DATE
      },
      Gender: {
        type: Sequelize.ENUM
      },
      Address: {
        type: Sequelize.STRING
      },
      City: {
        type: Sequelize.STRING
      },
      State: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      EnrollmentDate: {
        type: Sequelize.DATE
      },
      GradeLevel: {
        type: Sequelize.STRING
      },
      ClassID: {
        type: Sequelize.INTEGER
      },
      ParentGuardianID: {
        type: Sequelize.INTEGER
      },
      EmergencyContact: {
        type: Sequelize.STRING
      },
      MedicalConditions: {
        type: Sequelize.TEXT
      },
      ProfilePhoto: {
        type: Sequelize.STRING
      },
      AdmissionNumber: {
        type: Sequelize.STRING
      },
      Status: {
        type: Sequelize.ENUM
      },
      Nationality: {
        type: Sequelize.STRING
      },
      LanguageProficiency: {
        type: Sequelize.TEXT
      },
      ExtracurricularActivities: {
        type: Sequelize.TEXT
      },
      HealthInsurance: {
        type: Sequelize.STRING
      },
      PreviousSchool: {
        type: Sequelize.STRING
      },
      PastAchievements: {
        type: Sequelize.TEXT
      },
      Hobbies: {
        type: Sequelize.TEXT
      },
      DateOfLeaving: {
        type: Sequelize.DATE
      },
      TransferReason: {
        type: Sequelize.TEXT
      },
      DateOfAdmission: {
        type: Sequelize.DATE
      },
      GuardianContact: {
        type: Sequelize.STRING
      },
      SpecialNeeds: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};