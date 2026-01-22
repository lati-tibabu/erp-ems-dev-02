const sequelize = require("../config/database");
const { DataTypes, Model } = require("sequelize");

const School = require("./school");
const Teacher = require("./teacher");
const Student = require("./student");

class Class extends Model {
    static associate(models) {
        Class.belongsTo(models.School, { foreignKey: "school_id" });
        Class.belongsToMany(models.Teacher, {
            through: "TeacherClass",
            foreignKey: "class_id",
            otherKey: "teacher_id",
        });

        Class.belongsToMany(models.Course, {
            through: "ClassCourse",
            foreignKey: "class_id",
            otherKey: "course_id",
        });
        Class.hasMany(models.Student, { foreignKey: "class_id" });
        Class.hasMany(models.Assesment, { foreignKey: "class_id" })
    }
}

Class.init({
    class_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    class_grade: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    class_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    section_name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    },
    teacher_id: {
        type: DataTypes.UUID,
        allowNull: true,
    },
    school_id: {
        type: DataTypes.UUID,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: "Class",
    indexes: [{
        unique: true,
        fields: ["school_id", "section_name"], // Composite unique constraint
    }, ],
});

module.exports = Class;