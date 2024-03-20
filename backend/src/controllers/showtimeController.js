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

module.exports = {
    getShowtime,
    postShowtime,
    updateShowtime,
    deleteShowtime
}