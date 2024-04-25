const { Seat, booking_seat, Booking } = require('../models/index')

const getSeatBookedByShowtimeId = async (showtime_id) => {
    result = await Booking.findAll({
        where: {
            showtime_id: showtime_id
        },
        include: [{
            model: booking_seat,
            include: [{
                model: Seat,
                attributes: [
                    'name'
                ]
            }]
        }],
    })
}

module.exports = {
    getSeatBookedByShowtimeId
}