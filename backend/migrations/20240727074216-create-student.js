"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Students", {
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      middle_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM("Male", "Female"),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      enrollment_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      grade_level: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      class_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      emergency_contact: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      medical_conditions: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      profile_photo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      admission_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM("Active", "Inactive", "Graduated", "Transferred"),
        allowNull: true,
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      language_proficiency: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      extracurricular_activities: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      health_insurance: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      previous_school: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      past_achievements: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      hobbies: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      date_of_leaving: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      transfer_reason: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      date_of_admission: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      guardian_contact: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      special_needs: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Students");
  },
};
