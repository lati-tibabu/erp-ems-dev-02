const assesmentServices = require("../services/assesmentServices");

const createAssesment = async(req, res) => {
    try {
        const assesmentObj = await assesmentServices.createAssesment(req.body);
        res.status(201).json(assesmentObj);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getAllAssesments = async (req, res) => {
    try{
        const assesments = await assesmentServices.getAllAssesments();
        res.json(assesments);
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

const getAssesment = async(req, res)=>{
    try{
        const assesment = await assesmentServices.getAssesment(req.params.assesment_id);
        res.json(assesment);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const getAssesmentsByTeacherID = async(req, res) => {
    try{
        const assesments = await assesmentServices.getAssesmentsByTeacherID(req.params.teacher_id);
        res.json(assesments);
    }catch(error){
        res.status(500).json({messge: error.message});
    }
};

const getAssesmentsByStudentID = async(req, res)=>{
    try{
        const assesments = await assesmentServices.getAssesmentsByStudentID(req.params.student_id);
        res.json(assesments);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const getAssesmentsBySchoolID = async(req, res)=>{
    try{
        const assesments = await assesmentServices.getAssesmentsBySchoolID(req.params.school_id);
        res.json(assesments);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const updateAssesment = async(req, res)=>{
    try{
        const assesmentObj = await assesmentServices.updateAssesment(
            req.params.assesment_id,
            req.body
        );
        if (assesmentObj){
            res.status(200).json(assesmentObj);
            res.json({message: "Assesment information is updated"});

        } else{
            res.status(404).json({message: "Assesment not found"});
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const deleteAssesment = async(req,res)=>{
    try{
        const assesmentObj = await assesmentServices.deleteAssesment(req.params.assesment_id);

        if (!assesmentObj) {
            res.json({message: "Assesment not found"});
        } else {
            res.json({message: "Assesmet deleted!"});
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    createAssesment,
    getAllAssesments,
    getAssesment,
    getAssesmentsByTeacherID,
    getAssesmentsByStudentID,
    getAssesmentsBySchoolID,
    updateAssesment,
    deleteAssesment,
}