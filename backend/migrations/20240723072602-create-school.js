'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      school_id: {
        type: Sequelize.STRING
      },
      school_name: {
        type: Sequelize.STRING
      },
      school_address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      subcity: {
        type: Sequelize.STRING
      },
      woreda: {
        type: Sequelize.STRING
      },
      kebele: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      email_address: {
        type: Sequelize.STRING
      },
      estabilished_year: {
        type: Sequelize.STRING
      },
      school_type: {
        type: Sequelize.STRING
      },
      student_capacity: {
        type: Sequelize.INTEGER
      },
      current_enrollment: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Schools');
  }
};