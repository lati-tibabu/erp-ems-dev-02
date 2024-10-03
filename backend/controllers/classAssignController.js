const classAssignService = require("../services/classAssignService");

const assignCourseToClass = async(req, res) => {
    try {
        const { class_id, course_id } = req.body;
        const result = await classAssignService.assignCourseToClass(class_id, course_id);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllCoursesForClass = async(req, res) => {
    try {
        const class_id = req.params.class_id;
        const courses = await classAssignService.getAllCoursesForClass(class_id);
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeCourseFromClass = async(req, res) => {
    try {
        const { class_id, course_id } = req.body;
        const result = await classAssignService.removeCourseFromClass(class_id, course_id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    assignCourseToClass,
    getAllCoursesForClass,
    removeCourseFromClass,
};