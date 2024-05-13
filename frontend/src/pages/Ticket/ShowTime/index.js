import styles from './Showtime.module.scss';
import classNames from "classnames/bind";

import Showtimeitem from '../ShowTimeItem';
const cx = classNames.bind(styles);

function Showtime({ address, times, film }) {

    return (
        <div className="c-box" >
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <h4>{address}</h4>
                    <p></p>
                </div>

                {times.map((time, index) => (
                    <div style={{ marginBottom: '20px' }}>
                        <Showtimeitem key={index} time={time.time} id={time.showtime_id} film={film} ></Showtimeitem>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Showtime;
