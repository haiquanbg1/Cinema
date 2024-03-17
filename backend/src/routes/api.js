const express = require("express")
const film = require("../controllers/filmController")
const user = require("../controllers/userController")
const router = express.Router()

router.get('/film', film.getFilmAPI)

router.post('/user/register', user.postUser)

module.exports = router