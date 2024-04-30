import classNames from "classnames/bind";
import { useRef } from "react";

import Image from "../Image";
import styles from './FilmItem.module.scss';
import Button from "../Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketSimple, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { targerFilmSlice } from "~/redux/reducers/targetFilmSlice";

const cx = classNames.bind(styles)

function FilmItem({ src, limitAge = 'T16', title, type, slider = false }) {
    const dispatch = useDispatch();

    const showInfo = () => {
        const info = {
            src,
            title,
            type
        }
        dispatch(targerFilmSlice.actions.getInfo(info))
    }

    return (
        <div className={slider ? cx('wrapper', 'slider') : cx('wrapper')}>
            <div className={cx('inner')}>
                <div onClick={showInfo} className={cx('thumb')}>
                    <Image src={src} ></Image>
                </div>
                <div className={cx('meta')} >
                    <span >{limitAge}</span>
                    <span >Phụ đề</span>
                    <span >2D</span>
                </div>
                <h4 className={cx('title')}>{title}</h4>
                <div className={cx('cats')}>
                    Thể loại phim:
                    <span>{type}</span>
                </div>
                <div className={cx('buttons')} >
                    <Button primary leftIcon={<FontAwesomeIcon icon={faTicketSimple} />}>MUA VÉ NGAY</Button>
                    {slider ? <Button outline rightIcon={<FontAwesomeIcon icon={faCircleInfo} />} >THÔNG TIN CHI TIẾT</Button> : <Button outline iconOnly ><FontAwesomeIcon icon={faCircleInfo} /></Button>}
                </div>
            </div>

        </div>
    );
}

export default FilmItem;