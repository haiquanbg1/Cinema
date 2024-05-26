import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import { getAllCinemaPay, getCinemaPay6Month } from './chartData';
import styles from './Admin.module.scss'
import AllCinemaChart from "~/components/Chart/AllCinemaChart";
import CinemaMonthChart from '~/components/Chart/CinemeMonthChart';
import Chart from '~/components/Chart';

const cx = classNames.bind(styles)

function Admin() {
    const [month, setMonth] = useState(0)
    const [cinemaId, setCinemaId] = useState('0')
    const [allCinema, setAllCinema] = useState([])
    const [cinemaInMonth, setCinemaInMonth] = useState([])
    const [selected, setSelected] = useState(0)
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getAllCinemaPay(month)
                // console.log(id)
                setAllCinema(res.data.data)
                console.log(res.data.data)

            } catch (err) {
                console.log(err);
            }
        }
        fetchAPI()
    }
        , [month])

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getCinemaPay6Month(cinemaId)
                // console.log(id)
                // setAllCinema(res.data.data)
                setCinemaInMonth(res.data.data)
                console.log(res.data.data)

            } catch (err) {
                console.log(err);
            }
        }
        fetchAPI()
    }
        , [cinemaId])
    return (
        <div className={cx('wrapper')}>
            <div style={{ backgroundColor: '#0d0f13', height: '2300px' }} className={cx('col', 'large-2', 'menu')}>
                <h5 >Menu</h5>
                <p className={selected == 1 && cx('focus')} onClick={() => setSelected(1)} >Doanh thu tất cả các rạp</p>
                <p className={selected == 2 && cx('focus')} onClick={() => setSelected(2)}>Doanh thu từng rạp</p>
                <p className={selected == 3 && cx('focus')} onClick={() => setSelected(3)}>Doanh thu phim</p>
            </div>
            <div className={cx('col', 'large-10')}>
                {selected == 1 &&
                    <div>
                        <div className={cx('calendar-item', 'month')}>
                            <label>
                                Chọn tháng
                                <span> *</span>
                            </label>

                            <div className={cx('select')}>
                                <select className={cx('month-select')} onChange={e => setMonth(e.target.value)} value={month}>

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

                        <AllCinemaChart data={allCinema} />
                    </div>
                }

                {selected == 2 &&
                    <div>
                        <div className={cx('calendar-item', 'month')}>
                            <label>
                                Chọn rạp phim
                                <span> *</span>
                            </label>

                            <div className={cx('select')}>
                                <select className={cx('month-select')} onChange={e => setCinemaId(e.target.value)} value={cinemaId}>

                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                </select>
                            </div>
                        </div>

                        <CinemaMonthChart data={cinemaInMonth} />
                    </div>
                }

            </div>




        </div>

    );
}

export default Admin