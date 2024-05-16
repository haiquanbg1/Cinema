const express = require("express")
const film = require("../controllers/filmController")
const user = require("../controllers/userController")
const showtime = require('../controllers/showtimeController')
const seat = require('../controllers/seatController')
const cinema = require('../controllers/cinemaController')
const router = express.Router()
const middleware = require('../middlewares/auth')
const {pushComment} = require("../controllers/cinemaController");

const isAuth = middleware.isAuth
router.post('/refresh_token', user.refreshToken)

//film
router.get('/film', film.getFilmAPI)

// user
router.post('/user/register', user.register)
router.post('/user/login', user.login)
router.get('/user', isAuth, user.getUserByAccessToken)

// showtime
router.get('/showtime', showtime.getShowtimeByFilmId)
// router.get('/showtime/showtimeId:showtimeId', showtime.getSho)

// seat
router.get('/seat', isAuth, seat.getAllSeatBooked)
router.post('/seat/booked', isAuth, seat.postSeatBooked)
router.post('/seat/booking', isAuth, seat.postSeatBooking)
router.post('/seat/delete', isAuth, seat.deleteSeatBookingCache)

// cinema
router.get('/cinema', cinema.getAllCinema)
router.get('/cinemaByCityId', cinema.getNameCinemaByCityId)
router.get('/comment', cinema.getAllComment);
router.get('/comment/:cinema_id', cinema.getCommentByCinemaId)
router.delete('/deleteComment/:cinema_id', isAuth, cinema.deleteComment)
router.put('/updateComment/:cinema_id', isAuth, cinema.updateComment)
router.post('/createComment', isAuth, cinema.pushComment)


module.exports = router