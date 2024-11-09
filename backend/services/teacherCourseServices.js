const Teacher = require("../models/teacher");
const Course = require("../models/course");
const Class = require("../models/class");

const assignTeacherToCourse = async(teacherId, courseId) => {
    const teacherObj = await Teacher.findByPk(teacherId);
    const courseObj = await Course.findByPk(courseId);

    if (!teacherObj || !courseObj) {
        throw new Error("Teacher or Course not found");
    }

    await teacherObj.addCourse(courseObj);
    return { message: "Teacher successfully assigned to course." };
};

const getAllTeachersForCourse = async(courseId) => {
    const courseObj = await Course.findByPk(courseId, {
        include: Teacher
    });

    if (!courseObj) {
        throw new Error("Course not found");
    }

    return courseObj.Teachers;

};

const getAllCoursesForTeacher = async(teacherId) => {
    const teacherObj = await Teacher.findByPk(teacherId, {
        include: Course
    });

    if (!teacherObj) {
        throw new Error("Teacher not found");
    }

    return teacherObj.Courses;
};

const getAllCourseForTeacherByClass = async(teacherId, classId) => {
    const teacherObj = await Teacher.findByPk(teacherId, {
        include: Course.class_id(classId)
    });

    if (!teacherObj) {
        throw new Error("Teacher not found");
    }

    return teacherObj.Courses;
}

const removeCourseFromTeacher = async(teacherId, courseId) => {
    const teacherObj = await Teacher.findByPk(teacherId);
    const courseObj = await Course.findByPk(courseId);

    if (!teacherObj || !courseObj) {
        throw new Error("Teacher or Course not found");
    }

    await teacherObj.removeCourse(courseObj);
    return { message: "Course removed from teacher." };
};

module.exports = {
    assignTeacherToCourse,
    getAllCoursesForTeacher,
    getAllTeachersForCourse,
    removeCourseFromTeacher,
    getAllCourseForTeacherByClass
}