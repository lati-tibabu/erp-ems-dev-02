const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

class Address extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Address.init(
  {
    address_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subcity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    woreda: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kebele: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Address",
  }
);

module.exports = Address;
