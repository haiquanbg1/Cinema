const express = require("express")
const film = require("../controllers/filmController")
const user = require("../controllers/userController")
const router = express.Router()
const middleware = require('../middlewares/auth')

const isAuth = middleware.isAuth

router.get('/film', film.getFilmAPI)

router.post('/user/register', user.postUser)
router.get('/user/login', user.getUser)

router.post('/refresh', user.refreshToken)

module.exports = router