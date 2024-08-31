const Student = require("../models/student");

const createStudent = async(studentInfo) => {
    return await Student.create(studentInfo);
};

const getAllStudents = async() => {
    return await Student.findAll();
};

const getAllStudentsBySchool = async(schoolID) => {
    return await Student.findAll({
        where: {
            school_id: schoolID
        }
    });
};

const getAllStudentsByGender = async(schoolID, gender) => {
    return await Student.findAll({
        where: {
            school_id: schoolID,
            student_gender: gender
        }
    });
};

const getAllStudentsByClass = async(schoolID, classID) => {
    return await Student.findAll({
        where: {
            school_id: schoolID,
            class_id: classID
        }
    });
};

const getStudent = async(studentID) => {
    return await Student.findByPk(studentID);
};

const updateStudent = async(studentID, studentInfo) => {
    const student = await Student.findByPk(studentID);
    if (student) {
        await student.update(studentInfo);
    }
    return student;
};

const deleteStudent = async(studentID) => {
    const student = await Student.findByPk(studentID);
    if (student) {
        await student.destroy();
    }
    return student;
};

module.exports = {
    createStudent,
    getAllStudents,
    getAllStudentsBySchool,
    getAllStudentsByGender,
    getAllStudentsByClass,
    getStudent,
    updateStudent,
    deleteStudent,
};