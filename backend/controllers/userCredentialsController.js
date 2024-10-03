const userCredentialsServices = require("../services/userCredentialsServices");

// createCredentials

const createCredentials = async(req, res) => {
    try {
        const credentials = await userCredentialsServices.createCredentials(req.body)
        res.status(201).json(credentials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// getAllCredentials

const getAllCredentials = async(req, res) => {
    try {
        const credentials = await userCredentialsServices.getAllCredentials()
        res.json(credentials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// getCredentials

const getCredentials = async(req, res) => {
    try {
        const credentials = await userCredentialsServices.getCredentials(req.params.credential_id);
        res.json(credentials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//getCredentialsByUser

const getCredentialsByUser = async(req, res) => {
    try {
        const credentials = await userCredentialsServices.getCredentialsByUser(req.params.user_id);
        res.json(credentials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// updateCredentials

const updateCredentials = async(req, res) => {
    try {
        const credentials = await userCredentialsServices.updateCredentials(req.params.credential_id, req.body);

        if (credentials) {
            res.status(200).json(credentials);
        } else {
            res.json({ message: "Credentials not Found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// deleteCredentials

const deleteCredentials = async(req, res) => {
    try {
        const credentials = await userCredentialsServices.deleteCredentials(req.params.credential_id);

        if (credentials) {
            res.json({ message: "Credentials Deleted!" });
        } else {
            res.json({ message: "Credentials not Found!" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createCredentials,
    getAllCredentials,
    getCredentials,
    getCredentialsByUser,
    updateCredentials,
    deleteCredentials,
}