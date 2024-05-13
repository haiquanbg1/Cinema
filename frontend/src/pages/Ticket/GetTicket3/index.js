import classNames from "classnames/bind";
import styles from "./GetTicket3.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

import requestApi from "~/fetch";
import CountDown from "../CountDown";
const cx = classNames.bind(styles)


function GetTicket3() {
    const location = useLocation()
    const { film, id } = location.state

    const navigate = useNavigate()

    const handleClick = async () => {
        await requestApi(`/seat/booked?showtime_id=${id}`, 'post', { pay: 50000 })
    }

    return (<div>
        <CountDown film={film} id={id} ></CountDown>
        <button onClick={() => handleClick()}>Test</button>
    </div>);
}

export default GetTicket3;