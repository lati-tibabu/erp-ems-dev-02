const Address = require("../models/address");
const Class = require("../models/class");
const Contact = require("../models/contact");
const Role = require("../models/role");
const Student = require("../models/student");
const User = require("../models/user");

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

const getAllStudentsByGrade = async(schoolID, grade) => {
    return await Student.findAll({
        where: {
            school_id: schoolID,
            grade_level: grade
        }
    });
}

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

const getStudentData = async(studentID) => {
    const student = await Student.findOne({
        where: { student_id: studentID },
        include: [{
            model: User,
            as: 'user',
            include: [{
                    model: Address,
                    as: 'address',
                    attributes: ['city', 'subcity', 'woreda', 'kebele']
                },
                {
                    model: Role,
                    as: 'role',
                    attributes: ['role_name', 'role_description']
                }
            ],
            attributes: [
                'username', 'first_name', 'middle_name', 'last_name',
                'date_of_birth', 'gender', 'email', 'house_number',
                'nationality', 'profile_photo'
            ]
        }, {
            model: Class,
            as: 'class',
            attributes: ['class_name', 'class_grade', 'section_name'],
        }]
    })
    return student;
}

module.exports = {
    createStudent,
    getAllStudents,
    getAllStudentsBySchool,
    getAllStudentsByGender,
    getAllStudentsByClass,
    getAllStudentsByGrade,
    getStudent,
    updateStudent,
    deleteStudent,
    getStudentData
};