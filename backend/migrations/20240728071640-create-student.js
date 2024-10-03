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
      user_id: {
        type: Sequelize.UUID
      },
      enrollment_date: {
        type: Sequelize.DATE
      },
      grade_level: {
        type: Sequelize.STRING
      },
      class_id: {
        type: Sequelize.UUID
      },
      medical_conditions: {
        type: Sequelize.STRING
      },
      admission_number: {
        type: Sequelize.STRING
      },
      language_proficiency: {
        type: Sequelize.STRING
      },
      extracurricular_activities: {
        type: Sequelize.STRING
      },
      health_insurance: {
        type: Sequelize.STRING
      },
      previous_school: {
        type: Sequelize.STRING
      },
      past_achievements: {
        type: Sequelize.STRING
      },
      hobbies: {
        type: Sequelize.STRING
      },
      date_of_leaving: {
        type: Sequelize.DATE
      },
      transfer_reason: {
        type: Sequelize.STRING
      },
      date_of_admission: {
        type: Sequelize.DATE
      },
      special_needs: {
        type: Sequelize.STRING
      },
      school_id: {
        type: Sequelize.UUID
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