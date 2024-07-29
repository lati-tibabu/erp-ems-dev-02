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
      name: {
        type: Sequelize.STRING
      },
      address_id: {
        type: Sequelize.UUID
      },
      contact_id: {
        type: Sequelize.UUID
      },
      email: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      established_year: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      is_deleted: {
        type: Sequelize.BOOLEAN
      },
      school_code: {
        type: Sequelize.STRING
      },
      affiliation: {
        type: Sequelize.STRING
      },
      medium_of_instruction: {
        type: Sequelize.STRING
      },
      school_level: {
        type: Sequelize.STRING
      },
      total_students: {
        type: Sequelize.INTEGER
      },
      total_teachers: {
        type: Sequelize.INTEGER
      },
      accreditation_status: {
        type: Sequelize.STRING
      },
      campus_area: {
        type: Sequelize.STRING
      },
      facilities_number_of_classrooms: {
        type: Sequelize.INTEGER
      },
      number_of_labs: {
        type: Sequelize.INTEGER
      },
      annual_budget: {
        type: Sequelize.DECIMAL
      },
      school_motto: {
        type: Sequelize.STRING
      },
      school_logo: {
        type: Sequelize.STRING
      },
      school_type: {
        type: Sequelize.STRING
      },
      language_offerings: {
        type: Sequelize.STRING
      },
      transport_facility: {
        type: Sequelize.BOOLEAN
      },
      hostel_facility: {
        type: Sequelize.BOOLEAN
      },
      health_services: {
        type: Sequelize.BOOLEAN
      },
      school_manager: {
        type: Sequelize.STRING
      },
      accreditation_number: {
        type: Sequelize.STRING
      },
      sponsorship_details: {
        type: Sequelize.STRING
      },
      annual_tuition_fee: {
        type: Sequelize.DECIMAL
      },
      student_gender_ratio: {
        type: Sequelize.STRING
      },
      teacher_student_ratio: {
        type: Sequelize.STRING
      },
      special_programs: {
        type: Sequelize.STRING
      },
      accessibility_features: {
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