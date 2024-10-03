const sequelize = require("../config/database");
const { DataTypes, Model } = require("sequelize");

class userCredentials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        userCredentials.belongsTo(models.User, { foreignKey: "user_id" });
    }
}
userCredentials.init({
    credential_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Users",
            key: "user_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'userCredentials',
});

module.exports = userCredentials;