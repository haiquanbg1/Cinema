import styles from './Showtimeitem.module.scss';
import classNames from "classnames/bind";
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);



function Showtimeitem({ cinema, time, id, film, film_id }) {
    const navigate = useNavigate()

    const handleClick = () => {
        if (!localStorage.getItem('accessToken')) {
            navigate('/register')
        }
        else {
            navigate(`/get-ticket/${film}/${id}`, { state: { film, id, film_id, cinema } })
        }
    }

    return (
        // <div className={cx('row', 'row-small', 'st-item')} onClick={() => handleClick()}>
        <div className={cx('col', 'large-3', 'st-item')} onClick={() => handleClick()}>
            <div className={cx('show-time-container', 'col-inner')}>
                <div className={cx('showTimes')}>{time}</div>
                <div className={cx('meta')}>
                    <span className={cx("type")}>Phụ đề</span>
                    <span className={cx("format")}>2D</span>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default Showtimeitem;