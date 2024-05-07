const Seat = require('../services/seatService')
const Booking = require('../services/bookingService')
const Room = require('../services/roomService')
const { successResponse, errorResponse } = require("../methods/response")

const getAllSeatBooked = async (req, res) => {
    try {
        result = await Seat.getSeatBookedByShowtimeId(req.query.showtime_id)
        return successResponse(res, 200, "Thành công", result)
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, "Đã có lỗi xảy ra")
    }
}

const postSeatBooked = async (req, res) => {
    try {
        const seats = await Seat.getSeatBookingByUser(req.query.showtime_id, req.user.id)
        // Tìm phòng của showtime
        const room = await Room.getRoomByShowtimeId(req.query.showtime_id)
        // Tạo một thanh toán mới
        const booking = await Booking.postBooking(req.query.showtime_id, req.user.id, req.body.pay)
        // console.log(result)
        seats.forEach(async element => {
            // Đẩy ghế đã đặt vào db
            await Seat.postSeatBooked(req.query.showtime_id, booking.id, element, room.id)
        })
        await Seat.deleteSeatBookingCache(req.query.showtime_id, req.user.id)
        return successResponse(res, 200, "Thành công", {})
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, "Đã có lỗi xảy ra")
    }
}

const checkSeatBook = (seats, seatsBook) => {
    let ok = true
    seatsBook.forEach(elementBook => {
        seats.forEach(element => {
            if (element === elementBook) {
                ok = false
            }
        })
    })
    return ok
}

const postSeatBooking = async (req, res) => {
    try {
        const seats = req.body.seats
        // Kiểm tra ghế đã book chưa
        seatsBooking = await Seat.getSeatBooking(req.query.showtime_id)
        seatsBooked = await Seat.getSeatBooked(req.query.showtime_id)
        const ok = checkSeatBook(seats, seatsBooked) && checkSeatBook(seats, seatsBooking)
        if (!ok) {
            return errorResponse(res, 400, "Đặt ghế không thành công")
        }
        seats.forEach(async element => {
            await Seat.postSeatBooking(req.query.showtime_id, req.user.id, element)
        })
        return successResponse(res, 200, "Thành công")
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, "Đã có lỗi xảy ra")
    }
}

const deleteSeatBookingCache = async (req, res) => {
    try {
        await Seat.deleteSeatBookingCache(req.query.showtime_id, req.user.id)
    } catch (error) {
        return errorResponse(res, 500, "Đã xảy ra lỗi")
    }
}

module.exports = {
    getAllSeatBooked,
    postSeatBooked,
    postSeatBooking,
    deleteSeatBookingCache
}