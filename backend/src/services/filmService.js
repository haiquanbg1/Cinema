const { Film, film_category, Category, Language, Classify } = require('../models/index')

const getAllFilms = async () => {
    result = await Film.findAll({
        where: {
            deleted: 0
        },
        include: [{
            model: film_category,
            attributes: [
                'film_id', 'category_id'
            ],
            include: [{
                model: Category,
                attributes: [
                    'name'
                ]
            }]
        }, {
            model: Language,
            attributes: [
                'name'
            ]
        }, {
            model: Classify,
            attributes: [
                'title', 'description'
            ]
        }]
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