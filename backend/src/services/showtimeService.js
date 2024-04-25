const { Showtime, Cinema } = require('../models/index')
const { Op } = require('sequelize')
const moment = require('moment')

const insertShowtime = async (showtime) => {
    await Showtime.create({
        film_id: showtime.film_id,
        cinema_id: showtime.cinema_id,
        time: showtime.time,
        price: showtime.price
    })
}

const getAllShowtimes = async () => {
    result = await Showtime.findAll({
        where: {
            time: {
                [Op.gte]: moment().add(7, 'hours').toDate()
            }
        }
    })
    return result
}

const getShowtimeById = async (showtime_id) => {
    result = await Showtime.findOne({
        where: {
            id: showtime_id
        }
    })
    return result
}

const deleteShowtimeById = async (showtime_id) => {
    await Showtime.destroy({
        where: {
            id: showtime_id
        }
    })
}

const updateShowTimeById = async (showtime) => {
    await Showtime.update({
        film_id: showtime.film_id,
        cinema_id: showtime.cinema_id,
        time: showtime.time,
        price: showtime.price
    }, {
        where: {
            id: showtime.showtime_id
        }
    })
}

const getShowtimeByFilmId = async (film_id, city_id) => {
    // let showtime = await Showtime.findAll({
    //     where: {
    //         time: {
    //             [Op.gte]: moment().add(7, 'hours').toDate()
    //         },
    //         film_id: film_id
    //     },
    //     include: [{
    //         model: Cinema,
    //         attributes: [
    //             'name'
    //         ],
    //         where: {
    //             city_id: city_id
    //         }
    //     }]
    // })
    console.log(Showtime.associations)
    let cinema = await Cinema.findAll({
        attributes: [
            'name'
        ],
        where: {
            city_id: city_id
        },
        include: [{
            model: Showtime,
            where: {
                time: {
                    [Op.gte]: moment().add(7, 'hours').toDate()
                },
                film_id: film_id
            },
            require: true
        }]
    })
    return cinema
}

module.exports = {
    insertShowtime,
    getAllShowtimes,
    getShowtimeById,
    updateShowTimeById,
    deleteShowtimeById,
    getShowtimeByFilmId
}