const Address = require("../models/address");
const Class = require("../models/class");
const Contact = require("../models/contact");
const Role = require("../models/role");
const Student = require("../models/student");
const User = require("../models/user");

const { Op } = require('sequelize');

// import { Op } from('sequelize');

const createStudent = async(studentInfo) => {
    return await Student.create(studentInfo);
};

const getAllStudents = async(page, limit) => {
    return await Student.findAll({
        offset: (page - 1) * limit,
        limit: limit,
    });
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

const getStudentByUserId = async(userID) => {
    return await Student.findOne({ where: { user_id: userID } })
}

const getStudentTotal = async() => {
    return await Student.count();
}

const searchStudents = async(query, schoolId) => {
    return await Student.findAll({
        include: [{
            model: User, // Search in the User model
            as: 'user',
            attributes: ['first_name', 'middle_name', 'last_name', 'email'],
            where: {
                [Op.or]: [{
                        first_name: {
                            [Op.like]: `%${query}%`
                        }
                    },
                    {
                        middle_name: {
                            [Op.like]: `%${query}%`
                        }
                    },
                    {
                        last_name: {
                            [Op.like]: `%${query}%`
                        }
                    },
                    {
                        email: {
                            [Op.like]: `%${query}%`
                        }
                    },
                ]
            },
            required: true // Allow students without a matching user
        }],
        where: {
            school_id: schoolId,
        }
        // where: {
        //     [Op.or]: [{
        //             student_id: {
        //                 [Op.like]: `%${query}%`
        //             }
        //         },
        //         {
        //             id_number: {
        //                 [Op.like]: `%${query}%`
        //             }
        //         },
        //         {
        //             admission_number: {
        //                 [Op.like]: `%${query}%`
        //             }
        //         },
        //     ]
        // }
    });
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
    searchStudents,
    getStudentByUserId,
    getStudentTotal,
    updateStudent,
    deleteStudent,
    getStudentData
};