import classNames from "classnames/bind";
import styles from "./GetTicket2.module.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "~/components/Button";
import { getSeatBooked, getShowTime } from "./seat";
import requestApi from "~/fetchAPI";
import Seat from "~/components/Seat";




const cx = classNames.bind(styles);
const list = [[{ id: 'A1', type: 'standard' }
    , { id: 'A2', type: 'standard' }
    , { id: 'A3', type: 'standard' }
    , { id: 'A4', type: 'standard' }
    , { id: 'A5', type: 'standard' }
    , { id: 'A6', type: 'standard' }
    , { id: 'A7', type: 'standard' }
    , { id: 'A8', type: 'standard' }
    , { id: 'A9', type: 'standard' }
    , { id: 'A10', type: 'standard' }
    , { id: 'A11', type: 'standard' }
    , { id: 'A12', type: 'standard' }
    , { id: 'A13', type: 'standard' }
    , { id: 'A14', type: 'standard' }
    , { id: 'A15', type: 'standard' }
    , { id: 'A16', type: 'standard' }]
    , [{ id: 'B1', type: 'standard' }
    , { id: 'B2', type: 'standard' }
    , { id: 'B3', type: 'standard' }
    , { id: 'B4', type: 'standard' }
    , { id: 'B5', type: 'standard' }
    , { id: 'B6', type: 'standard' }
    , { id: 'B7', type: 'standard' }
    , { id: 'B8', type: 'standard' }
    , { id: 'B9', type: 'standard' }
    , { id: 'B10', type: 'standard' }
    , { id: 'B11', type: 'standard' }
    , { id: 'B12', type: 'standard' }
    , { id: 'B13', type: 'standard' }
    , { id: 'B14', type: 'standard' }
    , { id: 'B15', type: 'standard' }
    , { id: 'B16', type: 'standard' }]
    , [{ id: 'C1', type: 'standard' }
    , { id: 'C2', type: 'standard' }
    , { id: 'C3', type: 'standard' }
    , { id: 'C4', type: 'standard' }
    , { id: 'C5', type: 'standard' }
    , { id: 'C6', type: 'standard' }
    , { id: 'C7', type: 'standard' }
    , { id: 'C8', type: 'standard' }
    , { id: 'C9', type: 'standard' }
    , { id: 'C10', type: 'standard' }
    , { id: 'C11', type: 'standard' }
    , { id: 'C12', type: 'standard' }
    , { id: 'C13', type: 'standard' }
    , { id: 'C14', type: 'standard' }
    , { id: 'C15', type: 'standard' }
    , { id: 'C16', type: 'standard' }]
    , [{ id: 'D1', type: 'standard' }
    , { id: 'D2', type: 'standard' }
    , { id: 'D3', type: 'standard' }
    , { id: 'D4', type: 'standard' }
    , { id: 'D5', type: 'vip' }
    , { id: 'D6', type: 'vip' }
    , { id: 'D7', type: 'vip' }
    , { id: 'D8', type: 'vip' }
    , { id: 'D9', type: 'vip' }
    , { id: 'D10', type: 'vip' }
    , { id: 'D11', type: 'vip' }
    , { id: 'D12', type: 'vip' }
    , { id: 'D13', type: 'standard' }
    , { id: 'D14', type: 'standard' }
    , { id: 'D15', type: 'standard' }
    , { id: 'D16', type: 'standard' }]
    , [{ id: 'E1', type: 'standard' }
    , { id: 'E2', type: 'standard' }
    , { id: 'E3', type: 'standard' }
    , { id: 'E4', type: 'standard' }
    , { id: 'E5', type: 'vip' }
    , { id: 'E6', type: 'vip' }
    , { id: 'E7', type: 'vip' }
    , { id: 'E8', type: 'vip' }
    , { id: 'E9', type: 'vip' }
    , { id: 'E10', type: 'vip' }
    , { id: 'E11', type: 'vip' }
    , { id: 'E12', type: 'vip' }
    , { id: 'E13', type: 'standard' }
    , { id: 'E14', type: 'standard' }
    , { id: 'E15', type: 'standard' }
    , { id: 'E16', type: 'standard' }]
    , [{ id: 'F1', type: 'standard' }
    , { id: 'F2', type: 'standard' }
    , { id: 'F3', type: 'standard' }
    , { id: 'F4', type: 'standard' }
    , { id: 'F5', type: 'vip' }
    , { id: 'F6', type: 'vip' }
    , { id: 'F7', type: 'vip' }
    , { id: 'F8', type: 'vip' }
    , { id: 'F9', type: 'vip' }
    , { id: 'F10', type: 'vip' }
    , { id: 'F11', type: 'vip' }
    , { id: 'F12', type: 'vip' }
    , { id: 'F13', type: 'standard' }
    , { id: 'F14', type: 'standard' }
    , { id: 'F15', type: 'standard' }
    , { id: 'F16', type: 'standard' }]
    , [{ id: 'G1', type: 'standard' }
    , { id: 'G2', type: 'standard' }
    , { id: 'G3', type: 'standard' }
    , { id: 'G4', type: 'standard' }
    , { id: 'G5', type: 'vip' }
    , { id: 'G6', type: 'vip' }
    , { id: 'G7', type: 'vip' }
    , { id: 'G8', type: 'vip' }
    , { id: 'G9', type: 'vip' }
    , { id: 'G10', type: 'vip' }
    , { id: 'G11', type: 'vip' }
    , { id: 'G12', type: 'vip' }
    , { id: 'G13', type: 'standard' }
    , { id: 'G14', type: 'standard' }
    , { id: 'G15', type: 'standard' }
    , { id: 'G16', type: 'standard' }]
    , [{ id: 'H1', type: 'standard' }
    , { id: 'H2', type: 'standard' }
    , { id: 'H3', type: 'standard' }
    , { id: 'H4', type: 'standard' }
    , { id: 'H5', type: 'vip' }
    , { id: 'H6', type: 'vip' }
    , { id: 'H7', type: 'vip' }
    , { id: 'H8', type: 'vip' }
    , { id: 'H9', type: 'vip' }
    , { id: 'H10', type: 'vip' }
    , { id: 'H11', type: 'vip' }
    , { id: 'H12', type: 'vip' }
    , { id: 'H13', type: 'standard' }
    , { id: 'H14', type: 'standard' }
    , { id: 'H15', type: 'standard' }
    , { id: 'H16', type: 'standard' }]
    , [{ id: 'I1', type: 'standard' }
    , { id: 'I2', type: 'standard' }
    , { id: 'I3', type: 'standard' }
    , { id: 'I4', type: 'standard' }
    , { id: 'I5', type: 'vip' }
    , { id: 'I6', type: 'vip' }
    , { id: 'I7', type: 'vip' }
    , { id: 'I8', type: 'vip' }
    , { id: 'I9', type: 'vip' }
    , { id: 'I10', type: 'vip' }
    , { id: 'I11', type: 'vip' }
    , { id: 'I12', type: 'vip' }
    , { id: 'I13', type: 'standard' }
    , { id: 'I14', type: 'standard' }
    , { id: 'I15', type: 'standard' }
    , { id: 'I16', type: 'standard' }]
    , [{ id: 'I1', type: 'couple' }
    , { id: 'I2', type: 'couple' }
    , { id: 'I3', type: 'standard' }
    , { id: 'I4', type: 'couple' }
    , { id: 'I5', type: 'couple' }
    , { id: 'I6', type: 'vip' }
    , { id: 'I7', type: 'couple' }
    , { id: 'I8', type: 'couple' }
    , { id: 'I9', type: 'vip' }
    , { id: 'I10', type: 'couple' }
    , { id: 'I11', type: 'couple' }
    , { id: 'I12', type: 'vip' }
    , { id: 'I13', type: 'couple' }
    , { id: 'I14', type: 'couple' }
    , { id: 'I15', type: 'standard' }
    , { id: 'I16', type: 'standard' }]
]


function GetTicket2() {
    const [seats, setSeats] = useState([])
    const [listDisable, setListDisable] = useState([])
    const [listBooking, setListBooking] = useState([])
    const [showTime, setShowTime] = useState({})
    const [price, setPrice] = useState(0)
    // const [film, setFilm] = useState({})
    const params = useParams();

    const location = useLocation()
    const { film, id, film_id, cinema } = location.state


    const navigate = useNavigate()

    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }


    const addId = (id) => {
        let tmp1 = 0;
        let idx = -1
        if (id.type == 'standard') {
            tmp1 = showTime.price
        } else if (id.type == 'vip') {
            tmp1 = showTime.price * 1.1
        } else {
            tmp1 = showTime.price * 1.2
        }
        seats.forEach((element, index) => {
            if (id.name == element.name) {
                idx = index
                return
            }
        })
        if (idx == -1) {
            setSeats([...seats, id])
            setPrice(price + tmp1)
        }
        else {
            let tmp = [...seats]
            tmp.splice(idx, 1)
            setSeats(tmp)
            setPrice(price - tmp1)

        }
    }

    const clickDisable = () => {
        toast.error('Ghế đã được đặt')
    }

    // useEffect(() => {
    //     requestApi(`seat/delete?showtime_id=${params.id}`, 'delete')
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // })


    const handleClick = async () => {
        let tmp = seats.map((element) => {
            return element.name
        })
        await requestApi(`seat/delete?showtime_id=${params.id}`, 'delete')
            .then(res => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })

        await requestApi(`seat/booking?showtime_id=${params.id}`, 'post', tmp)
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log(err))



        navigate(`/get-ticket/${film}/${id}/thanh-toan`, { state: { film, id, cinema, showTime, seats, price } })
    }



    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getSeatBooked(params.id)
                console.log(res)
                // setShowTimes(res.data.data)
                setListDisable(res.data.data.booked)
                setListBooking(res.data.data.booking)
            } catch (err) {
                console.log(err);
            }
        }
        fetchAPI();
    }, [])

    // useEffect(() => {
    //     requestApi(`seat/user/booking?showtime_id=${params.id}`, 'get')
    //         .then(res => {
    //             const my_booking = res.data.data.forEach(element => {
    //                 addId({ id: element, type: 'standard' })
    //             })
    //             console.log(my_booking)
    //             // setListBooking(prevState => {
    //             //     prevState.filter(element => {
    //             //         return !my_booking.includes(element.id)
    //             //     })
    //             // })
    //             // setSeats(my_booking)

    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getShowTime(params.id)
                // setShowTimes(res.data.data)


                setShowTime(res.data.data)

            } catch (err) {
                console.log(err);
            }
        }
        fetchAPI();
    }, [])

    return (
        <div>
            <h1 style={{ color: 'white', fontSize: '26px', fontWeight: '800', textAlign: 'center', margin: '30px' }}>Bước 2: Chọn ghế</h1>
            <div className={cx('large-12', 'col')}>
                <div className={cx('col-inner')}>
                    <div id="app" style={{ display: 'flex' }}>
                        <div className={cx('large-8', 'col')}>
                            <div className={cx('col-inner')}>
                                <div className={cx('cinema-map-container')}>
                                    <div className={cx('map-body')}>
                                        <table>
                                            <tr>
                                                <td></td>
                                                <td colSpan={'17'}>
                                                    <div className={cx('map-header')}></div>
                                                    <div className={cx('seat-types', 'row', 'row-small')} style={{ marginTop: '30px', marginBottom: '15px', alignItems: 'center' }}>
                                                        <div className={cx('col', 'large-4')}>
                                                            <div className={cx("col-inner", 'seat-container')}>
                                                                <div className={cx('icon')}>
                                                                    <span className={cx('seat-icon', 'standard')}></span>
                                                                </div>
                                                                <div className={cx('icon-text')}>Ghế thường</div>
                                                            </div>
                                                        </div>

                                                        <div className={cx('col', 'large-4')}>
                                                            <div className={cx("col-inner", 'seat-container')}>
                                                                <div className={cx('icon')}>
                                                                    <span className={cx('seat-icon', 'vip')}></span>
                                                                </div>
                                                                <div className={cx('icon-text')}>Ghế vip</div>
                                                            </div>
                                                        </div>

                                                        <div className={cx('col', 'large-4')}>
                                                            <div className={cx("col-inner", 'seat-container')}>
                                                                <div className={cx('icon')}>
                                                                    <span className={cx('seat-icon', 'couple')}></span>
                                                                </div>
                                                                <div className={cx('icon-text')}>Ghế đôi</div>
                                                            </div>
                                                        </div>

                                                        <div className={cx('col', 'large-4')}>
                                                            <div className={cx("col-inner", 'seat-container')}>
                                                                <div className={cx('icon')}>
                                                                    <span className={cx('seat-icon', 'selected')}></span>
                                                                </div>
                                                                <div className={cx('icon-text')}>Ghế đã chọn</div>
                                                            </div>
                                                        </div>

                                                        <div className={cx('col', 'large-4')}>
                                                            <div className={cx("col-inner", 'seat-container')}>
                                                                <div className={cx('icon')}>
                                                                    <span className={cx('seat-icon', 'booking')}></span>
                                                                </div>
                                                                <div className={cx('icon-text')}>Ghế đang đặt</div>
                                                            </div>
                                                        </div>

                                                        <div className={cx('col', 'large-4')}>
                                                            <div className={cx("col-inner", 'seat-container')}>
                                                                <div className={cx('icon')}>
                                                                    <span className={cx('seat-icon', 'disable')}></span>
                                                                </div>
                                                                <div className={cx('icon-text')}>Ghế đã bán</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>A</td>
                                                {list[0].map((seat) => (
                                                    listDisable.includes(seat.id) ?
                                                        <td>
                                                            <div onClick={() => clickDisable()}>
                                                                <Seat key={seat.id} id={seat.id} type='disable'></Seat>
                                                            </div>
                                                        </td>
                                                        :
                                                        listBooking.includes(seat.id) ?
                                                            <td>
                                                                <div onClick={() => clickDisable()}>
                                                                    <Seat key={seat.id} id={seat.id} type='booking'></Seat>
                                                                </div>
                                                            </td>
                                                            :
                                                            <td>
                                                                <div onClick={() => addId({ name: seat.id, type: seat.type })}>
                                                                    <Seat key={seat.id} id={seat.id} type={seat.type}></Seat>
                                                                </div>
                                                            </td>
                                                ))}

                                                <td>
                                                </td>
                                                <td>A</td>
                                            </tr>
                                            <tr>
                                                <td>B</td>
                                                {list[1].map((seat) => (
                                                    listDisable.includes(seat.id) ?
                                                        <td>
                                                            <div onClick={() => clickDisable()}>
                                                                <Seat key={seat.id} id={seat.id} type='disable'></Seat>
                                                            </div>
                                                        </td>
                                                        :
                                                        listBooking.includes(seat.id) ?
                                                            <td>
                                                                <div onClick={() => clickDisable()}>
                                                                    <Seat key={seat.id} id={seat.id} type='booking'></Seat>
                                                                </div>
                                                            </td>
                                                            :
                                                            <td>
                                                                <div onClick={() => addId({ name: seat.id, type: seat.type })}>
                                                                    <Seat key={seat.id} id={seat.id} type={seat.type}></Seat>
                                                                </div>
                                                            </td>
                                                ))}
                                                <td>
                                                </td>
                                                <td>B</td>
                                            </tr>
                                            <tr>
                                                <td>C</td>
                                                {list[2].map((seat) => (
                                                    listDisable.includes(seat.id) ?
                                                        <td>
                                                            <div onClick={() => clickDisable()}>
                                                                <Seat key={seat.id} id={seat.id} type='disable'></Seat>
                                                            </div>
                                                        </td>
                                                        :
                                                        listBooking.includes(seat.id) ?
                                                            <td>
                                                                <div onClick={() => clickDisable()}>
                                                                    <Seat key={seat.id} id={seat.id} type='booking'></Seat>
                                                                </div>
                                                            </td>
                                                            :
                                                            <td>
                                                                <div onClick={() => addId({ name: seat.id, type: seat.type })}>
                                                                    <Seat key={seat.id} id={seat.id} type={seat.type}></Seat>
                                                                </div>
                                                            </td>
                                                ))}
                                                <td>
                                                </td>
                                                <td>C</td>
                                            </tr>
                                            <tr>
                                                <td>D</td>
                                                {list[3].map((seat) => (
                                                    listDisable.includes(seat.id) ?
                                                        <td>
                                                            <div onClick={() => clickDisable()}>
                                                                <Seat key={seat.id} id={seat.id} type='disable'></Seat>
                                                            </div>
                                                        </td>
                                                        :
                                                        listBooking.includes(seat.id) ?
                                                            <td>
                                                                <div onClick={() => clickDisable()}>
                                                                    <Seat key={seat.id} id={seat.id} type='booking'></Seat>
                                                                </div>
                                                            </td>
                                                            :
                                                            <td>
                                                                <div onClick={() => addId({ name: seat.id, type: seat.type })}>
                                                                    <Seat key={seat.id} id={seat.id} type={seat.type}></Seat>
                                                                </div>
                                                            </td>
                                                ))}
                                                <td>
                                                </td>
                                                <td>D</td>
                                            </tr>
                                            <tr>
                                                <td>E</td>
                                                {list[4].map((seat) => (
                                                    listDisable.includes(seat.id) ?
                                                        <td>
                                                            <div onClick={() => clickDisable()}>
                                                                <Seat key={seat.id} id={seat.id} type='disable'></Seat>
                                                            </div>
                                                        </td>
                                                        :
                                                        listBooking.includes(seat.id) ?
                                                            <td>
                                                                <div onClick={() => clickDisable()}>
                                                                    <Seat key={seat.id} id={seat.id} type='booking'></Seat>
                                                                </div>
                                                            </td>
                                                            :
                                                            <td>
                                                                <div onClick={() => addId({ name: seat.id, type: seat.type })}>
                                                                    <Seat key={seat.id} id={seat.id} type={seat.type}></Seat>
                                                                </div>
                                                            </td>
                                                ))}
                                                <td>
                                                </td>
                                                <td>E</td>
                                            </tr>
                                            <tr>
                                                <td>F</td>
                                                {list[5].map((seat) => (
                                                    listDisable.includes(seat.id) ?
                                                        <td>
                                                            <div onClick={() => clickDisable()}>
                                                                <Seat key={seat.id} id={seat.id} type='disable'></Seat>
                                                            </div>
                                                        </td>
                                                        :
                                                        listBooking.includes(seat.id) ?
                                                            <td>
                                                                <div onClick={() => clickDisable()}>
                                                                    <Seat key={seat.id} id={seat.id} type='booking'></Seat>
                                                                </div>
                                                            </td>
                                                            :
                                                            <td>
                                                                <div onClick={() => addId({ name: seat.id, type: seat.type })}>
                                                                    <Seat key={seat.id} id={seat.id} type={seat.type}></Seat>
                                                                </div>
                                                            </td>
                                                ))}
                                                <td>
                                                </td>
                                                <td>F</td>
                                            </tr>
                                            <tr>
                                                <td>G</td>
                                                {list[6].map((seat) => (
                                                    listDisable.includes(seat.id) ?
                                                        <td>
                                                            <div onClick={() => clickDisable()}>
                                                                <Seat key={seat.id} id={seat.id} type='disable'></Seat>
                                                            </div>
                                                        </td>
                                                        :
                                                        listBooking.includes(seat.id) ?
                                                            <td>
                                                                <div onClick={() => clickDisable()}>
                                                                    <Seat key={seat.id} id={seat.id} type='booking'></Seat>
                                                                </div>
                                                            </td>
                                                            :
                                                            <td>
                                                                <div onClick={() => addId({ name: seat.id, type: seat.type })}>
                                                                    <Seat key={seat.id} id={seat.id} type={seat.type}></Seat>
                                                                </div>
                                                            </td>
                                                ))}
                                                <td>
                                                </td>
                                                <td>G</td>
                                            </tr>
                                            <tr>
                                                <td>H</td>
                                                {list[7].map((seat) => (
                                                    listDisable.includes(seat.id) ?
                                                        <td>
                                                            <div onClick={() => clickDisable()}>
                                                                <Seat key={seat.id} id={seat.id} type='disable'></Seat>
                                                            </div>
                                                        </td>
                                                        :
                                                        listBooking.includes(seat.id) ?
                                                            <td>
                                                                <div onClick={() => clickDisable()}>
                                                                    <Seat key={seat.id} id={seat.id} type='booking'></Seat>
                                                                </div>
                                                            </td>
                                                            :
                                                            <td>
                                                                <div onClick={() => addId({ name: seat.id, type: seat.type })}>
                                                                    <Seat key={seat.id} id={seat.id} type={seat.type}></Seat>
                                                                </div>
                                                            </td>
                                                ))}
                                                <td>
                                                </td>
                                                <td>H</td>
                                            </tr>
                                            <tr>
                                                <td>I</td>
                                                {list[8].map((seat) => (
                                                    listDisable.includes(seat.id) ?
                                                        <td>
                                                            <div onClick={() => clickDisable()}>
                                                                <Seat key={seat.id} id={seat.id} type='disable'></Seat>
                                                            </div>
                                                        </td>
                                                        :
                                                        listBooking.includes(seat.id) ?
                                                            <td>
                                                                <div onClick={() => clickDisable()}>
                                                                    <Seat key={seat.id} id={seat.id} type='booking'></Seat>
                                                                </div>
                                                            </td>
                                                            :
                                                            <td>
                                                                <div onClick={() => addId({ name: seat.id, type: seat.type })}>
                                                                    <Seat key={seat.id} id={seat.id} type={seat.type}></Seat>
                                                                </div>
                                                            </td>
                                                ))}
                                                <td>
                                                </td>
                                                <td>I</td>
                                            </tr>
                                            <tr>
                                                <td>J</td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J1" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J2" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J4" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J5" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J7" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J8" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J10" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J11" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J13" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J14" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>

                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                </td>
                                                <td>J</td>
                                            </tr>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col', 'large-4')}>
                            <div className={cx('col-inner')}>
                                <div className={cx('c-box')}>
                                    <h4 >{cinema.name}</h4>
                                    {showTime.time ?
                                        <span ><span >Screen {showTime.room_id}</span> - {(showTime.time.slice(8, 10))} / {(showTime.time.slice(5, 7))} / {(showTime.time.slice(0, 4))} - Suất chiếu: {(showTime.time.slice(11, 13))}h{(showTime.time.slice(14, 16))}</span>
                                        : <span></span>
                                    }

                                    <hr />

                                    <h3 style={{ marginBottom: '10px', color: '#72be43' }} >{film}</h3>
                                    <div className={cx('seat-selected')}>
                                        {/* 
                                        <span >Chưa có ghế được chọn vui lòng chọn ghế</span> */}
                                        <h4>Ghế đã chọn</h4>
                                        {seats.map((seat, index) => (
                                            <span key={index}>{seat.name}</span>
                                        ))}

                                    </div>
                                    <hr />
                                    {
                                        seats.length ?
                                            <div className={cx('price')}>
                                                <h3>Tổng tiền</h3>
                                                <h2>{formatNumber(price)} VNĐ</h2>
                                            </div>
                                            :
                                            <div></div>
                                    }

                                    <div >
                                        <Button disabled={seats.length === 0} onClick={() => handleClick()} className={'back'} primary stretch>Tiến hành thanh toán</Button>

                                    </div>



                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetTicket2;