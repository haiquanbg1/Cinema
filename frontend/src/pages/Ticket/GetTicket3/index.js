import classNames from "classnames/bind";
import styles from "./GetTicket3.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

import { getUserId } from "./user";
import requestApi from "~/fetch";
import CountDown from "../CountDown";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles)


function GetTicket3() {
    const location = useLocation()
    const { film, id, cinema, showTime, seats, price } = location.state
    const [userRank, setUserRank] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getUserId()
                setUserRank(res)
            } catch (err) {
                console.log(err);
            }
        }
        fetchAPI();
    }
        , [])

    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const handleClick = async () => {
        await requestApi(`/seat/booked?showtime_id=${id}`, 'post', { pay: price * (1 - (userRank - 1) * 0.05) })
        navigate('/')
        toast.success('Đặt vé thành công')
    }

    const handleBack = () => {
        navigate(`/get-ticket/${film}/${id}`, { state: { film, id, cinema } })
    }

    return (<div className={cx('container', 'row')}>

        <div className={cx('col', 'large-8')}>
            <div className={cx('col-inner')}>
                <div className={cx('c-box')}>
                    <h4 style={{ marginBottom: '10px' }}>Thông tin thanh toán</h4>
                    <hr className={cx('dashed')}></hr>

                    <div className={cx('info')}>
                        <div className={cx('info_seat')}>
                            <h4>Ghế đã đặt</h4>
                            <span>:</span>
                            <div>
                                {seats.map((seat, index) => (
                                    <span className={cx('seat')} key={index}>{seat.name}</span>
                                ))}
                            </div>

                        </div>
                        <hr className={cx('dashed')}></hr>

                        <div className={cx('info_total')}>
                            <h4>Tổng tiền</h4>
                            <span>:</span>

                            <div style={{ color: 'white' }}>{formatNumber(price)} VNĐ</div>
                        </div>
                        <hr className={cx('dashed')}></hr>

                        <div className={cx('info_discount')}>
                            <h4>Giảm giá</h4>
                            <span>:</span>

                            <div style={{ color: 'white' }}>{formatNumber(price * (userRank - 1) * 0.05)}</div>
                        </div>
                        <hr className={cx('dashed')}></hr>

                        <div className={cx('info_price')}>
                            <h4>Số tiền phải thanh toán</h4>
                            <span>:</span>

                            <div style={{ color: 'white' }}>{formatNumber(price * (1 - (userRank - 1) * 0.05))} VNĐ</div>
                        </div>



                    </div>
                </div>
            </div>

        </div>

        <div className={cx('col', 'large-4')}>
            <div className={cx('col-inner')}>
                <div className={cx('c-box')}>
                    <h4 >{cinema.name}</h4>
                    <span ><span >Screen {showTime.room_id}</span> - {(showTime.time.slice(8, 10))} / {(showTime.time.slice(5, 7))} / {(showTime.time.slice(0, 4))} - Suất chiếu: {(showTime.time.slice(11, 13))}h{(showTime.time.slice(14, 16))}</span>
                    <hr />

                    <h3 style={{ marginBottom: '10px', color: '#72be43' }}>{film}</h3>

                    <hr />
                    <div onClick={() => handleClick()}>
                        <Button className={'back'} primary stretch>Xác nhận thanh toán</Button>
                    </div>
                    <div className={cx('back')} onClick={() => handleBack()}>
                        <span>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>

                            Trở lại
                        </span>
                    </div>
                    <div className={cx('time-container')}>
                        <span >
                            Còn lại
                        </span>
                        <CountDown film={film} id={id} ></CountDown>

                    </div>

                </div>
            </div>

        </div>


    </div>);

}

export default GetTicket3;