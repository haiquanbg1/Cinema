const film = require("../services/filmService")

const getFilm = async (req, res) => {
    result = film.getAllFilms()
    return res.render('film.ejs', { films: result })
}

const postFilm = async (req, res) => {
    film.insertFilm(req.body)
    return res.redirect('film.ejs')
}

const updateFilm = async (req, res) => {
    film.updateFilmById(req.body)
    return res.redirect('film.ejs')
}

const deleteFilm = async (req, res) => {
    film.deleteFilmById(req.params.film_id)
    return res.redirect('film.ejs')
}

module.exports = {
    getFilm,
    postFilm,
    updateFilm,
    deleteFilm
}