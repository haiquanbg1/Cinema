import classNames from "classnames/bind";
import styles from "./GetTicket3.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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

    const handleBack = () => {
        navigate(`/get-ticket/${film}/${id}`, { state: { film, id } })
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
                            <div style={{ color: 'white' }}>B5 B6</div>
                        </div>
                        <hr className={cx('dashed')}></hr>

                        <div className={cx('info_total')}>
                            <h4>Tổng tiền</h4>
                            <span>:</span>

                            <div style={{ color: 'white' }}>160000</div>
                        </div>
                        <hr className={cx('dashed')}></hr>

                        <div className={cx('info_discount')}>
                            <h4>Giảm giá</h4>
                            <span>:</span>

                            <div style={{ color: 'white' }}>40000</div>
                        </div>
                        <hr className={cx('dashed')}></hr>

                        <div className={cx('info_price')}>
                            <h4>Số tiền phải thanh toán</h4>
                            <span>:</span>

                            <div style={{ color: 'white' }}>120000</div>
                        </div>



                    </div>
                </div>
            </div>

        </div>

        <div className={cx('col', 'large-4')}>
            <div className={cx('col-inner')}>
                <div className={cx('c-box')}>
                    <h4 >BHD Star The Garden</h4>
                    <span ><span >Screen 2</span> - 13/5/2024 - Suất chiếu: 23h40</span>
                    <hr />

                    <h3 >{film}</h3>

                    <hr />
                    <Button className={'back'} primary stretch>Xác nhận thanh toán</Button>
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