const Film = require("../services/filmService")
const { successResponse, errorResponse } = require("../methods/response")

// Use for BackEnd
const getFilm = async (req, res) => {
    try {
        result = await Film.getAllFilms()
        // for (var i = 0; i < result.length; i++) {
        //     let date = result[i].release_date
        //     date.setHours(date.getHours() + 7)
        //     result[i].release_date = date.toISOString().replace('T', ' ').substr(0, 10)
        // }
        return res.render('film.ejs', { films: result })
    } catch (error) {
        console.log(error)
    }
}

// const getFilmById = async (req, res) => {
//     try {
//         result = await Film.getFilmById(req.body.film_id)
//         // for (var i = 0; i < result.length; i++) {
//         //     let date = result[i].release_date
//         //     date.setHours(date.getHours() + 7)
//         //     result[i].release_date = date.toISOString().replace('T', ' ').substr(0, 10)
//         // }
//         return res.render('film.ejs', { films: result })
//     } catch (error) {
//         console.log(error)
//     }
// }

const postFilm = async (req, res) => {
    try {
        await Film.insertFilm(req.body)
    } catch (error) {
        console.log(error)
    }
    return res.redirect('/film')
}

const updateFilm = async (req, res) => {
    try {
        console.log(req.body)
        await Film.updateFilmById(req.body)
    } catch (error) {
        console.log(error)
    }
    return res.redirect('/film')
}

const deleteFilm = async (req, res) => {
    try {
        await Film.deleteFilmById(req.params.film_id)
    } catch (error) {
        console.log(error)
    }
    return res.redirect('/film')
}

// Use for FrontEnd
const getFilmAPI = async (req, res) => {
    try {
        let films = await Film.getAllFilms()
        let now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }))
        now.setHours(now.getHours() + 7)

        for (let data in films) {
            let date = films[data]['release_date']
            if (Date.parse(date) > Date.parse(now)) {
                films[data]['dataValues']['showing'] = 0
            } else {
                films[data]['dataValues']['showing'] = 1
            }
        }
        return successResponse(res, 200, "Thành công", films)
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, "Đã có lỗi xảy ra")
    }
}

const getFilmById = async (req, res) => {
    try {
        const film = await Film.getFilmById(req.params.film_id)
        return successResponse(res, 200, "Thành công", film)
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, "Đã có lỗi xảy ra")
    }
}

module.exports = {
    getFilm,
    postFilm,
    updateFilm,
    deleteFilm,
    getFilmById,
    getFilmAPI
}