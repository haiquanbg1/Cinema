import FilmItem from "../FilmItem";
import Button from "../Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive, films } from './index';
import { CustomLeft, CustomRight, CustomDot } from "./custom";
import Image from "../Image";

import classNames from "classnames/bind";
import styles from './Slider.module.scss'

const cx = classNames.bind(styles)


function Slider_logic() {
    const filmList = films.map((film, index) => (
        <div key={index} className={cx('wrapper', 'row')}>
            <div className={cx('container', ' large-12')}>
                <div className={cx('')}>
                    <div className={cx('image')}>
                        <Image src={film.src}></Image>
                    </div>
                </div>
            </div>

            <div className={cx('text-box')}>
                <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>{film.title}</h3>
                <Button primary leftIcon={<FontAwesomeIcon icon={faTicketSimple} />} className={'slider-btn'} >Xem thêm</Button>
            </div>
        </div>
    ))

    return (<div className={cx("wrapper")}>

        <Carousel
            draggable={false}
            Carousel showDots={true}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            dotListClass={cx("custom-dot-list")}
            customLeftArrow={<CustomLeft />}
            customRightArrow={<CustomRight />}
            customDot={<CustomDot />}
            className={cx("carousel")}
        >
            {filmList}
        </Carousel >

    </div>
    );
}

export default Slider_logic;