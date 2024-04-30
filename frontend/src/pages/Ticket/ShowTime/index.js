import styles from './Showtime.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Showtime({ address, times }) {

    return (
        <div className="c-box" style={{ marginBottom: '20px' }}>
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <h4>{address}</h4>
                    <p></p>
                </div>

                <div className='row row-small'>
                    <div className='col large-3'>
                        <div className={cx('show-time-container', 'col-inner')}>
                            <div className={cx('showTimes')}>{times}</div>
                            <div className={cx('meta')}>
                                <span class={cx("type")}>Phụ đề</span>
                                <span class={cx("format")}>2D</span>
                            </div>
                        </div>

                    </div>
                    <div className='col large-3'>
                        <div className={cx('show-time-container', 'col-inner')}>
                            <div className={cx('showTimes')}>{times}</div>
                            <div className={cx('meta')}>
                                <span class={cx("type")}>Phụ đề</span>
                                <span class={cx("format")}>2D</span>
                            </div>
                        </div>

                    </div>
                    <div className='col large-3'>
                        <div className={cx('show-time-container', 'col-inner')}>
                            <div className={cx('showTimes')}>{times}</div>
                            <div className={cx('meta')}>
                                <span class={cx("type")}>Phụ đề</span>
                                <span class={cx("format")}>2D</span>
                            </div>
                        </div>

                    </div>
                    <div className='col large-3'>
                        <div className={cx('show-time-container', 'col-inner')}>
                            <div className={cx('showTimes')}>{times}</div>
                            <div className={cx('meta')}>
                                <span class={cx("type")}>Phụ đề</span>
                                <span class={cx("format")}>2D</span>
                            </div>
                        </div>

                    </div>
                    <div className='col large-3'>
                        <div className={cx('show-time-container', 'col-inner')}>
                            <div className={cx('showTimes')}>{times}</div>
                            <div className={cx('meta')}>
                                <span class={cx("type")}>Phụ đề</span>
                                <span class={cx("format")}>2D</span>
                            </div>
                        </div>

                    </div>
                    <div className='col large-3'>
                        <div className={cx('show-time-container', 'col-inner')}>
                            <div className={cx('showTimes')}>{times}</div>
                            <div className={cx('meta')}>
                                <span class={cx("type")}>Phụ đề</span>
                                <span class={cx("format")}>2D</span>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Showtime;
