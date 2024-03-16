const film = require("../services/filmService")

const getFilm = async (req, res) => {
    result = await film.getAllFilms()
    return res.render('film.ejs', { films: result })
}

const postFilm = async (req, res) => {
    await film.insertFilm(req.body)
    return res.redirect('/film')
}

const updateFilm = async (req, res) => {
    await film.updateFilmById(req.body)
    return res.redirect('/film')
}

const deleteFilm = async (req, res) => {
    await film.deleteFilmById(req.params.film_id)
    return res.redirect('/film')
}

const getFilmAPI = async (req, res) => {
    let films = await film.getAllFilmsAPI()
    res.status(200).json({
        message: "success",
        data: films
    })
}

module.exports = {
    getFilm,
    postFilm,
    updateFilm,
    deleteFilm,
    getFilmAPI
}