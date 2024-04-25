const Seat = require('../services/seatService')

const getAllSeatBooked = async (req, res) => {
    result = await Seat.getSeatBookedByShowtimeId(req.params.showtime_id)
    return res.status(200).json({
        data: result
    })
}