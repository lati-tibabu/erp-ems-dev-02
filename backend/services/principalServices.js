const Principal = require("../models/principal");

const createPrincipal = async(principalInfo) => {
    return await Principal.create(principalInfo);
};

const getAllPrincipals = async() => {
    return await Principal.findAll();
};

const getAllPrincipalsC = async(page, limit) => {
    return await Principal.findAndCountAll({
        offset: (page - 1) * limit,
        limit: limit,
    });
}

const getPrincipal = async(principalID) => {
    return await Principal.findByPk(principalID);
};

//getting principal data by using user id
const getPrincipalByUserId = async(userID) => {
    return await Principal.findOne({ where: { user_id: userID } })
}
const updatePrincipal = async(principalID, principalInfo) => {
    const principal = await Principal.findByPk(principalID);
    if (principal) {
        await principal.update(principalInfo);
    }
    return principal;
};

const deletePrincipal = async(principalID) => {
    const principal = await Principal.findByPk(principalID);
    if (principal) {
        await principal.destroy();
    }
    return principal;
};

module.exports = {
    createPrincipal,
    getAllPrincipals,
    getAllPrincipalsC,
    getPrincipal,
    getPrincipalByUserId,
    updatePrincipal,
    deletePrincipal,
};