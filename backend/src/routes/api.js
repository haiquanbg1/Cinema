const express = require("express")
const film = require("../controllers/filmController")
const user = require("../controllers/userController")
const showtime = require('../controllers/showtimeController')
const seat = require('../controllers/seatController')
const cinema = require('../controllers/cinemaController')
const router = express.Router()
const middleware = require('../middlewares/auth')

const isAuth = middleware.isAuth
router.post('/refresh_token', user.refreshToken)

//film
router.get('/film', film.getFilmAPI)
router.get('/film/:film_id', film.getFilmById)

// user
router.post('/user/register', user.register)
router.post('/user/login', user.login)
router.get('/user', isAuth, user.getRankUserByAccessToken)

// showtime
router.get('/showtime', showtime.getShowtimeByFilmId)
router.get('/showtime/:showtime_id', showtime.getShowtimeById)

// seat
router.get('/seat', isAuth, seat.getAllSeatBooked)
router.post('/seat/booked', isAuth, seat.postSeatBooked)
router.post('/seat/booking', isAuth, seat.postSeatBooking)
router.delete('/seat/delete', isAuth, seat.deleteSeatBookingCache)

// cinema
router.get('/cinema', cinema.getAllCinema)
router.get('/cinemaByCityId', cinema.getNameCinemaByCityId)
router.get('/cinema/:cinema_id', cinema.getCinemaById)

module.exports = router