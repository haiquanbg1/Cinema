const conn = require("../config/database")

const insertShowtime = async (showtime) => {
    await conn.query(
        'insert into showtimes(film_id, cinema_id, time, price) values(?, ?, ?, ?)',
        [
            showtime.film_id,
            showtime.cinema_id,
            showtime.time,
            showtime.price
        ]
    )
}

const getAllShowtimes = async () => {
    [result, field] = await conn.query(
        'select * from showtimes where time >= now()'
    )
    return result
}

const getShowtimeById = async (showtime_id) => {
    [result, field] = await conn.query(
        'select * from showtimes where showtime_id = ?',
        [showtime_id]
    )
    return result[0]
}

const deleteShowtimeById = async (showtime_id) => {
    await conn.query(
        'delete from showtimes where showtime_id = ?',
        [showtime_id]
    )
}

const updateShowTimeById = async (showtime) => {
    await conn.query(
        'update showtimes set film_id = ?, cinema_id = ?, time = ?, price = ? where showtime_id = ?',
        [
            showtime.film_id,
            showtime.cinema_id,
            showtime.time,
            showtime.price,
            showtime.showtime_id
        ]
    )
}

module.exports = {
    insertShowtime,
    getAllShowtimes,
    getShowtimeById,
    updateShowTimeById,
    deleteShowtimeById
}