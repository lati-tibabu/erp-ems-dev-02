"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Teachers", {
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
        type: Sequelize.STRING,
        allowNull: false,
      },
      contact_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      hire_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      position: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      department_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      qualifications: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      specialization: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      employee_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      salary: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      contract_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      emergency_contact: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      photo_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      joining_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      last_evaluation_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      professional_development: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      teaching_schedule: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      additional_roles: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      access_level: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Teachers");
  },
};
