const School = require("../models/school");

const createSchool = async(schoolInfo) => {
    return await School.create(schoolInfo);
};

const createSchools = async(schoolsInfo) => {
    return await Promise.all(schoolsInfo.map((school) => School.create(school)));
};
const getAllSchools = async() => {
    return await School.findAll();
};

const getSchoolsPagination = async(page, limit) => {
    return await School.findAll({
        offset: (page - 1) * limit,
        limit: limit,
    });
};
const getSchoolsPaginationC = async(page, limit) => {
    return await School.findAndCountAll({
        offset: (page - 1) * limit,
        limit: limit,
    });
};

const getActiveSchool = async(page, limit) => {
    return await School.findAndCountAll({
        where: { status: "active" },
        offset: (page - 1) * limit,
        limit: limit,
    });
};

const getPendingSchool = async(page, limit) => {
    return await School.findAndCountAll({
        where: { status: "pending" },
        offset: (page - 1) * limit,
        limit: limit,
    });
};

const getDeletedSchool = async(page, limit) => {
    return await School.findAndCountAll({
        where: { status: "deleted" },
        offset: (page - 1) * limit,
        limit: limit,
    });
};

const getArchivedSchool = async(page, limit) => {
    return await School.findAndCountAll({
        where: { status: "archived" },
        offset: (page - 1) * limit,
        limit: limit,
    });
};
const getSchool = async(schoolID) => {
    return await School.findByPk(schoolID);
};

const updateSchool = async(schoolID, schoolInfo) => {
    const school = await School.findByPk(schoolID);
    if (school) {
        await school.update(schoolInfo);
    }
    return school;
};

const deleteSchool = async(schoolID) => {
    const school = await School.findByPk(schoolID);
    if (school) {
        await school.destroy();
    }
    return school;
};

module.exports = {
    createSchool,
    createSchools,
    getAllSchools,
    getSchoolsPagination,
    getSchoolsPaginationC,
    getActiveSchool,
    getPendingSchool,
    getDeletedSchool,
    getArchivedSchool,
    getSchool,
    updateSchool,
    deleteSchool,
};