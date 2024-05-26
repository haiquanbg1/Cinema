import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import { getAllCinemaPay, getCinemaPay6Month, getFilmPay } from './chartData';
import styles from './Admin.module.scss'
import AllCinemaChart from "~/components/Chart/AllCinemaChart";
import CinemaMonthChart from '~/components/Chart/CinemeMonthChart';
import AllFilmChart from '~/components/Chart/AllFilmChart';
import Chart from '~/components/Chart';

const cx = classNames.bind(styles)

function Admin() {
    const [month, setMonth] = useState(0)
    const [month1, setMonth1] = useState(0)
    const [cinemaId, setCinemaId] = useState('0')
    const [allCinema, setAllCinema] = useState([])
    const [cinemaInMonth, setCinemaInMonth] = useState([])
    const [filmPay, setFilmPay] = useState([])
    const [selected, setSelected] = useState(0)
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getAllCinemaPay(month)
                // console.log(id)
                setAllCinema(res.data.data)
                // console.log(res.data.data)

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
                // console.log(res.data.data)

            } catch (err) {
                console.log(err);
            }
        }
        fetchAPI()
    }
        , [cinemaId])

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getFilmPay(month1)
                // console.log(id)
                // setAllCinema(res.data.data)
                // setCinemaInMonth(res.data.data)
                setFilmPay(res.data.data)
                console.log(res.data.data)

            } catch (err) {
                console.log(err);
            }
        }
        fetchAPI()
    }
        , [month1])
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

                                    <option value={1}>BHD STAR THE GARDEN</option>
                                    <option value={2}>BHD STAR LÊ VĂN VIỆT</option>
                                    <option value={3}>BHD STAR PHẠM NGỌC THẠCH</option>
                                    <option value={4}>BHD STAR LONG KHÁNH</option>
                                    <option value={5}>BHD STAR PHẠM HÙNG</option>
                                    <option value={6}>BHD STAR QUANG TRUNG</option>
                                    <option value={7}>BHD STAR THẢO ĐIỀN</option>
                                    <option value={8}>BHD STAR HUẾ</option>
                                    <option value={9}>BHD STAR DISCOVERY</option>
                                    <option value={10}>BHD STAR 3/2</option>
                                </select>
                            </div>
                        </div>

                        <CinemaMonthChart data={cinemaInMonth} />
                    </div>
                }

                {selected == 3 &&
                    <div>
                        <div className={cx('calendar-item', 'month')}>
                            <label>
                                Chọn tháng
                                <span> *</span>
                            </label>

                            <div className={cx('select')}>
                                <select className={cx('month-select')} onChange={e => setMonth1(e.target.value)} value={month1}>

                                    {/* <option value="1">GODZILLA X KONG: THE NEW EMPIRE</option>
                                    <option value="2">TAROT</option>
                                    <option value="3">LUCA</option>
                                    <option value="4">LẬT MẶT 7: MỘT ĐIỀU ƯỚC</option>
                                    <option value="5">10 LIVES</option>
                                    <option value="6">THE GARFIELD MOVIE</option>
                                    <option value="7">DORAEMON THE MOVIE: NOBITA'S EARTH SYMPHONY</option>
                                    <option value="8">IF</option>
                                    <option value="9">APRIL, COME SHE WILL</option>
                                    <option value="10">FURIOSA: A MAD MAX SAGA</option>
                                    <option value="11">MÙA HÈ ĐẸP NHẤT</option>
                                    <option value="12">TOTTO-CHAN: THE LITTLE GIRL AT THE WINDOW</option>
                                    <option value="13">HOW TO MAKE MILLIONS BEFORE GRANDMA DIES</option>
                                    <option value="14">BAD BOYS: RIDE OR DIE</option>
                                    <option value="15">TILL WE MEET AGAIN ON THE LILY HILL</option> */}
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

                                    {/* <option value="11">11</option>
                                    <option value="12">12</option> */}
                                </select>
                            </div>
                        </div>

                        <AllFilmChart data={filmPay} />
                    </div>
                }

            </div>




        </div>

    );
}

export default Admin