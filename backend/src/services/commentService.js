const Comment = require("../methods/mongoose")
const { User } = require("../models/index")

const getAllComment = async () => {
    const result = await Comment.find({});
    return result;
}

const getCommentByCinemaId = async (cinema_id) => {
    var result = await Comment.find({
        cinema: cinema_id
    }).sort([['time', 'descending']])
    var cmt = []
    for (var i = 0; i < result.length; i++) {
        const u = await User.findOne({
            id: result[i].user
        })
        const comment = {
            id: result[i].id,
            cinema: result[i].cinema,
            content: result[i].content,
            rating: result[i].rating,
            user: result[i].user,
            name: u.firstName + " " + u.lastName,
            time: result[i].time
        }
        cmt.push(comment)
    }

    return cmt;
}

module.exports = {
    getAllComment,
    getCommentByCinemaId
}