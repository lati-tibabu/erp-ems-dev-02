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

const assignAssesmentToStudents = async (assesmentId, studentsId) => {
  const assesmentObj = await Assesment.findByPk(assesmentId);
  if (!assesmentObj) {
    throw new Error("Assesment not found");
  }

  // Use map to create an array of promises, each resolving to a message
  const assignmentResults = await Promise.all(
    studentsId.map(async (studentId) => {
      try {
        const studentObj = await Student.findByPk(studentId.student_id);
        if (!studentObj) {
          throw new Error(`Student with ID ${studentId.student_id} not found`);
        }
        await studentObj.addAssesment(assesmentObj);
        return `Assesment successfully assigned to student with ID ${studentId.student_id}`;
      } catch (error) {
        return `Error assigning assessment to student with ID ${studentId.student_id}: ${error.message}`;
      }
    })
  );

  // Return the array of messages
  return assignmentResults;
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
    assignAssesmentToStudents,
    getAllAssesmentForStudent,
    removeAssesmentFromStudent,
    addMarkForStudent
};