const { Cinema } = require('../models/index')
const redis = require("../methods/redis")
const mongoose = require('../methods/mongoose')

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

const getAllComment = async () => {
    const result = await Comment.findAll({});
    return result;
}

const getCommentByCinemaId = async (req, res) => {
    const result = await Comment.findOne({
        cinema_id: req.params.cinema_id
    })
    return result;
}

module.exports = {
    getAllCinema,
    getAllCinemaByCityId,
    getAllComment,
    getCommentByCinemaId
}