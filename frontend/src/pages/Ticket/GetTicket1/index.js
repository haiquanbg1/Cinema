import classNames from "classnames/bind";
import styles from "./GetTicket1.module.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck, faTimes, faInfoCircle, faDisplay } from '@fortawesome/free-solid-svg-icons';
import requestApi from "~/fetch";
import { useLocation } from "react-router-dom";

import { films } from "~/components/FilmList";

import { getShowtimes } from "./show";
import './index.css'

import Showtime from "../ShowTime";
import { useParams } from "react-router-dom";
import axios from "axios";
const cx = classNames.bind(styles)

const d = new Date();
const today = d.getFullYear() + '-' + (d.getMonth() < 10 ? ('0' + (d.getMonth() + 1)) : (d.getMonth() + 1)) + '-' + (d.getDate < 10 ? ('0' + d.getDate) : d.getDate());


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
                                    <div className={cx('birth-container')}>
                                        <div className={cx('birth-item', 'day')}>
                                            <div className={cx('birth-item-select')}>
                                                <select onChange={e => { setDay(e.target.value) }} value={day}>
                                                    <option value="">Chọn ngày</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>

                                                </select>

                                            </div>
                                        </div>
                                        <div className={cx('birth-item', 'month')}>
                                            <div className={cx('birth-item-select')}>
                                                <select onChange={e => setMonth(e.target.value)} value={month}>
                                                    <option value="">Chọn tháng</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={cx('birth-item', 'year')}>
                                            <div className={cx('birth-item-select')}>
                                                <select onChange={e => setYear(e.target.value)} value={year}>
                                                    <option value="">Chọn năm</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2023">2023</option>
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