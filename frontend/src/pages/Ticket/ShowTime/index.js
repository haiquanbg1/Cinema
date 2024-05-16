import styles from './Showtime.module.scss';
import classNames from "classnames/bind";

import Image from '~/components/Image';
import { getCinema } from './cinema';
import Showtimeitem from '../ShowTimeItem';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Showtime({ cinema_id, times, film, film_id }) {
    const [cinema, setCinema] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getCinema(cinema_id)
                setCinema(res)
                // console.log(res)
                // // setShowTimes(res.data.data)
                // // setCinema(res.data.booked)

            } catch (err) {
                console.log(err);
            }
        }
        fetchAPI();
    }
        , [])
    return (
        <div className="c-box" >
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <span style={{ display: 'block', width: '24px', height: '24px', marginRight: '10px' }}>
                            <Image src='https://www.bhdstar.vn/wp-content/uploads/2023/08/logo.png' ></Image>
                        </span>
                        <h4>{cinema.name}</h4>

                    </div>
                    <p>{cinema.address}</p>
                </div>

                {times.map((time, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <Showtimeitem cinema={cinema} time={time.time} id={time.showtime_id} film={film} film_id={film_id} ></Showtimeitem>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Showtime;
