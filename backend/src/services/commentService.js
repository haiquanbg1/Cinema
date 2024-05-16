const Comment = require("../methods/mongoose");

const getAllComment = async () => {
    const result = await Comment.find({});
    return result;
}

const getCommentByCinemaId = async (req, res) => {
    const result = await Comment.findOne({
        cinema_id: req.params.cinema_id
    })
    return result;
}

module.exports = {
    getAllComment,
    getCommentByCinemaId
}