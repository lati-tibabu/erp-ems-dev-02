const sequelize = require("../config/database");
const { DataTypes, Model } = require("sequelize");


class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        Course.belongsToMany(models.School, {
            through: "SchoolCourse",
            foreignKey: "course_id",
            otherKey: "school_id",
        });

        Course.belongsToMany(models.Class, {
            through: "ClassCourse",
            foreignKey: "course_id",
            otherKey: "class_id",
        });

        Course.belongsToMany(models.Teacher, {
            through: "TeacherCourse",
            foreignKey: "course_id",
            otherKey: "teacher_id",
        });
    }
}
Course.init({
    course_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    course_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    course_grade: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Course',
    indexes: [{
        unique: true,
        fields: ['course_name', 'course_grade'],
    }, ]
});
module.exports = Course;