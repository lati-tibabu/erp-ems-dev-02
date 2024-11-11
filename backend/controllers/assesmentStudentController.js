//controller
const assesmentStudentServices = require('../services/assesmentStudentServices');

const assignAssesmentToStudent = async(req, res) => {
    try{
        const { assesment_id, student_id } = req.body;

        if(Array.isArray(student_id)){
            const result = await assesmentStudentServices.assignAssesmentToStudents(assesment_id, student_id);
            res.status(201).json(result);
        }else{
            const result = await assesmentStudentServices.assignAssesmentToStudent(assesment_id, student_id);
            res.status(201).json(result);
        }
    }catch(error){
        res.status(500).json({message: "Error Assigningig Assesment to Student: "+error});
    }
};

const getAllAssesmentForStudent = async(req, res) => {
    try {
        const student_id = req.params.student_id;
        const assesments = await assesmentStudentServices.getAllAssesmentForStudent(student_id);
        res.json(assesments);;
    }catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getAllAssesmentForStudentByTeacher = async(req, res) => {
    try{
        const {student_id, teacher_id} = req.params;
        const assesments = await assesmentStudentServices.getAllAssesmentForStudentByTeacher(student_id, teacher_id);
        res.json(assesments);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const removeAssesmentFromStudent = async(req, res) => {
    try {
        const { assesment_id, student_id } = req.body;
        const result = await assesmentStudentServices.removeAssesmentFromStudent(assesment_id, student_id);
        res.json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
const addMarkForStudent = async(req,res)=>{
    try{
        const assesmentStudentObj = await assesmentStudentServices.addMarkForStudent(
            req.params.assesment_id,
            req.params.student_id,
            req.body
        );
        if (assesmentStudentObj){
            res.status(200).json({
                message: "Mark is successfully filled for the student",
                data: assesmentStudentObj
            });
        } else {
            res.status(404).json({message: "Assesment-Student match not found"});
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
}
// const addMarkForStudent = async (req, res) => {
//     try {
//         const assesmentStudentObj = await assesmentStudentServices.addMarkForStudent(
//             req.params.assesment_id,
//             req.params.student_id,
//             req.body
//         );
        
//         if (assesmentStudentObj) {
//             res.status(200).json({
//                 message: "Mark is successfully filled for the student",
//                 data: assesmentStudentObj
//             });
//         } else {
//             res.status(404).json({ message: "Assessment-Student match not found" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }


module.exports = {
    assignAssesmentToStudent,
    getAllAssesmentForStudent,
    getAllAssesmentForStudentByTeacher,
    removeAssesmentFromStudent,
    addMarkForStudent
}