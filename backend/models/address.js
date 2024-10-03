const sequelize = require("../config/database");
const { DataTypes, Model } = require("sequelize");

const User = require("./user");
const School = require("./school");

class Address extends Model {
    static associate(models) {
        Address.hasMany(models.User, { foreignKey: "address_id" });
        Address.hasMany(models.School, { foreignKey: "address_id" });
    }
}

Address.init({
    address_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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
}, {
    sequelize,
    modelName: "Address",
});

module.exports = Address;