const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

const SchoolParent = require("./schoolparent");
const Parent = require("./parent");

const Principal = require("./principal");
const Teacher = require("./teacher");

const Student = require("./student");
const Address = require("./address");
const Contact = require("./contact");

const Department = require("./department");
class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        School.belongsToMany(models.Parent, {
            through: "SchoolParent",
            foreignKey: "school_id",
            otherKey: "parent_id",
        });

        School.hasMany(models.Student, { foreignKey: "school_id" });
        School.belongsTo(models.Address, { foreignKey: "address_id" });
        School.hasMany(models.Contact, { foreignKey: "school_id" });

        School.hasMany(models.Principal, { foreignKey: "school_id" });
        School.hasMany(models.Teacher, { foreignKey: "school_id" });

        School.belongsToMany(models.Department, {
            through: "SchoolDepartment",
            foreignKey: "school_id",
            otherKey: "department_id",
        });

        School.belongsToMany(models.Course, {
            through: "SchoolCourse",
            foreignKey: "school_id",
            otherKey: "course_id",
        });

        School.hasMany(models.Assesment, { foreignKey: 'school_id' });

        // School.hasOne(models.schoolCodeTrack, { foreignKey: 'school_id' });
    }
}
School.init({
    school_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    address_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Addresses",
            key: "address_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    status: {
        type: DataTypes.ENUM("active", "pending", "deleted", "archived"),
        allowNull: false,
        defaultValue: "active",
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    established_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    // school_code: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    school_code: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    affiliation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    medium_of_instruction: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    school_level: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    total_students: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    total_teachers: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    accreditation_status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    campus_area: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    facilities_number_of_classrooms: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    number_of_labs: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    annual_budget: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    school_motto: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    school_logo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    school_type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    language_offerings: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    transport_facility: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    hostel_facility: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    health_services: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    school_manager: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    accreditation_number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sponsorship_details: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    annual_tuition_fee: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    student_gender_ratio: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    teacher_student_ratio: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    special_programs: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    accessibility_features: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    student_id_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 10000,
    }
}, {
    sequelize,
    modelName: "School",
});

module.exports = School;