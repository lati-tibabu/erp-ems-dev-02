const addressServices = require("../services/addressServices");

const createAddress = async(req, res) => {
    try {
        const data = req.body;

        if (Array.isArray(data)) {
            const addresses = await addressServices.createAddresses(data);
            res.status(201).json(addresses)
        } else {
            const address = await addressServices.createAddress(req.body);
            res.status(201).json(address);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllAddress = async(req, res) => {
    try {
        const address = await addressServices.getAllAddress();
        res.json(address);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAddress = async(req, res) => {
    try {
        const address = await addressServices.getAddress(req.params.address_id);
        res.json(address);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAddress = async(req, res) => {
    try {
        const address = await addressServices.updateAddress(
            req.params.address_id,
            req.body
        );

        if (address) {
            res.status(200).json(address);
            res.json({ message: "Address updated" });
        } else {
            res.json({ message: "Address not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAddress = async(req, res) => {
    try {
        const address = await addressServices.deleteAddress(req.params.address_id);

        if (!address) {
            res.json({ message: "Address not found" });
        } else {
            res.json({ message: "Address deleted" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAddress,
    getAllAddress,
    getAddress,
    updateAddress,
    deleteAddress,
};