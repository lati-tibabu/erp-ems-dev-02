const sequelize = require("../config/database");
const { DataTypes, Model } = require("sequelize");

const User = require("./user");
const School = require("./school");

class Contact extends Model {
    static associate(models) {
        Contact.belongsTo(models.User, { foreignKey: "user_id" });
        Contact.belongsTo(models.School, { foreignKey: "school_id" });
    }
}

Contact.init({
    contact_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    relationship: {
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
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    school_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: "Schools",
            key: "school_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
}, {
    sequelize,
    modelName: "Contact",
    validate: {
        onlyOneUser() {
            if (
                (this.user_id && this.school_id) ||
                (!this.user_id && !this.school_id)
            ) {
                throw new Error("Contact can only belong to either school or user!");
            }
        },
    },
});

module.exports = Contact;