    const sequelize = require("../config/database");
    const { DataTypes, ENUM, Model } = require("sequelize");

    // const Administrator = require("./administrator");
    // const Principal = require("./principal");
    // const Teacher = require("./teacher");
    // const Student = require("./student");
    // const Parent = require("./parent");

    // const Address = require("./address");
    // const Contact = require("./contact");
    // const Role = require("./role");

    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasOne(models.Administrator, { foreignKey: "user_id" });
            User.hasOne(models.Principal, { foreignKey: "user_id" });
            User.hasOne(models.Teacher, { foreignKey: "user_id" });
            User.hasOne(models.Student, { foreignKey: 'user_id', as: 'student' });
            User.hasOne(models.Parent, { foreignKey: "user_id" });
            User.hasOne(models.userCredentials, { foreignKey: "user_id" });

            User.belongsTo(models.Address, { foreignKey: "address_id" });
            User.hasMany(models.Contact, { foreignKey: "user_id" });
            User.belongsTo(models.Role, { foreignKey: "role_id" });
        }
    }
    User.init({
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        middle_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date_of_birth: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        house_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        profile_photo: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        },
        address_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "Addresses",
                key: "address_id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        role_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "Roles",
                key: "role_id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
    }, {
        sequelize,
        modelName: "User",
    });

    module.exports = User;