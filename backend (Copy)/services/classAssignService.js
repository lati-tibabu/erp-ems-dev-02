const Class = require("../models/class");
const Course = require("../models/course");

const assignCourseToClass = async(classId, courseId) => {
    const classObj = await Class.findByPk(classId);
    const courseObj = await Course.findByPk(courseId);

    if (!classObj || !courseObj) {
        throw new Error("Class or Course not found");
    }

    await classObj.addCourse(courseObj);
    return { message: "Course successfully assigned to class." };
};

const getAllCoursesForClass = async(classId) => {
    const classObj = await Class.findByPk(classId, {
        include: Course
    });

    if (!classObj) {
        throw new Error("Class not found");
    }

    return classObj.Courses;
};

const removeCourseFromClass = async(classId, courseId) => {
    const classObj = await Class.findByPk(classId);
    const courseObj = await Course.findByPk(courseId);

    if (!classObj || !courseObj) {
        throw new Error("Class or Course not found");
    }

    await classObj.removeCourse(courseObj);
    return { message: "Course removed from class." };
};

module.exports = {
    assignCourseToClass,
    getAllCoursesForClass,
    removeCourseFromClass,
};