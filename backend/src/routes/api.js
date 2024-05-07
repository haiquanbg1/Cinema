const express = require("express")
const film = require("../controllers/filmController")
const user = require("../controllers/userController")
const showtime = require('../controllers/showtimeController')
const seat = require('../controllers/seatController')
const router = express.Router()
const middleware = require('../middlewares/auth')

const isAuth = middleware.isAuth
router.post('/refresh_token', user.refreshToken)

//film
router.get('/film', film.getFilmAPI)

// user
router.post('/user/register', user.register)
router.post('/user/login', user.login)
router.get('/user', isAuth, user.getUserByAccessToken)

// showtime
router.get('/showtime', isAuth, showtime.getShowtimeByFilmId)
// router.get('/showtime/showtimeId:showtimeId', showtime.getSho)

// seat
router.get('/seat', isAuth, seat.getAllSeatBooked)
router.post('/seat/booked', isAuth, seat.postSeatBooked)
router.post('/seat/booking', isAuth, seat.postSeatBooking)
router.post('/seat/delete', isAuth, seat.deleteSeatBookingCache)

module.exports = router