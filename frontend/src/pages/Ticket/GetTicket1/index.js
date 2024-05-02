import classNames from "classnames/bind";
import styles from "./GetTicket1.module.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck, faTimes, faInfoCircle, faDisplay } from '@fortawesome/free-solid-svg-icons';
import './index.css'

import Showtime from "../ShowTime";
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles)

const showTimes = [
    {
        film: 'boat',
        date: '2024-04-28',
        time: '8:00',
        address: 'Vincom Pham Ngoc Thach'
    },
    {
        film: 'boat',
        date: '2024-04-28',
        time: '8:00',
        address: 'Vincom Tran Duy Hung'
    },
    {
        film: 'boat',
        date: '2024-04-28',
        time: '10:00',
        address: 'Vincom Pham Ngoc Thach'
    },
    {
        film: 'boat',
        date: '2024-04-28',
        time: '11:00',
        address: 'Vincom Tran Duy Hung'
    },
    {
        film: 'boat',
        date: '2024-04-28',
        time: '16:00',
        address: 'Vincom Pham Ngoc Thach'
    },
    {
        film: 'boat',
        date: '2024-04-29',
        time: '10:00',
        address: 'Vincom Pham Ngoc Thach'
    },
    {
        film: 'boat',
        date: '2024-04-29',
        time: '16:00',
        address: 'Vincom Tran Duy Hung'
    },
    {
        film: 'boat',
        date: '2024-04-29',
        time: '16:00',
        address: 'Vincom Tran Duy Hung'
    }, {
        film: 'boat',
        date: '2024-04-29',
        time: '16:00',
        address: 'Vincom Tran Duy Hung'
    }
]

const d = new Date();
const today = d.getFullYear() + '-' + (d.getMonth() < 10 ? ('0' + (d.getMonth() + 1)) : (d.getMonth() + 1)) + '-' + (d.getDate < 10 ? ('0' + d.getDate) : d.getDate());


function GetTicket1() {
    const [date, setDate] = useState(today);
    const [day, setDay] = useState(d.getDate());
    const [month, setMonth] = useState(d.getMonth());
    const [year, setYear] = useState(d.getFullYear());

    const [showTime, setShowTime] = useState([]);

    const params = useParams();

    const getTime = () => {
        let tmp = []
        for (let x in showTimes) {
            if (showTimes[x].date == date && showTimes[x].film == params.id) {
                tmp.push(showTimes[x])
            }

        }
        setShowTime(tmp)
    }

    useEffect(() => {
        setDate(year + '-' + (month < 10 ? ('0' + (month + 1)) : (month + 1)) + '-' + (day < 10 ? ('0' + day) : day));
        getTime();
    }, [day, month, year])


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
                                            <select onChange={e => { setDay(e.target.value) }} name="birthday_day">
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
                                            <select onChange={e => setMonth(e.target.value)} name="birthday_month">
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
                                            <select onChange={e => setYear(e.target.value)} name="birthday_year">
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
                                {showTime.map((st, index) => (
                                    <Showtime key={index} address={st.address} times={st.time} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default GetTicket1;