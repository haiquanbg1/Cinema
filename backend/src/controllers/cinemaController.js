const Cinema = require("../services/cinemaService")
const { successResponse, errorResponse } = require("../methods/response")
const comment = require("../services/commentService")
const Comment = require("../methods/mongoose");

const getAllCinema = async (req, res) => {
    try {
        const cinemas = await Cinema.getAllCinema()
        return successResponse(res, 200, "Thành công", cinemas)
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, "Đã có lỗi xảy ra")
    }
}

const getCinemaById = async (req, res) => {
    try {
        const cinema = await Cinema.getCinemaById(req.params.cinema_id)
        return successResponse(res, 200, "Thành công", cinema)
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

const getAllComment = async (req, res) => {
    try {
        const comments = await comment.getAllComment();
        return successResponse(res, 200, "Success", comments);
    } catch (error) {
        console.log(error);
        return errorResponse(res, 500, "Fail");
    }
}

const getCommentByCinemaId = async (req, res) => {
    try {
        const comments = await comment.getCommentByCinemaId(req.params.cinema_id);
        return successResponse(res, 200, "Success", comments);
    } catch (error) {
        console.log(error);
        return errorResponse(res, 500, "Fail");
    }
}

const pushComment = async (req, res) => {
    const {content, rating, cinema} = req.body;
    const comment = new Comment({
        user: req.user.id,
        cinema: cinema,
        content: content,
        rating: rating,
        time: Date()
    });
    comment.save().then(() => {
        return successResponse(res, 200, "Comment success");
    }).catch(error => {
        return errorResponse(res, 404, "Fail");
    })
}

const updateComment = async (req, res) => {
    try {
        const {content, rating, id} = req.body;
        const update = { content: content, rating: rating };
        await Comment.findByIdAndUpdate(id, update)
        return successResponse(res, 200, "Thành công")
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, "Đã có lỗi xảy ra")
    }
}

const deleteComment = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.body.id)
        return successResponse(res, 200, "Thành công")
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, "Đã có lỗi xảy ra")
    }
}

module.exports = {
    getAllCinema,
    getCinemaById,
    getNameCinemaByCityId,
    getAllComment,
    getCommentByCinemaId,
    pushComment,
    updateComment,
    deleteComment
}