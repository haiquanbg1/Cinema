const Showtime = require("../services/showtimeService")
const Film = require("../services/filmService")
const Room = require("../services/roomService")
const { successResponse, errorResponse } = require("../methods/response")

const getShowtime = async (req, res) => {
    try {
        const showtime_data = await Showtime.getAllShowtimes()
        const film_data = await Film.getAllFilms()
        const room_data = await Room.getAllRooms()
        return res.render("showtime.ejs", { showtimes: showtime_data, films: film_data, rooms: room_data })
    } catch (error) {
        console.log(error)
        return res.redirect("/showtime")
    }
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
        .catch((err) => {
            console.log(err)
        })
    return res.redirect('/showtime')
}

const deleteShowtime = async (req, res) => {
    await Showtime.deleteShowtimeById(req.params.showtime_id)
        .catch((err) => {
            console.log(err)
        })
    return res.redirect('/showtime')
}

const getShowtimeByFilmId = async (req, res) => {
    result = await Showtime.getShowtimeByFilmId(req.query.film_id, req.user.city_id)
        .catch((err) => {
            console.log(err)
            return errorResponse(res, 500, "Đã có lỗi xảy ra")
        })
    return successResponse(res, 200, "Thành công", result)
}

const getShowtimeById = async (req, res) => {
    result = await Showtime.getShowtimeById(req.params.showtime_id)
        .catch((err) => {
            console.log(err)
            return errorResponse(res, 500, "Đã có lỗi xảy ra")
        })
    return successResponse(res, 200, "Thành công", result)

}

module.exports = {
    getShowtime,
    postShowtime,
    updateShowtime,
    deleteShowtime,
    getShowtimeByFilmId,
    getShowtimeById
}