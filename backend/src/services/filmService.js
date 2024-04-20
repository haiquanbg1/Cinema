const db = require('../models/index')
const Film = require('../models/film')(db.sequelize, db.Sequelize)

const getAllFilms = async () => {
    result = await Film.findAll({
        where: {
            deleted: 0
        }
    });
    return result
}

const getFilmById = async (film_id) => {
    result = await Film.findAll({
        where: {
            id: film_id
        }
    })
    return result
}

const insertFilm = async (film) => {
    await Film.create({
        title: film.title,
        description: film.description,
        release_date: film.release_date,
        language_id: film.language_id,
        director: film.director,
        actor: film.actor,
        length: film.length,
        classify_id: film.classify_id,
    })
}

const updateFilmById = async (film) => {
    await Film.update({
        title: film.title,
        description: film.description,
        release_date: film.release_date,
        language_id: film.language_id,
        director: film.director,
        actor: film.actor,
        length: film.length,
        classify_id: film.classify_id
    }, {
        where: {
            id: film.film_id
        }
    }
    )
}

const deleteFilmById = async (film_id) => {
    await Film.update({
        deleted: 1
    }, {
        where: {
            id: film_id
        }
    })
}

module.exports = {
    getAllFilms,
    insertFilm,
    updateFilmById,
    deleteFilmById
}