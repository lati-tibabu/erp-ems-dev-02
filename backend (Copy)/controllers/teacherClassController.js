const classAssignService = require('../services/teacherClassServices');

const assignTeacherToClass = async(req, res) => {
    try {
        const { teacher_id, class_id } = req.body;
        const result = await classAssignService.assignTeacherToClass(teacher_id, class_id);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllClassForTeacher = async(req, res) => {
    try {
        const teacher_id = req.params.teacher_id;
        const classes = await classAssignService.getAllClassForTeacher(teacher_id);
        res.json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllTeacherForClass = async(req, res) => {
    try {
        const class_id = req.params.class_id;
        const teachers = await classAssignService.getAllTeacherForClass(class_id);
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeClassFromTeacher = async(req, res) => {
    try {
        const { teacher_id, class_id } = req.body;
        const result = await classAssignService.removeClassFromTeacher(teacher_id, class_id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    assignTeacherToClass,
    getAllClassForTeacher,
    getAllTeacherForClass,
    removeClassFromTeacher
}







// const teacherClassServices = require("../services/teacherClassServices");

// const createTeacherClass = async (req, res) => {
//   try {
//     const teacherClass = await teacherClassServices.createTeacherClass(
//       req.body
//     );
//     res.status(201).json(teacherClass);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getAllTeacherClasses = async (req, res) => {
//   try {
//     const teacherClasses = await teacherClassServices.getAllTeacherClasses();
//     res.json(teacherClasses);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getTeacherClass = async (req, res) => {
//   try {
//     const teacherClass = await teacherClassServices.getTeacherClass(
//       req.params.teacher_class_id
//     );
//     res.json(teacherClass);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const updateTeacherClass = async (req, res) => {
//   try {
//     const teacherClass = await teacherClassServices.updateTeacherClass(
//       req.params.teacher_class_id,
//       req.body
//     );

//     if (teacherClass) {
//       res.status(200).json(teacherClass);
//       res.json({ message: "Teacher Class updated" });
//     } else {
//       res.json({ message: "Teacher Class not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const deleteTeacherClass = async (req, res) => {
//   try {
//     const teacherClass = await teacherClassServices.deleteTeacherClass(
//       req.params.teacher_class_id
//     );

//     if (!teacherClass) {
//       res.json({ message: "Teacher Class not found" });
//     } else {
//       res.json({ message: "Teacher Class deleted" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   createTeacherClass,
//   getAllTeacherClasses,
//   getTeacherClass,
//   updateTeacherClass,
//   deleteTeacherClass,
// };