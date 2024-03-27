const express = require("express")
const film = require("../controllers/filmController")
const user = require("../controllers/userController")
const showtime = require('../controllers/showtimeController')
const router = express.Router()
const middleware = require('../middlewares/auth')

const isAuth = middleware.isAuth
router.post('/refresh', user.refreshToken)

//film
router.get('/film', film.getFilmAPI)

// user
router.post('/user/register', user.postUser)
router.get('/user/login', user.getUser)
router.get('/user', isAuth, user.getUserByAccessToken)

// showtime
router.get('/showtimeByFilmId', isAuth, showtime.getShowtimeByFilmId)

module.exports = router