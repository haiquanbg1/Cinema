const express = require("express")
const film = require("../controllers/filmController")
const router = express.Router()

router.get('/film', film.getFilmAPI)

module.exports = router