import classNames from "classnames/bind";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Image from "../Image";
import styles from './CinemaItem.module.scss';
import Button from "../Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketSimple, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import { targetFilmSlice } from "~/redux/reducers/targetFilmSlice";

const cx = classNames.bind(styles)

function CinemaItem({ src, name, id }) {
    const navigate = useNavigate()

    const getDetails = () => {
        navigate(`/cinema/${name}`, { state: { id } })
    }

    return (
        <div className={cx('wrapper', 'col-inner')}>
            <div className={cx('inner')}>
                <div className={cx('thumb')}>
                    <Image className={cx('img')} src={src} ></Image>
                </div>

                <h4 className={cx('title')}>{name}</h4>

                <div className={cx('buttons')} >
                    <div onClick={() => getDetails()}>
                        <Button primary leftIcon={<FontAwesomeIcon icon={faTicketSimple} />}>Thông tin chi tiết</Button>
                    </div>
                    {<Button outline iconOnly >Chia sẻ</Button>}
                </div>
            </div>

        </div>
    );
}

export default CinemaItem;