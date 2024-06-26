import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './CountDown.module.scss'
import requestApi from '~/fetch';

import useCountdown from './useCountDown';

const cx = classNames.bind(styles)


function CountDown({ film, id }) {
    const endTime = new Date().getTime() + 60000 * 10; // 6 minutes
    const [timeLeft, setEndTime] = useCountdown(endTime);

    const minutes = Math.floor(timeLeft / 60000) % 60;
    const seconds = Math.floor(timeLeft / 1000) % 60;

    const navigate = useNavigate()
    useEffect(() => {
        if (minutes == 0 && seconds == 0) {
            requestApi(`seat/delete?showtime_id=${id}`, 'delete')
                .then(res => {
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error)
                })
            navigate(`/`)
        }
    }
        , [minutes, seconds])

    return (
        <div className={cx('timer')}>
            <p>{seconds != 0 ? `${minutes} phút ${seconds} giây` : `${minutes} phút`}</p>
        </div>
    );
}

export default CountDown;