const { Film, film_category, Category, Language, Classify, Showtime, Booking } = require('../models/index')
const { Op } = require('sequelize');

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
    result = await Film.findOne({
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
        image: film.image,
        video: film.video
    }).then(async (data) => {
        for (var i = 0; i < film.category.length; i++) {
            await film_category.create({
                film_id: data.dataValues.id,
                category_id: film['category'][i]
            }).catch((err) => {
                console.log("error film_category")
            })
        }
    }).catch((err) => {
        console.log(err)
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

const getPayAllFilm = async (month) => {
    var startDate, endDate
    switch (month) {
        case '1': {
            startDate = "2024-01-01 00:00:00"
            endDate = "2024-01-31 23:59:59"
            break
        }
        case '2': {
            startDate = "2024-02-01 00:00:00"
            endDate = "2024-02-28 23:59:59"
            break
        }
        case '3': {
            startDate = "2024-03-01 00:00:00"
            endDate = "2024-03-31 23:59:59"
            break
        }
        case '4': {
            startDate = "2024-04-01 00:00:00"
            endDate = "2024-04-31 23:59:59"
            break
        }
        case '5': {
            startDate = "2024-05-01 00:00:00"
            endDate = "2024-05-31 23:59:59"
            break
        }
        case '6': {
            startDate = "2024-06-01 00:00:00"
            endDate = "2024-06-30 23:59:59"
            break
        }
        case '7': {
            startDate = "2024-07-01 00:00:00"
            endDate = "2024-07-31 23:59:59"
            break
        }
        case '8': {
            startDate = "2024-08-01 00:00:00"
            endDate = "2024-08-31 23:59:59"
            break
        }
        case '9': {
            startDate = "2024-09-01 00:00:00"
            endDate = "2024-09-30 23:59:59"
            break
        }
        case '10': {
            startDate = "2024-10-01 00:00:00"
            endDate = "2024-10-31 23:59:59"
            break
        }
        case '11': {
            startDate = "2024-11-01 00:00:00"
            endDate = "2024-11-30 23:59:59"
            break
        }
        case '12': {
            startDate = "2024-12-01 00:00:00"
            endDate = "2024-12-31 23:59:59"
            break
        }
    }

    const result = await Film.findAll({
        attributes: ['title'],
        include: [{
            model: Showtime,
            include: [{
                model: Booking,
                where: {
                    createdAt: {
                        [Op.between]: [startDate, endDate],
                     },
                }
            }]
        }]
    })

    return result
}

module.exports = {
    getAllFilms,
    insertFilm,
    updateFilmById,
    deleteFilmById,
    getFilmById,
    getPayAllFilm
}