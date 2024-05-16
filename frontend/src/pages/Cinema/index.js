import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import requestApi from "~/fetch";
import styles from './Cinema.module.scss'

import CinemaItem from "~/components/CinemaItem";

const cx = classNames.bind(styles)


function Cinema() {
    return (
        <div className={cx('row')}>
            <div className={cx('col', 'large-12')}>
                <div className={cx('col-inner')}>
                    <div className={cx('large-4')}>
                        <CinemaItem />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cinema;