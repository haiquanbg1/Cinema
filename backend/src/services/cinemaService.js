const { Cinema, Room, Showtime, Booking } = require('../models/index')
const redis = require("../methods/redis")
const { Op } = require('sequelize');

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

const getCinemaById = async (cinema_id) => {
    const result = await Cinema.findOne({
        where: {
            id: cinema_id
        }
    })
    return result
}

const getPayAllCinema = async (month) => {
    console.log(month)
    var startDate, endDate
    switch (month) {
        case '1': {
            startDate = "2024-01-01 00:00:00"
            endDate = "2024-01-31 23:59:59"
            break
        }
        case '2': {
            startDate = "2024-02-01 00:00:00"
            endDate = "2024-02-28 23:59:59"
            break
        }
        case '3': {
            startDate = "2024-03-01 00:00:00"
            endDate = "2024-03-31 23:59:59"
            break
        }
        case '4': {
            startDate = "2024-04-01 00:00:00"
            endDate = "2024-04-31 23:59:59"
            break
        }
        case '5': {
            startDate = "2024-05-01 00:00:00"
            endDate = "2024-05-31 23:59:59"
            break
        }
        case '6': {
            startDate = "2024-06-01 00:00:00"
            endDate = "2024-06-30 23:59:59"
            break
        }
        case '7': {
            startDate = "2024-07-01 00:00:00"
            endDate = "2024-07-31 23:59:59"
            break
        }
        case '8': {
            startDate = "2024-08-01 00:00:00"
            endDate = "2024-08-31 23:59:59"
            break
        }
        case '9': {
            startDate = "2024-09-01 00:00:00"
            endDate = "2024-09-30 23:59:59"
            break
        }
        case '10': {
            startDate = "2024-10-01 00:00:00"
            endDate = "2024-10-31 23:59:59"
            break
        }
        case '11': {
            startDate = "2024-11-01 00:00:00"
            endDate = "2024-11-30 23:59:59"
            break
        }
        case '12': {
            startDate = "2024-12-01 00:00:00"
            endDate = "2024-12-31 23:59:59"
            break
        }
    }
    const result = await Cinema.findAll({
        attributes: ['name'],
        include: [{
            model: Room,
            includeIgnoreAttributes: false,
            include: [{
                model: Showtime,
                includeIgnoreAttributes: false,
                include: [{
                    model: Booking,
                    where: {
                        createdAt: {
                            [Op.between]: [startDate, endDate],
                        },
                    }
                }]
            }]
        }]
    })
    return result
}

const getPayCinemaById = async (cinema_id, month) => {
    console.log(month, cinema_id)
    var startDate, endDate
    switch (month) {
        case 1: {
            startDate = "2024-01-01 00:00:00"
            endDate = "2024-01-31 23:59:59"
            break
        }
        case 2: {
            startDate = "2024-02-01 00:00:00"
            endDate = "2024-02-28 23:59:59"
            break
        }
        case 3: {
            startDate = "2024-03-01 00:00:00"
            endDate = "2024-03-31 23:59:59"
            break
        }
        case 4: {
            startDate = "2024-04-01 00:00:00"
            endDate = "2024-04-31 23:59:59"
            break
        }
        case 5: {
            startDate = "2024-05-01 00:00:00"
            endDate = "2024-05-31 23:59:59"
            break
        }
        case 6: {
            startDate = "2024-06-01 00:00:00"
            endDate = "2024-06-30 23:59:59"
            break
        }
        case 7: {
            startDate = "2024-07-01 00:00:00"
            endDate = "2024-07-31 23:59:59"
            break
        }
        case 8: {
            startDate = "2024-08-01 00:00:00"
            endDate = "2024-08-31 23:59:59"
            break
        }
        case 9: {
            startDate = "2024-09-01 00:00:00"
            endDate = "2024-09-30 23:59:59"
            break
        }
        case 9: {
            startDate = "2024-10-01 00:00:00"
            endDate = "2024-10-31 23:59:59"
            break
        }
        case 11: {
            startDate = "2024-11-01 00:00:00"
            endDate = "2024-11-30 23:59:59"
            break
        }
        case 12: {
            startDate = "2024-12-01 00:00:00"
            endDate = "2024-12-31 23:59:59"
            break
        }
    }
    let c_id = Number(cinema_id)
    const result = await Cinema.findOne({
        attributes: ['name'],
        where: {
            id: c_id
        },
        include: [{
            model: Room,
            includeIgnoreAttributes: false,
            include: [{
                model: Showtime,
                includeIgnoreAttributes: false,
                include: [{
                    model: Booking,
                    where: {
                        createdAt: {
                            [Op.between]: [startDate, endDate],
                        },
                    }
                }]
            }]
        }]
    })
    return result
}

module.exports = {
    getAllCinema,
    getAllCinemaByCityId,
    getCinemaById,
    getPayAllCinema,
    getPayCinemaById
}