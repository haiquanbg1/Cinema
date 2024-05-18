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
    const {content, rating} = req.body;
    const update = { content: content, rating: rating };
    const doc = await Comment.findOneAndUpdate({cinema:req.params.cinema_id, user:req.user.id}, update, {
        new: true
    });
    if (!doc) {
        return errorResponse(res, 404, "Đã xảy ra lỗi");
    }
    else {
        return successResponse(res, 200, "Cập nhật thành công", doc);
    }
}

const deleteComment = async (req, res) => {
    const del = await Comment.deleteOne({
        id: req.body.id
    })
    if (del.deletedCount !== 0) {
        return successResponse(res, 200, "Delete success");
    } else {
        return errorResponse(res, 404, "Delete fail");
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