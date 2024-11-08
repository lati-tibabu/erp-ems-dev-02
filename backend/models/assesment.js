const sequelize = require('../config/database');
const {DataTypes, Model} = require("sequelize");

class Assesment extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Assesment.belongsTo(models.Class, {foreignKey: "class_id"});
    Assesment.belongsTo(models.Course, {foreignKey: "course_id"});
    Assesment.belongsTo(models.Teacher, {foreignKey: "teacher_id"});
    Assesment.belongsTo(models.School, {foreignKey: "school_id"})

    Assesment.belongsToMany(models.Student, {
      through: models.AssesmentStudent,
      foreignKey: 'assesment_id',
      otherKey: 'student_id'
    });

  }
}
Assesment.init({
  assesment_id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  assesment_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assesment_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "Classes",
      key: "class_id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  course_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "Courses",
      key: "course_id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  school_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "Schools",
      key: "school_id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  teacher_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "Teachers",
      key: "teacher_id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  max_mark: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Assesment',
});

module.exports = Assesment;