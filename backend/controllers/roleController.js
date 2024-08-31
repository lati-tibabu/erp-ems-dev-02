const roleServices = require("../services/roleServices");

const createRole = async(req, res) => {
    try {
        const data = req.body;
        if (Array.isArray(data)) {
            const roles = await roleServices.createRoles(data);
            res.status(201).json(roles);
        } else {
            const role = await roleServices.createRole(req.body);
            res.status(201).json(role);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllRole = async(req, res) => {
    try {
        const role = await roleServices.getAllRole();
        res.json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getRole = async(req, res) => {
    try {
        const role = await roleServices.getRole(req.params.role_id);
        res.json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getRoleByName = async(req, res) => {
    try {
        const role = await roleServices.getRoleByName(req.params.role_name);
        res.json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updateRole = async(req, res) => {
    try {
        const role = await roleServices.updateRole(req.params.role_id, req.body);

        if (role) {
            // res.status(200).json(role);
            res.json({ message: "Role updated" });
        } else {
            res.json({ message: "Role not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteRole = async(req, res) => {
    try {
        const role = await roleServices.deleteRole(req.params.role_id);
        if (!role) {
            //   res.status(200).json({ message: "Role deleted" });
            res.status(404).json({ message: "Role not found" });
        } else {
            //   res.status(404).json({ message: "Role not found" });
            res.status(200).json({ message: "Role deleted" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createRole,
    getAllRole,
    getRole,
    getRoleByName,
    updateRole,
    deleteRole,
};