const { Cinema } = require('../models/index')
const redis = require("../methods/redis")

const getAllCinema = async () => {
    const result = await Cinema.findAll()
    return result
}

const getAllCinemaByCityId = async (city_id) => {
    const result = await Cinema.findAll({
        where: {
            city_id: city_id
        }
    })
    return result
}

module.exports = {
    getAllCinema,
    getAllCinemaByCityId
}