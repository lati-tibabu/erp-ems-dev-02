const sequelize = require("../config/database");
const { DataTypes, ENUM, Model, UUIDV4 } = require("sequelize");

const School = require("./school");
const User = require("./user");
const ClassModel = require("./class");

const Parent = require("./parent");
class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        Student.belongsTo(models.School, { foreignKey: "school_id" });
        Student.belongsTo(models.User, { foreignKey: "user_id" });
        Student.belongsTo(models.Class, { foreignKey: "class_id" });
        Student.belongsToMany(models.Parent, {
            through: "ParentStudent",
            foreignKey: "student_id",
            otherKey: "parent_id",
        });
    }
}
Student.init({
    student_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV4,
    },
    student_gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: "Users",
            key: "user_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    },
    id_number: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },

    school_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Schools",
            key: "school_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    enrollment_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },

    grade_level: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    class_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Classes",
            key: "class_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    medical_conditions: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    admission_number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    language_proficiency: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    extracurricular_activities: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    health_insurance: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    previous_school: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    past_achievements: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hobbies: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date_of_leaving: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    transfer_reason: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date_of_admission: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    special_needs: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: "Student",
});

module.exports = Student;