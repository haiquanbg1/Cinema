const { Showtime, Cinema, Room, Film } = require('../models/index')
const { Op } = require('sequelize')
const moment = require('moment')

const insertShowtime = async (showtime) => {
    await Showtime.create({
        film_id: showtime.film_id,
        room_id: showtime.room_id,
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
        room_id: showtime.room_id,
        time: showtime.time,
        price: showtime.price
    }, {
        where: {
            id: showtime.showtime_id
        }
    })
}

const getShowtimeByFilmId = async (film_id, city_id) => {
    const cinema = await Cinema.findAll({
        where: {
            city_id: city_id
        },
        include: [{
            model: Room
        }]
    })
    var rooms = []
    cinema.forEach(element => {
        element.Rooms.forEach(room => {
            rooms.push(room.id)
        })
    });
    const showtimes = await Showtime.findAll({
        where: {
            film_id: film_id,
            time: {
                [Op.gte]: moment().add(7, 'hours').toDate()
            }
        },
        include: [{
            model: Room,
            where: {
                id: {
                    [Op.in]: rooms
                }
            }
        }, {
            model: Film
        }]
    })
    return showtimes
}

module.exports = {
    insertShowtime,
    getAllShowtimes,
    getShowtimeById,
    updateShowTimeById,
    deleteShowtimeById,
    getShowtimeByFilmId
}