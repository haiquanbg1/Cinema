import styles from './Showtimeitem.module.scss';
import classNames from "classnames/bind";
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);



function Showtimeitem({ time, id, film }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/get-ticket/${film}/${id}`, { state: { film, id } })
    }

    return (
        <div className='row row-small' onClick={() => handleClick()}>
            <div className='col large-3'>
                <div className={cx('show-time-container', 'col-inner')}>
                    <div className={cx('showTimes')}>{time}</div>
                    <div className={cx('meta')}>
                        <span className={cx("type")}>Phụ đề</span>
                        <span className={cx("format")}>2D</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Showtimeitem;