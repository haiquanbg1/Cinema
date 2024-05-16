import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import requestApi from "~/fetch";
import { getAllCinema } from "../Ticket/ShowTime/cinema";
import { useEffect, useState } from "react";

import styles from './Cinema.module.scss'


import CinemaItem from "~/components/CinemaItem";

const cx = classNames.bind(styles)


function Cinema() {
    const [cinemaList, setCinemaList] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getAllCinema()
                setCinemaList(res)
                // console.log(res)
                // // setShowTimes(res.data.data)
                // // setCinema(res.data.booked)
                console.log(res)
            } catch (err) {
                console.log(err);
            }
        }
        fetchAPI();
    }, [])

    return (
        <div className={cx('container', 'row')}>
            {cinemaList.map((cinema, index) => (
                <div className={cx('col', 'large-3')}>
                    <CinemaItem name={cinema.name} src={`cinema${cinema.id}.jpg`} />
                </div>
            ))}

        </div>


    );
}

export default Cinema;