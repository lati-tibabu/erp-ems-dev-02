const Address = require("../models/address");
const Class = require("../models/class");
const Contact = require("../models/contact");
const Role = require("../models/role");
const Student = require("../models/student");
const User = require("../models/user");

const { Op } = require('sequelize');
const userCredentials = require("../models/usercredentials");

const createStudent = async(studentInfo) => {
    return await Student.create(studentInfo);
};

const getAllStudents = async(page, limit) => {
    return await Student.findAll({
        offset: (page - 1) * limit,
        limit: limit,
    });
};

// const getAllStudentsBySchool = async(schoolID) => {
//     return await Student.findAll({
//         where: {
//             school_id: schoolID
//         }
//     });
// };
const getAllStudentsBySchool = async(schoolID) => {
    return await Student.findAll({
        where: {
            school_id: schoolID
        },
        include: [{
            model: User,
            as: 'user',
            include: [{
                    model: Address,
                    as: 'Address',
                    attributes: ['city', 'subcity', 'woreda', 'kebele']
                },
                {
                    model: Role,
                    as: 'Role',
                    attributes: ['role_name', 'role_description']
                },
                {
                    model: userCredentials,
                    as: 'userCredential',
                    attributes: ['username', 'password']
                }
            ],
            attributes: [
                'username', 'first_name', 'middle_name', 'last_name',
                'date_of_birth', 'gender', 'email', 'house_number',
                'nationality', 'profile_photo'
            ]
        }, {
            model: Class,
            as: 'Class',
            attributes: ['class_name', 'class_grade', 'section_name'],
        }]
    });
};

// const getAllStudentsByGender = async(schoolID, gender) => {
//     return await Student.findAll({
//         where: {
//             school_id: schoolID,
//             student_gender: gender
//         }
//     });
// };

const getAllStudentsByGender = async(schoolID, gender) => {
    return await Student.findAll({
        where: {
            school_id: schoolID,
            student_gender: gender
        },
        include: [{
            model: User,
            as: 'user',
            include: [{
                    model: Address,
                    as: 'Address',
                    attributes: ['city', 'subcity', 'woreda', 'kebele']
                },
                {
                    model: Role,
                    as: 'Role',
                    attributes: ['role_name', 'role_description']
                },
                {
                    model: userCredentials,
                    as: 'userCredential',
                    attributes: ['username', 'password']
                }
            ],
            attributes: [
                'username', 'first_name', 'middle_name', 'last_name',
                'date_of_birth', 'gender', 'email', 'house_number',
                'nationality', 'profile_photo'
            ]
        }, {
            model: Class,
            as: 'Class',
            attributes: ['class_name', 'class_grade', 'section_name'],
        }]
    });
};

// const getAllStudentsByClass = async(schoolID, classID) => {
//     return await Student.findAll({
//         where: {
//             school_id: schoolID,
//             class_id: classID
//         }
//     });
// };
const getAllStudentsByClass = async(schoolID, classID) => {
    return await Student.findAll({
        where: {
            school_id: schoolID,
            class_id: classID
        },
        include: [{
            model: User,
            as: 'user',
            include: [{
                    model: Address,
                    as: 'Address',
                    attributes: ['city', 'subcity', 'woreda', 'kebele']
                },
                {
                    model: Role,
                    as: 'Role',
                    attributes: ['role_name', 'role_description']
                },
                {
                    model: userCredentials,
                    as: 'userCredential',
                    attributes: ['username', 'password']
                }
            ],
            attributes: [
                'username', 'first_name', 'middle_name', 'last_name',
                'date_of_birth', 'gender', 'email', 'house_number',
                'nationality', 'profile_photo'
            ]
        }, {
            model: Class,
            as: 'Class',
            attributes: ['class_name', 'class_grade', 'section_name'],
        }]
    });
};

const getAllStudentsIdByClass = async(schoolID, classID) => {
    return await Student.findAll({
        where: {
            school_id: schoolID,
            class_id: classID
        },
        attributes: ['student_id']
    });
}


// const getAllStudentsByGrade = async(schoolID, grade) => {
//     return await Student.findAll({
//         where: {
//             school_id: schoolID,
//             grade_level: grade
//         }
//     });
// }

const getAllStudentsByGrade = async(schoolID, grade) => {
    return await Student.findAll({
        where: {
            school_id: schoolID,
            grade_level: grade
        },
        include: [{
            model: User,
            as: 'user',
            include: [{
                    model: Address,
                    as: 'Address',
                    attributes: ['city', 'subcity', 'woreda', 'kebele']
                },
                {
                    model: Role,
                    as: 'Role',
                    attributes: ['role_name', 'role_description']
                },
                {
                    model: userCredentials,
                    as: 'userCredential',
                    attributes: ['username', 'password']
                }
            ],
            attributes: [
                'username', 'first_name', 'middle_name', 'last_name',
                'date_of_birth', 'gender', 'email', 'house_number',
                'nationality', 'profile_photo'
            ]
        }, {
            model: Class,
            as: 'Class',
            attributes: ['class_name', 'class_grade', 'section_name'],
        }]
    });
};

const getStudent = async(studentID) => {
    return await Student.findByPk(studentID);
};

const getStudentByUserId = async(userID) => {
    return await Student.findOne({
        where: {
            user_id: userID
        },
        include: [{
            model: User,
            as: 'user',
            include: [{
                    model: Address,
                    as: 'Address',
                    attributes: ['city', 'subcity', 'woreda', 'kebele']
                },
                {
                    model: Role,
                    as: 'Role',
                    attributes: ['role_name', 'role_description']
                },
                {
                    model: userCredentials,
                    as: 'userCredential',
                    attributes: ['username', 'password']
                }
            ],
            attributes: [
                'username', 'first_name', 'middle_name', 'last_name',
                'date_of_birth', 'gender', 'email', 'house_number',
                'nationality', 'profile_photo'
            ]
        }, {
            model: Class,
            as: 'Class',
            attributes: ['class_name', 'class_grade', 'section_name'],
        }]
    })
}

const getStudentTotal = async() => {
    return await Student.count();
}

// const searchStudents = async(query, schoolId) => {
//     return await Student.findAll({
//         include: [{
//             model: User, // Search in the User model
//             as: 'user',
//             attributes: ['first_name', 'middle_name', 'last_name', 'email'],
//             where: {
//                 [Op.or]: [{
//                         first_name: {
//                             [Op.like]: `%${query}%`
//                         }
//                     },
//                     {
//                         middle_name: {
//                             [Op.like]: `%${query}%`
//                         }
//                     },
//                     {
//                         last_name: {
//                             [Op.like]: `%${query}%`
//                         }
//                     },
//                     {
//                         email: {
//                             [Op.like]: `%${query}%`
//                         }
//                     },
//                 ]
//             },
//             required: true // Allow students without a matching user
//         }],
//         where: {
//             school_id: schoolId,
//         }
//     });
// };

const searchStudents = async (query, schoolId) => {
    return await Student.findAll({
      where: {
        school_id: schoolId,
      },
      include: [{
        model: User,
        as: 'user',
        attributes: [
          'username', 'first_name', 'middle_name', 'last_name',
          'date_of_birth', 'gender', 'email', 'house_number',
          'nationality', 'profile_photo' // Include desired user attributes
        ],
        where: {
          [Op.or]: [
            {
              first_name: {
                [Op.like]: `%${query}%` // Correctly use template literals
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
        include: [
          {
            model: Address,
            as: 'Address',
            attributes: ['city', 'subcity', 'woreda', 'kebele']
          },
          {
            model: Role,
            as: 'Role',
            attributes: ['role_name', 'role_description']
          },
          {
            model: userCredentials, // Assuming this is your model name
            as: 'userCredential',
            attributes: ['username', 'password']
          },
        ]
      },
      {
        model: Class,
        as: 'Class',
        attributes: ['class_name', 'class_grade', 'section_name'],
      }
    ]});
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
                    as: 'Address',
                    attributes: ['city', 'subcity', 'woreda', 'kebele']
                },
                {
                    model: Role,
                    as: 'Role',
                    attributes: ['role_name', 'role_description']
                },
                {
                    model: userCredentials,
                    as: 'userCredential',
                    attributes: ['username', 'password']
                }
            ],
            attributes: [
                'username', 'first_name', 'middle_name', 'last_name',
                'date_of_birth', 'gender', 'email', 'house_number',
                'nationality', 'profile_photo'
            ]
        }, {
            model: Class,
            as: 'Class',
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
    getAllStudentsIdByClass,
    getAllStudentsByGrade,
    getStudent,
    searchStudents,
    getStudentByUserId,
    getStudentTotal,
    updateStudent,
    deleteStudent,
    getStudentData
};