const Teacher = require("../models/teacher");
const Class = require("../models/class");

const assignTeacherToClass = async(teacherId, classId) => {
    const teacherObj = await Teacher.findByPk(teacherId);
    const classObj = await Class.findByPk(classId);

    if (!teacherObj || !classObj) {
        throw new Error('Class or Teacher not found');
    }

    await teacherObj.addClass(classObj);
    return { message: "Class succesfully assigned to teacher succesfully" };
}

const getAllClassForTeacher = async(teacherId) => {
    const teacherObj = await Teacher.findByPk(teacherId, {
        include: Class
    });

    if (!teacherObj) {
        throw new Error("Teacher not found");
    }

    return teacherObj.Classes;
};

const getAllTeacherForClass = async(classId) => {
    const classObj = await Class.findByPk(classId, {
        include: Teacher
    });

    if (!classObj) {
        throw new Error("Class not found");
    }

    return classObj.Teachers;
};

const removeClassFromTeacher = async(teacherId, classId) => {
    const classObj = await Class.findByPk(classId);
    const teacherObj = await Teacher.findByPk(teacherId);

    if (!classObj || !teacherObj) {
        throw new Error("Class or Teacher not found");
    }

    await teacherObj.removeClass(classObj);
    return { message: "Class removed from teacher." };
};

module.exports = {
    assignTeacherToClass,
    getAllClassForTeacher,
    getAllTeacherForClass,
    removeClassFromTeacher
}













// const TeacherClass = require("../models/teacherclass");

// const createTeacherClass = async (teacherClassInfo) => {
//   return await TeacherClass.create(teacherClassInfo);
// };

// const getAllTeacherClasses = async () => {
//   return await TeacherClass.findAll();
// };

// const getTeacherClass = async (teacherClassID) => {
//   return await TeacherClass.findByPk(teacherClassID);
// };

// const updateTeacherClass = async (teacherClassID, teacherClassInfo) => {
//   const teacherClass = await TeacherClass.findByPk(teacherClassID);
//   if (teacherClass) {
//     await teacherClass.update(teacherClassInfo);
//   }
//   return teacherClass;
// };

// const deleteTeacherClass = async (teacherClassID) => {
//   const teacherClass = await TeacherClass.findByPk(teacherClassID);
//   if (teacherClass) {
//     await teacherClass.destroy();
//   }
//   return teacherClass;
// };

// module.exports = {
//   createTeacherClass,
//   getAllTeacherClasses,
//   getTeacherClass,
//   updateTeacherClass,
//   deleteTeacherClass,
// };