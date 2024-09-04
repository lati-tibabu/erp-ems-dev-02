const sequelize = require("../config/database");
const { DataTypes, ENUM, Model } = require("sequelize");

const User = require("./user");

const SchoolParent = require("./schoolparent");
const School = require("./school");
const Student = require("./student");

class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        Parent.belongsTo(models.User, { foreignKey: "user_id", unique: true });
        Parent.belongsToMany(models.School, {
            through: "SchoolParent",
            foreignKey: "parent_id",
            otherKey: "school_id",
        });
        Parent.belongsToMany(models.Student, {
            through: "ParentStudent",
            foreignKey: "parent_id",
            otherKey: "student_id",
        });
    }
}
Parent.init({
    parent_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Users",
            key: "user_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        unique: true,
    },
    school_id: {
        type: DataTypes.UUID,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: "Parent",
});

module.exports = Parent;