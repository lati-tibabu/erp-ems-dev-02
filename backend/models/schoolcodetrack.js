const sequelize = require("../config/database");
const { DataTypes, Model } = require("sequelize");

class schoolCodeTrack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        // schoolCodeTrack.belongsTo(models.School, { foreignKey: "school_id" })
    }
}
schoolCodeTrack.init({
    school_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // autoIncrement: true
    },
    // school_id: {
    //     type: DataTypes.UUID,
    //     allowNull: false,
    //     references: {
    //         model: "Schools",
    //         key: "Schools"
    //     },
    //     onUpdate: "CASCADE",
    //     onDelete: "CASCADE",
    // }
}, {
    sequelize,
    modelName: 'schoolCodeTrack',
});

module.exports = schoolCodeTrack;