const sequelize = require("../config/database");
const { DataTypes, Model } = require("sequelize");

const User = require("./user");

class Role extends Model {
    static associate(models) {
        Role.hasMany(models.User, { foreignKey: "role_id" });
    }
}

Role.init({
    role_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    role_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    role_description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: "Role",
});

module.exports = Role;