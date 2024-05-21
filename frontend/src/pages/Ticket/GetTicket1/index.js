import classNames from "classnames/bind";
import styles from "./GetTicket1.module.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck, faTimes, faInfoCircle, faDisplay } from '@fortawesome/free-solid-svg-icons';
import requestApi from "~/fetch";
import { useLocation } from "react-router-dom";

import { films } from "~/pages/Home";

import { getShowtimes } from "./show";
import './index.css'

import Showtime from "../ShowTime";
import { useParams } from "react-router-dom";
import axios from "axios";
const cx = classNames.bind(styles)

const d = new Date();
const today = d.getFullYear() + '-' + (d.getMonth() < 10 ? ('0' + (d.getMonth() + 1)) : (d.getMonth() + 1)) + '-' + (d.getDate < 10 ? ('0' + d.getDate) : d.getDate());
const day_today = d.getDate()

const GetTicket1 = () => {

    const [date, setDate] = useState(today);
    const [day, setDay] = useState(d.getDate());
    const [month, setMonth] = useState(d.getMonth() + 1);
    const [year, setYear] = useState(d.getFullYear());

    const [showTime, setShowTime] = useState([]);

    const [showTimes, setShowTimes] = useState([])
    const params = useParams();

    const location = useLocation()
    const getCheck = () => {
        let tmp = 0
        for (let i in films) {
            if (params.id == films[i].title) {
                tmp = films[i].id
                break
            }
        }
        // console.log(tmp)
        return tmp
    }

    const id = getCheck()

    const getTime = () => {
        console.log(date)
        let tmp = []

        const tmp2 = {}
        for (let x of showTimes) {
            const Date = x.time.slice(0, 10);
            const Time = x.time.slice(11, 16);
            let cinema_id = x.Room.cinema_id
            if (x.Film.title == params.id && Date == date) {
                // console.log(1)
                if (!tmp2.cinema_id) {
                    tmp2[cinema_id] = []
                    tmp2[cinema_id].push({
                        time: Time,
                        showtime_id: x.id
                    })
                } else {
                    tmp2[cinema_id].push({
                        time: Time,
                        showtime_id: x.id
                    })
                }
            }
        }
        for (let key in tmp2) {
            let tmp3 = {}
            tmp3.id = key
            tmp3.time = tmp2[key]
            tmp.push(tmp3)
        }
        setShowTime(tmp)

    }

    // useEffect(() => {
    //     setDate(year + '-' + (month < 10 ? ('0' + (month + 1)) : (month + 1)) + '-' + (day < 10 ? ('0' + day) : day));
    //     getTime();
    // }, [])

    useEffect(() => {
        setDate(year + '-' + (month < 10 ? ('0' + (month)) : (month)) + '-' + (day < 10 ? ('0' + day) : day));

    }, [day, month, year])

    useEffect(() => {
        getTime();
    }, [date])


    useEffect(() => {
        //phải lấy được film_id
        const fetchAPI = async () => {
            try {
                const res = await getShowtimes(id)
                // console.log(id)
                console.log(res.data.data)
                setShowTimes(res.data.data)
            } catch (err) {
                console.log(err);
            }
        }

        fetchAPI();
    }, [])

    if (id != 0) {
        return (
            <div>
                <h1 style={{ color: 'white', fontSize: '22px', textAlign: 'center', margin: '30px' }}>Bước 1: Chọn thời gian và địa điểm</h1>

                <div className={cx('content-container')}>
                    <div className={cx('col', 'large-4')}>
                        <div className={cx('col-inner')}>
                            <div className={cx('c-box')}>
                                <div className={cx('calendar')}>
                                    <div className={cx('calendar-container')}>
                                        <div className={cx('calendar-item', 'day')}>
                                            <label>
                                                Chọn ngày
                                                <span> *</span>
                                            </label>
                                            <div className={cx('select')}>
                                                <select onChange={e => { setDay(e.target.value) }} value={day} className={cx('day-select')}>

                                                    <option disabled={d.getMonth() == month - 1 && day_today > 1} value="1">1</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 2} value="2">2</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 3} value="3">3</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 4} value="4">4</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 5} value="5">5</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 6} value="6">6</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 7} value="7">7</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 8} value="8">8</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 9} value="9">9</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 10} value="10">10</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 11} value="11">11</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 12} value="12">12</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 13} value="13">13</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 14} value="14">14</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 15} value="15">15</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 16} value="16">16</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 17} value="17">17</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 18} value="18">18</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 19} value="19">19</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 20} value="20">20</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 21} value="21">21</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 22} value="22">22</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 23} value="23">23</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 24} value="24">24</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 25} value="25">25</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 26} value="26">26</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 27} value="27">27</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 28} value="28">28</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 29} value="29">29</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 30} value="30">30</option>
                                                    <option disabled={d.getMonth() == month - 1 && day_today > 31} value="31">31</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className={cx('calendar-item', 'month')}>
                                            <label>
                                                Chọn tháng
                                                <span> *</span>
                                            </label>

                                            <div className={cx('select')}>
                                                <select className={cx('month-select')} onChange={e => setMonth(e.target.value)} value={month}>

                                                    <option disabled={d.getMonth() > 0} value="1">1</option>
                                                    <option disabled={d.getMonth() > 1} value="2">2</option>
                                                    <option disabled={d.getMonth() > 2} value="3">3</option>
                                                    <option disabled={d.getMonth() > 3} value="4">4</option>
                                                    <option disabled={d.getMonth() > 4} value="5">5</option>
                                                    <option disabled={d.getMonth() > 5} value="6">6</option>
                                                    <option disabled={d.getMonth() > 6} value="7">7</option>
                                                    <option disabled={d.getMonth() > 7} value="8">8</option>
                                                    <option disabled={d.getMonth() > 8} value="9">9</option>
                                                    <option disabled={d.getMonth() > 9} value="10">10</option>
                                                    <option disabled={d.getMonth() > 10} value="11">11</option>
                                                    <option disabled={d.getMonth() > 11} value="12">12</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={cx('calendar-item', 'year')}>
                                            <label>
                                                Chọn năm
                                                <span> *</span>
                                            </label>
                                            <div className={cx('select')}>
                                                <select className={cx('year-select')} onChange={e => setYear(e.target.value)} value={year}>

                                                    <option value="2024">2024</option>

                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'large-12')}>
                        <div className={cx('col-inner')}>
                            <div className={cx('c-box')}>
                                <div className={cx('showTime-container')}>

                                    {
                                        showTime.map((st, index) => (
                                            <div key={index} style={{ marginBottom: '20px' }}>
                                                <Showtime cinema_id={st.id} times={st.time} film={params.id} film_id={id} />
                                            </div>
                                        ))
                                    }




                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
    else {
        return (
            <div className={cx('row')}>
                <div className={cx('col', 'large-12')} style={{ display: 'flex', justifyContent: 'center' }}>
                    <span style={{ fontSize: '6em', fontWeight: 'bold', opacity: '0.3' }}>404</span>
                </div>

                <div className={cx('col', 'large-12')}>
                    <header style={{ display: 'flex', justifyContent: 'center', color: 'white' }} >
                        <h1 >Xin lỗi, trang này không tồn tại!</h1>
                    </header>
                    <div style={{ display: 'flex', justifyContent: 'center', color: 'white' }} >
                        <p>Không có nội dung ở trang này. Vui lòng thử lại ở đường link khác!</p>
                    </div>
                </div>
            </div>
        )


    }
}


export default GetTicket1;