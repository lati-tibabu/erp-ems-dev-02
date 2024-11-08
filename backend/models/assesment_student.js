const sequelize = require("../config/database");
const {DataTypes, Model} = require("sequelize");

class AssesmentStudent extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
AssesmentStudent.init({
  assesment_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  student_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  student_mark: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'on_going'
  }
}, {
  sequelize,
  modelName: 'AssesmentStudent',
});

module.exports = AssesmentStudent;