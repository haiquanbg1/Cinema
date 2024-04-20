const conn = require("../config/database")
const db = require('../models/index')
const Showtime = require('../models/showtime')(db.sequelize, db.Sequelize)
const Cinema = require("../models/cinema")(db.sequelize, db.Sequelize)
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
    // [result, field] = await conn.query(
    //     'select st.*, c.name from showtimes st inner join cinemas c on c.cinema_id = st.cinema_id where st.film_id = ? and st.time >= now() and c.city_id = ?',
    //     [film_id, city_id]
    // )
    let showtime = await Showtime.findAll({
        where: {
            time: {
                [Op.gte]: moment().add(7, 'hours').toDate()
            },
            film_id: film_id
        },
        include: [{
            model: Cinema,
            required: false,
            on: {
                cinema_id: db.Sequelize.col('showtimes.cinema_id')
            },
            where: {
                city_id: city_id
            }
        }]
    })
    let cinema = await Cinema.findAll({
        attributes: {
            exclude: [
                'timestamps',
                'createdAt',
                'updatedAt'
            ]
        },
        where: {
            city_id: city_id
        }
    })
    let result = []
    for (let i = 0; i < showtime.length; i++) {
        for (let j = 0; j < cinema.length; j++) {
            if (showtime[i].cinema_id == cinema[j].cinema_id) {
                showtime[i].dataValues.cinema = cinema[j].name
                result.push(showtime[i])
                break
            }
        }
    }
    return showtime
}

module.exports = {
    insertShowtime,
    getAllShowtimes,
    getShowtimeById,
    updateShowTimeById,
    deleteShowtimeById,
    getShowtimeByFilmId
}