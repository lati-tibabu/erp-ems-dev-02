const Course = require("../models/course");

const createCourse = async(courseInfo) => {
    return await Course.create(courseInfo);
};

const createCourses = async(coursesInfo) => {
    return await Promise.all(
        coursesInfo.map((course) => Course.create(course))
    );
};

const getAllCourses = async() => {
    return await Course.findAll();
};

const getCourse = async(courseID) => {
    return await Course.findByPk(courseID);
};

const updateCourse = async(courseID, courseInfo) => {
    const course = await Course.findByPk(courseID);
    if (course) {
        await course.update(courseInfo);
    }
    return course;
};

const deleteCourse = async(courseID) => {
    const course = await Course.findByPk(courseID);
    if (course) {
        await course.destroy();
    }
    return course;
};

module.exports = {
    createCourse,
    createCourses,
    getAllCourses,
    getCourse,
    updateCourse,
    deleteCourse,
};