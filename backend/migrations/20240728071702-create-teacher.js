'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Teachers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.UUID
            },
            hire_date: {
                type: Sequelize.DATE
            },
            position: {
                type: Sequelize.STRING
            },
            department_id: {
                type: Sequelize.UUID
            },
            qualifications: {
                type: Sequelize.STRING
            },
            specialization: {
                type: Sequelize.STRING
            },
            employee_number: {
                type: Sequelize.STRING
            },
            office_location: {
                type: Sequelize.STRING
            },
            salary: {
                type: Sequelize.DECIMAL
            },
            contract_type: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
            },
            photo_url: {
                type: Sequelize.STRING
            },
            joining_date: {
                type: Sequelize.DATE
            },
            last_evaluation_date: {
                type: Sequelize.DATE
            },
            professional_development: {
                type: Sequelize.STRING
            },
            teaching_schedule: {
                type: Sequelize.STRING
            },
            additional_roles: {
                type: Sequelize.STRING
            },
            is_classroom_teacher: {
                type: Sequelize.BOOLEAN
            },
            access_level: {
                type: Sequelize.STRING
            },
            education_level: {
                type: Sequelize.STRING
            },
            years_of_experience: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Teachers');
    }
};