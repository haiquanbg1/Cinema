import classNames from "classnames/bind";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketSimple, faCircleInfo, faCross } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import Image from "../Image";
import styles from './FilmInfo.module.scss';
import Button from "../Button";
import { targerFilmSlice } from "~/redux/reducers/targetFilmSlice";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)


function FilmInfo() {
    const dispatch = useDispatch();
    const listInfo = useSelector(state => state.getInfo);

    const closeHandle = () => {
        dispatch(targerFilmSlice.actions.deleteInfo(''));
        console.log('test');
    }
    if (listInfo != null) {
        var info = listInfo[0];
    }
    return (
        <div className={listInfo.length != 0 ? cx('film-info', 'show') : cx('film-info')}>
            <button onClick={() => dispatch(targerFilmSlice.actions.deleteInfo(''))} className={cx('close-Btn')}>

            </button>
            <div className={cx('film-detail')}>
                <div className={cx('film-detail-control')}>
                    <Image className={cx('image')} src={info != null ? info.src : ''}></Image>
                    <Button primary leftIcon={<FontAwesomeIcon icon={faTicketSimple} />}>
                        <Link to={'/get-ticket'}>MUA VÉ NGAY</Link>
                    </Button>
                    <button onClick={closeHandle} className={cx('trailer-btn')}>XEM TRAILER</button>
                </div>
                <div className={cx('film-detail-content')}>

                    <p className={cx('name')}>{info != null ? info.title : ''}</p>
                    <p></p>
                </div>
            </div>
        </div>

    )
}

export default FilmInfo;