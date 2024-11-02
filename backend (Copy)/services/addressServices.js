const Address = require("../models/address");

const createAddress = async(address_info) => {
    return await Address.create(address_info);
};

const createAddresses = async(addresses_info) => {
    return await Promise.all(addresses_info.map((address) => Address.create(address)))
}

const getAllAddress = async() => {
    return await Address.findAll();
};

const getAddress = async(addressID) => {
    return await Address.findByPk(addressID);
};

const updateAddress = async(addressID, address_info) => {
    const address = await Address.findByPk(addressID);
    if (address) {
        await address.update(address_info);
    }
    return address;
};

const deleteAddress = async(addressID) => {
    const address = await Address.findByPk(addressID);
    if (address) {
        await address.destroy();
    }
    return address;
};

module.exports = {
    createAddress,
    createAddresses,
    getAllAddress,
    getAddress,
    updateAddress,
    deleteAddress,
};