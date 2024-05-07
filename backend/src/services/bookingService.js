const { Booking } = require('../models/index')
const redis = require("../methods/redis")

const postBooking = async (showtime_id, user_id, pay) => {
    var data
    await Booking.create({
        showtime_id: showtime_id,
        user_id: user_id,
        pay: pay
    }).then(result => {
        data = result
    })
    return data
}

module.exports = {
    postBooking
}