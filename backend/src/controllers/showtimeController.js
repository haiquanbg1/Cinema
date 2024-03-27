const Showtime = require("../services/showtimeService")

const getShowtime = async (req, res) => {
    result = await Showtime.getAllShowtimes()
    return res.render("showtime.ejs", { showtimes: result })
}

const postShowtime = async (req, res) => {
    await Showtime.insertShowtime(req.body)
    return res.redirect('/showtime')
}

const updateShowtime = async (req, res) => {
    await Showtime.updateShowTimeById(res.body)
    return res.redirect('/showtime')
}

const deleteShowtime = async (req, res) => {
    await Showtime.deleteShowtimeById(req.params.showtime_id)
    return res.redirect('/showtime')
}

const getShowtimeByFilmId = async (req, res) => {
    result = await Showtime.getShowtimeByFilmId(req.body.film_id)
    return res.status(200).json({
        message: 'success',
        data: result
    })
}

module.exports = {
    getShowtime,
    postShowtime,
    updateShowtime,
    deleteShowtime,
    getShowtimeByFilmId
}