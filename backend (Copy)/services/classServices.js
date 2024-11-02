const Class = require("../models/class");

const createClass = async(classInfo) => {
    return await Class.create(classInfo);
};

const getAllClasses = async() => {
    return await Class.findAll();
};

const getClassBySchoolID = async(schoolID) => {
    return await Class.findAll({ where: { school_id: schoolID } });
}

const getClass = async(classID) => {
    return await Class.findByPk(classID);
};

const updateClass = async(classID, classInfo) => {
    const classObj = await Class.findByPk(classID);
    if (classObj) {
        await classObj.update(classInfo);
    }
    return classObj;
};

const deleteClass = async(classID) => {
    const classObj = await Class.findByPk(classID);
    if (classObj) {
        await classObj.destroy();
    }
    return classObj;
};

module.exports = {
    createClass,
    getAllClasses,
    getClassBySchoolID,
    getClass,
    updateClass,
    deleteClass,
};