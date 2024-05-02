const Showtime = require("../services/showtimeService")

const getShowtime = async (req, res) => {
    result = await Showtime.getAllShowtimes()
    for (var i = 0; i < result.length; i++) {
        let date = result[i].time
        date.setHours(date.getHours() + 7)
        result[i].date = date.toISOString().replace('T', ' ').substr(0, 19)
    }
    return res.render("showtime.ejs", { showtimes: result })
}

const postShowtime = async (req, res) => {
    await Showtime.insertShowtime(req.body)
        .catch((err) => {
            console.log(err)
        })
    return res.redirect('/showtime')
}

const updateShowtime = async (req, res) => {
    await Showtime.updateShowTimeById(req.body)
    return res.redirect('/showtime')
}

const deleteShowtime = async (req, res) => {
    await Showtime.deleteShowtimeById(req.params.showtime_id)
    return res.redirect('/showtime')
}

const getShowtimeByFilmId = async (req, res) => {
    result = await Showtime.getShowtimeByFilmId(req.query.film_id, req.user.city_id)
    return res.status(200).json({
        message: 'success',
        data: result
    })
}

const getShowtimeById = async (req, res) => {
    result = await Showtime.getShowtimeById(req.params.showtime_id)
    return res.status(200).json({
        data: result
    })

}

module.exports = {
    getShowtime,
    postShowtime,
    updateShowtime,
    deleteShowtime,
    getShowtimeByFilmId,
    getShowtimeById
}