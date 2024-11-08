const Assesment = require("../models/assesment");

const createAssesment = async (assesmentInfo) => {
    return await Assesment.create(assesmentInfo);
};

const getAllAssesments = async () => {
    return await Assesment.findAll();
};

const getAssesment = async (assesmentID) => {
    return await Assesment.findByPk(assesmentID)
};

const getAssesmentsByTeacherID = async (teacherID) => {
    return await Assesment.findAll( { where: { teacher_id: teacherID } } );
};

const getAssesmentsByStudentID = async (studentID) => {
    return await Assesment.findAll({where: {student_id: studentID}});
};

const getAssesmentsBySchoolID = async (schoolID) => {
    return await Assesment.findAll({where: {school_id: schoolID}});
};
const updateAssesment = async(assesmentID, assesmentInfo) => {
    const assesmentObj = await Assesment.findByPk(assesmentID);
    if (assesmentObj) {
        await assesmentObj.update(assesmentInfo);
    }
    return assesmentObj;
};

const deleteAssesment = async(assesmentID) => {
    const assesmentObj = await Assesment.findByPk(assesmentID);
    if(assesmentObj) {
        await assesmentObj.destroy();
    }
    return assesmentObj;
};

module.exports = {
    createAssesment,
    getAllAssesments,
    getAssesment,
    getAssesmentsByTeacherID,
    getAssesmentsByStudentID,
    getAssesmentsBySchoolID,
    updateAssesment,
    deleteAssesment
}