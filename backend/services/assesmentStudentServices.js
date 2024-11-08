//services
const Assesment = require("../models/assesment");
const Student = require("../models/student");
const AssesmentStudent = require("../models/assesment_student");

const assignAssesmentToStudent = async(assesmentId, studentId) => {
    const assesmentObj = await Assesment.findByPk(assesmentId);
    const studentObj = await Student.findByPk(studentId);

    if (!assesmentObj || !studentObj) {
        throw new Error ("Assesment or Student not found");
    }

    await studentObj.addAssesment(assesmentObj);
    return {
        message: "Assesment succesfully assigned to student"
    };
};

const getAllAssesmentForStudent = async(studentId) => {
    const studentObj = await Student.findByPk(studentId, {
        include: Assesment
    });

    if (!studentObj) {
        throw new Error("Student not found");
    }
    return studentObj.Assesments;
};

const removeAssesmentFromStudent = async(assesmentId, studentId) => {
    const assesmentObj = await Assesment.findByPk(assesmentId);
    const studentObj = await Student.findByPk(studentId);

    if (!assesmentObj || !studentObj) {
        throw new Error ("Assesment or Student not found");
    }

    await studentObj.removeAssesment(assesmentObj);
    return {message: "Assesment removed from student"};
};

const addMarkForStudent = async(assesmentId, studentId, markInfo) => {
    const assesmentStudentObj = await AssesmentStudent.findOne({where: {student_id:studentId, assesment_id: assesmentId}});
    if(assesmentStudentObj) {
        await assesmentStudentObj.update(markInfo);
    } 
    return assesmentStudentObj;
}

module.exports = {
    assignAssesmentToStudent,
    getAllAssesmentForStudent,
    removeAssesmentFromStudent,
    addMarkForStudent
};