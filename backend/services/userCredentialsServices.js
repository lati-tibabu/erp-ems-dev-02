const userCredentials = require("../models/usercredentials");

const createCredentials = async(credentialsInfo) => {
    return await userCredentials.create(credentialsInfo);
};

const getAllCredentials = async() => {
    return await userCredentials.findAll();
};

const getCredentials = async(credentialsID) => {
    return await userCredentials.findByPk(credentialsID);
};

const getCredentialsByUser = async(userID) => {
    return await userCredentials.findOne({ where: { user_id: userID } });
}

const updateCredentials = async(credentialsID, credentialsInfo) => {
    const credentials = await userCredentials.findByPk(credentialsID);
    if (credentials) {
        await credentials.update(credentialsInfo);
    }
    return credentials;
}

const deleteCredentials = async(credentialsID) => {
    const credentials = await userCredentials.findByPk(credentialsID);
    if (credentials) {
        await credentials.destroy();
    }
    return credentials;
};

module.exports = {
    createCredentials,
    getAllCredentials,
    getCredentials,
    getCredentialsByUser,
    updateCredentials,
    deleteCredentials,
};