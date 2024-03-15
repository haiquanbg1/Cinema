const express = require("express")
const { getHome } = require("../controllers/homeController")
const film = require("../controllers/filmController")
const router = express.Router()

router.get("/", getHome)

router.get('/api/demo', (req, res) => {
    return res.status(200).json({
        message: "Quandz"
    })
})

// CRUD film
router.get("/film", film.getFilm)
router.post("/film/update", film.updateFilm)
router.post("/film/post", film.postFilm)
router.post("/film/delete/:film_id", film.deleteFilm)

module.exports = router