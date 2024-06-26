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
router.get("/film/statistic/pay", film.getPayAllFilm)

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
router.get('/seat/user/booking', isAuth, seat.getSeatUserBooking)

// cinema
router.get('/cinema', cinema.getAllCinema)
router.get('/cinemaByCityId', cinema.getNameCinemaByCityId)
router.get('/cinema/:cinema_id', cinema.getCinemaById)
router.get('/cinema/statistic/pay', cinema.getPayAllCinema)
router.get('/cinema/statistic/pay6month', cinema.getPayCinemaLast6Month)

//comment
router.get('/comment', cinema.getAllComment);
router.get('/comment/:cinema_id', cinema.getCommentByCinemaId)
router.delete('/deleteComment', isAuth, cinema.deleteComment)
router.put('/updateComment', isAuth, cinema.updateComment)
router.post('/createComment', isAuth, cinema.pushComment)

module.exports = router