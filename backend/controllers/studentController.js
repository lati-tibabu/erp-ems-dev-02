const studentServices = require("../services/studentServices");

const createStudent = async(req, res) => {
    try {
        const student = await studentServices.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// const getAllStudents = async(req, res) => {
//     try {
//         const { page, limit } = req.query;
//         const students = await studentServices.getAllStudents(parseInt(page), parseInt(limit));
//         res.json(students);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

const getAllStudents = async(req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const students = await studentServices.getAllStudents(page, limit);
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getAllStudentsBySchool = async(req, res) => {
    try {
        const students = await studentServices.getAllStudentsBySchool(
            req.params.school_id
        );
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllStudentsByGender = async(req, res) => {
    try {
        const students = await studentServices.getAllStudentsByGender(
            req.params.school_id,
            req.params.gender
        );
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllStudentsByClass = async(req, res) => {
    try {
        const students = await studentServices.getAllStudentsByClass(
            req.params.school_id,
            req.params.class_id
        );
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllStudentsByGrade = async(req, res) => {
    try {
        const students = await studentServices.getAllStudentsByGrade(
            req.params.school_id,
            req.params.grade_level
        );
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getStudent = async(req, res) => {
    try {
        const student = await studentServices.getStudent(req.params.student_id);
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getStudentByUserId = async(req, res) => {
    try {
        const student = await studentServices.getStudentByUserId(
            req.params.user_id
        );
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getStudentTotal = async(req, res) => {
    try {
        const total = await studentServices.getStudentTotal();
        res.json({ count: total });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const searchStudents = async(req, res) => {
    try {
        const query = req.query.query; // Search query for student name
        const schoolId = req.query.school_id;
        const students = await studentServices.searchStudents(query, schoolId);
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateStudent = async(req, res) => {
    try {
        const student = await studentServices.updateStudent(
            req.params.student_id,
            req.body
        );

        if (student) {
            res.status(200).json(student);
            res.json({ message: "Student updated" });
        } else {
            res.json({ message: "Student not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteStudent = async(req, res) => {
    try {
        const student = await studentServices.deleteStudent(req.params.student_id);

        if (!student) {
            res.json({ message: "Student not found" });
        } else {
            res.json({ message: "Student deleted" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getStudentData = async(req, res) => {
    try {
        const student = await studentServices.getStudentData(req.params.student_id);
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createStudent,
    getAllStudents,
    getAllStudentsBySchool,
    getAllStudentsByGender,
    getAllStudentsByClass,
    getAllStudentsByGrade,
    getStudent,
    getStudentByUserId,
    getStudentTotal,
    searchStudents,
    updateStudent,
    deleteStudent,
    getStudentData
};