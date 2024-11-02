const parentServices = require("../services/parentServices");

const createParent = async(req, res) => {
    try {
        const parent = await parentServices.createParent(req.body);
        res.status(201).json(parent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllParents = async(req, res) => {
    try {
        const parents = await parentServices.getAllParents();
        res.json(parents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getParent = async(req, res) => {
    try {
        const parent = await parentServices.getParent(req.params.parent_id);
        res.json(parent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getParentTotal = async(req, res) => {
    try {
        const total = await parentServices.getParentTotal();
        res.json({ count: total });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateParent = async(req, res) => {
    try {
        const parent = await parentServices.updateParent(
            req.params.parent_id,
            req.body
        );

        if (parent) {
            res.status(200).json(parent);
            res.json({ message: "Parent updated" });
        } else {
            res.json({ message: "Parent not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteParent = async(req, res) => {
    try {
        const parent = await parentServices.deleteParent(req.params.parent_id);

        if (!parent) {
            res.json({ message: "parent not found" });
        } else {
            res.json({ message: "parent deleted" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createParent,
    getAllParents,
    getParent,
    getParentTotal,
    updateParent,
    deleteParent,
};