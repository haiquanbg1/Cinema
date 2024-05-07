const { Showtime, Room } = require('../models/index')

const getRoomByShowtimeId = async (showtime_id) => {
    const showtime = await Showtime.findOne({
        where: {
            id: showtime_id
        }
    })
    const result = await Room.findOne({
        where: {
            id: showtime.room_id
        }
    })
    return result
}

const getAllRooms = async () => {
    result = await Room.findAll()
    return result
}

module.exports = {
    getAllRooms,
    getRoomByShowtimeId
}