import classNames from "classnames/bind";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketSimple, faCircleInfo, faCross } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import Image from "../Image";
import styles from './FilmInfo.module.scss';
import Button from "../Button";
import { targerFilmSlice } from "~/redux/reducers/targetFilmSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles)


function FilmInfo() {
    const dispatch = useDispatch();
    const listInfo = useSelector(state => state.getInfo);
    const navigate = useNavigate();
    // const [info, setInfo] = useState('')
    let info
    const closeHandle = () => {
        dispatch(targerFilmSlice.actions.deleteInfo(''));
    }
    if (listInfo != null) {
        // setInfo(listInfo[0]);
        info = listInfo[0]
    }
    // useEffect(
    //     setInfo(listInfo[0])
    //     , [listInfo])

    const handleClick = (id) => {
        navigate(`/get-ticket/${id}`)
        closeHandle();
    }
    return (
        <div className={listInfo.length != 0 ? cx('film-info', 'show') : cx('film-info')}>
            <button onClick={() => dispatch(targerFilmSlice.actions.deleteInfo(''))} className={cx('close-Btn')}>

            </button>
            <div className={cx('film-detail')}>
                <div className={cx('film-detail-control')}>
                    <Image className={cx('image')} src={info != null ? info.src : ''}></Image>
                    <Button primary leftIcon={<FontAwesomeIcon icon={faTicketSimple} />}>
                        <div onClick={() => handleClick(info.title)}>MUA VÉ NGAY</div>
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