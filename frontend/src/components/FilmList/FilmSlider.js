import FilmItem from "../FilmItem";
import Button from "../Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./index.css";
import { responsive } from './index';
import { CustomLeft, CustomRight, CustomDot } from "./custom";

import styles from './FilmList.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function FilmSlider({ films }) {
    console.log(films)
    const filmList = films.map((film, index) => (
        <FilmItem key={index} title={film.title} src={film.src} type={film.type} id={film.id} />
    ))

    return (<div className={cx('wrapper')}>

        <Carousel
            draggable={false}
            Carousel showDots={true}
            responsive={responsive}
            renderDotsOutside={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            dotListClass={cx('custom-dot-list')}
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

export default FilmSlider;