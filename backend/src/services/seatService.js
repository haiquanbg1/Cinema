const { Seat, booking_seat, Booking, Showtime } = require('../models/index')
const redis = require("../methods/redis")

const getSeatBookedByShowtimeId = async (showtime_id) => {
    const seatBooked = `booked-showtime:${showtime_id}`
    const existsBooked = await redis.exists(seatBooked)
    if (existsBooked) {
        const seats = await redis.SMEMBERS(seatBooked)
        return seats
    } else {
        result = await Booking.findAll({
            where: {
                showtime_id: showtime_id
            },
            include: [{
                model: booking_seat,
                attributes: [
                    'seat_id',
                    'booking_id'
                ],
                include: [{
                    model: Seat,
                    attributes: [
                        'name'
                    ]
                }]
            }],
        })
        // lấy tên ghế
        var seats = []
        result.forEach((dataBooking) => {
            dataBooking.booking_seats.forEach((dataSeat) => {
                seats.push(dataSeat.Seat.name)
            })
        })
        // đẩy vào redis
        seats.forEach(async (e) => {
            await redis.sAdd(seatBooked, e)
        })
        return seats
    }
}

const refreshSeatBooking = async (showtime_id) => {
    const seatBooking = `booking-showtime:${showtime_id}`
    const seatBookingPrefix = `showtime:${showtime_id}-user:`
    const keys = await scanKeysStartingWith(seatBookingPrefix)
    await redis.del(seatBooking)
    keys.forEach(async element => {
        if (element.startsWith(seatBookingPrefix)) {
            const seat = await redis.sMembers(element)
            await redis.sAdd(seatBooking, seat)
        }
    })
}

const getSeatBookingByShowtimeId = async (showtime_id) => {
    const seatBooking = `booking-showtime:${showtime_id}`
    const result = await redis.sMembers(seatBooking)
    return result
}

const getSeatBookingByUser = async (showtime_id, user_id) => {
    const seatBookingByUser = `showtime:${showtime_id}-user:${user_id}`
    result = await redis.sMembers(seatBookingByUser)
    return result
}

const getSeatBooking = async (showtime_id) => {
    const seatBooking = `booking-showtime:${showtime_id}`
    const seatsBooking = await redis.sMembers(seatBooking)
    return seatsBooking
}

const getSeatBooked = async (showtime_id) => {
    const seatBooked = `booked-showtime:${showtime_id}`
    const seatsBooked = await redis.sMembers(seatBooked)
    return seatsBooked
}

const checkSeatBooked = async (showtime_id, seat) => {
    const seatBooked = `booked-showtime:${showtime_id}`
    const seatsBooked = await redis.sMembers(seatBooked)
    var ok = true
    seatsBooked.forEach(element => {
        if (seat === element) {
            ok = false
        }
    })
    return ok
}

const checkSeatBooking = async (showtime_id, seat) => {
    const seatBooking = `booking-showtime:${showtime_id}`
    const seatsBooking = await redis.sMembers(seatBooking)
    var ok = true
    seatsBooking.forEach(element => {
        if (seat === element) {
            ok = false
        }
    })
    return ok
}

const postSeatBooked = async (showtime_id, booking_id, seat_name, room_id) => {
    const seatBooked = `booked-showtime:${showtime_id}`
    const seat = await Seat.findOne({
        where: {
            name: seat_name,
            room_id: room_id
        }
    })
    await booking_seat.create({
        booking_id: booking_id,
        seat_id: seat.id
    })
    await redis.sAdd(seatBooked, seat_name)
}

const postSeatBooking = async (showtime_id, user_id, seat) => {
    const seatBookingByUser = `showtime:${showtime_id}-user:${user_id}`
    const seatBooking = `booking-showtime:${showtime_id}`
    await redis.sAdd(seatBookingByUser, seat)
    await redis.expire(seatBookingByUser, 10 * 60)
    await redis.sAdd(seatBooking, seat)
}

const deleteSeatBookingCache = async (showtime_id, user_id) => {
    const seatBooking = `booking-showtime:${showtime_id}`
    const seatBookingByUser = `showtime:${showtime_id}-user:${user_id}`
    const seats = await redis.sMembers(seatBookingByUser)
    if (seats[0]) {
        seats.forEach(async element => {
            await redis.sRem(seatBooking, element)
        })
        redis.del(seatBookingByUser)
        return 1
    } else {
        return 0
    }
}

const scanKeysStartingWith = async (prefix) => {
    try {
        const keys = [];
        let cursor = '0';
        const pattern = prefix + "*";

        do {
            const reply = await redis.scan(cursor);
            cursor = reply.cursor;
            keys.push(...reply.keys);
        } while (cursor != 0);

        return keys;
    } catch (error) {
        console.log(error)
    }
};

const getSeatUserBooking = async (showtime_id, user_id) => {
    const seatBookingByUser = `showtime:${showtime_id}-user:${user_id}`
    const result = await redis.sMembers(seatBookingByUser)
    return result
}

const getSeatByName = async (name) => {
    const seat = await Seat.findOne({
        where: {
            name: name
        }
    })
    return {
        name: name,
        type: seat.dataValues.type
    }
}


module.exports = {
    getSeatBookedByShowtimeId,
    checkSeatBooked,
    checkSeatBooking,
    postSeatBooked,
    postSeatBooking,
    deleteSeatBookingCache,
    getSeatBookingByUser,
    getSeatBooked,
    getSeatBooking,
    getSeatBookingByShowtimeId,
    refreshSeatBooking,
    getSeatUserBooking,
    getSeatByName
}