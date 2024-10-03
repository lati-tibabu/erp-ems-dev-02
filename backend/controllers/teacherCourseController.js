const teacherCourseService = require("../services/teacherCourseServices");

const assignTeacherToCourse = async(req, res) => {
    try {
        const { teacher_id, course_id } = req.body;
        const result = await teacherCourseService.assignTeacherToCourse(teacher_id, course_id);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllTeachersForCourse = async(req, res) => {
    try {
        const course_id = req.params.course_id;
        const teachers = await teacherCourseService.getAllTeachersForCourse(course_id);
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllCoursesForTeacher = async(req, res) => {
    try {
        const teacher_id = req.params.teacher_id;
        const courses = await teacherCourseService.getAllCoursesForTeacher(teacher_id);
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeCourseFromTeacher = async(req, res) => {
    try {
        const { teacher_id, course_id } = req.body;
        const result = await teacherCourseService.removeCourseFromTeacher(teacher_id, course_id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    assignTeacherToCourse,
    getAllTeachersForCourse,
    getAllCoursesForTeacher,
    removeCourseFromTeacher
}