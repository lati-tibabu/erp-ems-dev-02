const teacherServices = require("../services/teacherServices");

const createTeacher = async(req, res) => {
    try {
        const teacher = await teacherServices.createTeacher(req.body);
        res.status(201).json(teacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllTeachers = async(req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const teachers = await teacherServices.getAllTeachers(page, limit);
        if (Object.keys(teachers).length === 0) {
            res.json({ message: 'no teachers' });
        } else {
            res.json({
                teachers: teachers,
                totalTeachers: teachers.count,
                totalPages: Math.ceil(teachers.count / limit),
                currentPage: page
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllTeachersBySchool = async(req, res) => {
    try {
        const teachers = await teacherServices.getAllTeachersBySchool(
            req.params.school_id
        );
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getTeacher = async(req, res) => {
    try {
        const teacher = await teacherServices.getTeacher(req.params.teacher_id);
        res.json(teacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTeacher = async(req, res) => {
    try {
        const teacher = await teacherServices.updateTeacher(
            req.params.teacher_id,
            req.body
        );

        if (teacher) {
            res.status(200).json(teacher);
            // res.json({ message: "Teacher updated" });
        } else {
            res.json({ message: "Teacher not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTeacher = async(req, res) => {
    try {
        const teacher = await teacherServices.deleteTeacher(req.params.teacher_id);

        if (!teacher) {
            res.json({ message: "Teacher not found" });
        } else {
            res.json({ message: "Teacher deleted" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createTeacher,
    getAllTeachers,
    getAllTeachersBySchool,
    getTeacher,
    updateTeacher,
    deleteTeacher,
};