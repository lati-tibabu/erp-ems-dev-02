const Teacher = require("../models/teacher");

const createTeacher = async(teacherInfo) => {
    return await Teacher.create(teacherInfo);
};

const getAllTeachers = async(page, limit) => {
    return await Teacher.findAndCountAll({
        offset: (page - 1) * limit,
        limit: limit,
    });
};

const getAllTeachersBySchool = async(schoolID) => {
    return await Teacher.findAll({
        where: {
            school_id: schoolID
        }
    });
}


const getTeacher = async(teacherID) => {
    return await Teacher.findByPk(teacherID);
};

const getTeacherByUserId = async(userID) => {
    return await Teacher.findOne({ where: { user_id: userID } })
}
const getTeacherTotal = async() => {
    return await Teacher.count();
}


const updateTeacher = async(teacherID, teacherInfo) => {
    const teacher = await Teacher.findByPk(teacherID);
    if (teacher) {
        await teacher.update(teacherInfo);
    }
    return teacher;
};

const deleteTeacher = async(teacherID) => {
    const teacher = await Teacher.findByPk(teacherID);
    if (teacher) {
        await teacher.destroy();
    }
    return teacher;
};

module.exports = {
    createTeacher,
    getAllTeachers,
    getAllTeachersBySchool,
    getTeacher,
    getTeacherByUserId,
    getTeacherTotal,
    updateTeacher,
    deleteTeacher,
};