const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

const User = require("./user");
const School = require("./school");
const ClassModel = require("./class");

class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        Teacher.belongsTo(models.User, { foreignKey: "user_id", unique: true });
        // Teacher.belongsTo(School, { foreignKey: "school_id", unique: true });
        // Teacher.belongsTo(models.Department, { foreignKey: 'department_id' });
        Teacher.belongsTo(models.School, { foreignKey: "school_id" });
        Teacher.belongsToMany(models.Class, {
            through: "TeacherClass",
            foreignKey: "teacher_id",
            otherKey: "class_id",
        });

        Teacher.belongsToMany(models.Course, {
            through: "TeacherCourse",
            foreignKey: "teacher_id",
            otherKey: "course_id",
        });
    }
}
Teacher.init({
    teacher_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Users",
            key: "user_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        unique: true,
    },
    hire_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // department_id: {
    //     type: DataTypes.UUID,
    //     allowNull: true,
    //     references: {
    //         model: "Departments",
    //         key: "department_id",
    //     },
    //     onDelete: "CASCADE",
    //     onUpdate: "CASCADE",
    //     unique: true,
    // },
    qualifications: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    specialization: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    employee_number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    office_location: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    salary: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    contract_type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    photo_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    joining_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    last_evaluation_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    professional_development: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    teaching_schedule: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    additional_roles: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    is_classroom_teacher: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    access_level: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    education_level: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    years_of_experience: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    school_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: "Schools",
            key: "school_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
}, {
    sequelize,
    modelName: "Teacher",
});

module.exports = Teacher;