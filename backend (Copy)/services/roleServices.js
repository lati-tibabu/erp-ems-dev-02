// const Sequelize = require("sequelize");
const Role = require("../models/role");

const createRole = async(role_info) => {
    return await Role.create(role_info);
};

const createRoles = async(roles_info) => {
    return await Promise.all(roles_info.map((role) => Role.create(role)))
};
const getAllRole = async() => {
    return await Role.findAll();
};

const getRole = async(roleID) => {
    return await Role.findByPk(roleID);
};

const getRoleByName = async(roleName) => {
    return await Role.findOne({
        where: {
            role_name: roleName,
        }
    });
};

const updateRole = async(roleID, role_info) => {
    const role = await Role.findByPk(roleID);

    if (role) {
        await role.update(role_info);
    }
    return role;
};

const deleteRole = async(roleID) => {
    const role = await Role.findByPk(roleID);
    if (role) {
        await role.destroy();
    }
    return role;
};

module.exports = {
    createRole,
    createRoles,
    getAllRole,
    getRole,
    getRoleByName,
    updateRole,
    deleteRole,
};