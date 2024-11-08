'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('assesments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      assesment_id: {
        type: Sequelize.UUID
      },
      assesment_name: {
        type: Sequelize.STRING
      },
      assesment_type: {
        type: Sequelize.STRING
      },
      class_id: {
        type: Sequelize.UUID
      },
      course_id: {
        type: Sequelize.UUID
      },
      max_mark: {
        type: Sequelize.INTEGER
      },
      status: {
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
    await queryInterface.dropTable('assesments');
  }
};