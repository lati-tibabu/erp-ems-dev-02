const courseServices = require("../services/courseServices");

const createCourse = async(req, res) => {
    try {
        const data = req.body;

        if (Array.isArray(data)) {
            const courses = await courseServices.createCourses(data);
            res.status(201).json(courses);
        } else {
            const course = await courseServices.createCourse(data);
            res.status(201).json(course);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllCourses = async(req, res) => {
    try {
        const courses = await courseServices.getAllCourses();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCourse = async(req, res) => {
    try {
        const course = await courseServices.getCourse(req.params.courseID);
        if (course) {
            res.json(course);
        } else {
            res.status(404).json({ message: "Course not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCourse = async(req, res) => {
    try {
        const course = await courseServices.updateCourse(req.params.courseID, req.body);

        if (course) {
            res.status(200).json(course);
        } else {
            res.status(404).json({ message: "Course not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCourse = async(req, res) => {
    try {
        const course = await courseServices.deleteCourse(req.params.courseID);

        if (course) {
            res.status(200).json({ message: "Course deleted" });
        } else {
            res.status(404).json({ message: "Course not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourse,
    updateCourse,
    deleteCourse,
};