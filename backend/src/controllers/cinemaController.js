const Cinema = require("../services/cinemaService")
const { successResponse, errorResponse } = require("../methods/response")

const getAllCinema = async (req, res) => {
    try {
        const cinemas = await Cinema.getAllCinema()
        return successResponse(res, 200, "Thành công", cinemas)
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, "Đã có lỗi xảy ra")
    }
}

const getNameCinemaByCityId = async (req, res) => {
    try {
        const cinemas = await Cinema.getAllCinemaByCityId(req.body.city_id)
        var nameCinema = []
        cinemas.forEach(element => {
            nameCinema.push(element.name)
        })
        return successResponse(res, 200, "Thành công", nameCinema)
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, "Đã có lỗi xảy ra")
    }
}

module.exports = {
    getAllCinema,
    getNameCinemaByCityId
}