const Comment = require("../methods/mongoose");

const getAllComment = async () => {
    const result = await Comment.find({});
    return result;
}

const getCommentByCinemaId = async (cinema_id) => {
    const result = await Comment.findOne({
        cinema: cinema_id
    })
    return result;
}

module.exports = {
    getAllComment,
    getCommentByCinemaId
}