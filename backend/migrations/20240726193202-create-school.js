"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Schools", {
      school_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      established_year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM("Private", "Public"),
        allowNull: true,
      },
      district: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      school_code: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      affiliation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      medium_of_instruction: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      school_level: {
        type: Sequelize.ENUM("Elementary", "Middle", "High"),
        allowNull: true,
      },
      total_students: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      total_teachers: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      campus_area: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      facilities: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      number_of_classrooms: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      number_of_labs: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      annual_budget: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      school_motto: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      school_logo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      language_offerings: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      transport_facility: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      hostel_facility: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      emergency_contact: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      health_services: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      school_manager: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      accreditation_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      sponsorship_details: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      annual_tuition_fee: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      student_gender_ratio: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      teacher_student_ratio: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      special_programs: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      accessibility_features: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Schools");
  },
};
