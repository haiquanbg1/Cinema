import styles from './Showtime.module.scss';
import classNames from "classnames/bind";

import Showtimeitem from '../ShowTimeItem';
const cx = classNames.bind(styles);

function Showtime({ times, film, film_id }) {

    return (
        <div className="c-box" >
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <h4></h4>
                    <p></p>
                </div>

                {times.map((time, index) => (
                    <div style={{ marginBottom: '20px' }}>
                        <Showtimeitem key={index} time={time.time} id={time.showtime_id} film={film} film_id={film_id} ></Showtimeitem>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Showtime;
