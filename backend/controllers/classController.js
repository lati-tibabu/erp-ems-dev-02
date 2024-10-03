const classServices = require("../services/classServices");

const createClass = async(req, res) => {
    try {
        const classObj = await classServices.createClass(req.body);
        res.status(201).json(classObj);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllClasses = async(req, res) => {
    try {
        const classes = await classServices.getAllClasses();
        res.json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getClassBySchoolID = async(req, res) => {
    try {
        const classes = await classServices.getClassBySchoolID(req.params.school_id);
        res.json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getClass = async(req, res) => {
    try {
        const classObj = await classServices.getClass(req.params.class_id);
        res.json(classObj);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateClass = async(req, res) => {
    try {
        const classObj = await classServices.updateClass(
            req.params.class_id,
            req.body
        );

        if (classObj) {
            res.status(200).json(classObj);
            res.json({ message: "Class updated" });
        } else {
            res.json({ message: "Class not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteClass = async(req, res) => {
    try {
        const classObj = await classServices.deleteClass(req.params.class_id);

        if (!classObj) {
            res.json({ message: "Class not found" });
        } else {
            res.json({ message: "Class deleted" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createClass,
    getAllClasses,
    getClassBySchoolID,
    getClass,
    updateClass,
    deleteClass,
};