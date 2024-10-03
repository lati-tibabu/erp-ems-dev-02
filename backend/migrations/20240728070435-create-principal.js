'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Principals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.UUID
      },
      school_id: {
        type: Sequelize.UUID
      },
      role: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.DECIMAL
      },
      experience_years: {
        type: Sequelize.INTEGER
      },
      qualification: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      office_location: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      specialization: {
        type: Sequelize.STRING
      },
      social_media_links: {
        type: Sequelize.STRING
      },
      education_level: {
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
    await queryInterface.dropTable('Principals');
  }
};