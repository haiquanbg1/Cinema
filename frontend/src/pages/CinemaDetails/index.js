import classNames from "classnames/bind";
import { useNavigate, useParams } from "react-router-dom";
import styles from './CinemaDetails.module.scss';
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import requestApi from "~/fetch";
import { getCommentById } from "../../components/Comments/config";
import Comment from "~/components/Comments";
import Image from "~/components/Image";
import { getAllCinema } from "../Ticket/ShowTime/cinema";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles)

function CinemaDetails() {
    const param = useParams()
    const location = useLocation()
    // const { id } = location.state
    const [cinema, setCinema] = useState({})
    const [listCmt, setListCmt] = useState([]);
    const [cinemaList, setCinemaList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchAPI = async () => {
            let tmp
            try {
                const res = await getAllCinema()
                setCinemaList(res)
                res.forEach(element => {
                    if (element.name == param.id) {
                        tmp = element.id
                        setCinema(element)
                        return
                    }
                });
                // console.log(res)
                // // setShowTimes(res.data.data)
                // // setCinema(res.data.booked)
            } catch (err) {
                console.log(err);
            }

            try {
                const res1 = await getCommentById(tmp)
                console.log(`res1: ${res1}`)
                setListCmt(res1)
            } catch (err) {
                console.log(err);
            }
        }
        fetchAPI();
    }, [])


    return (
        <div className={cx('row')}>
            <div className={cx('col', 'large-8')}>
                <div style={{ marginBottom: '20px', borderColor: '#72be43' }} className={cx('col-inner', 'c-box')}>
                    <h1 style={{ color: '#72be43', fontSize: '20px', fontWeight: '800', marginBottom: '20px' }}>{cinema.name}</h1>
                    <div className={cx('content')}>
                        <h3 className={cx('content--title')}>{cinema.name}</h3>
                        <div className={cx('content--details')}>
                            <ul>
                                <li><strong>Địa điểm:</strong>&nbsp;{cinema.address}</li>
                                <li><strong>Số điện thoại:&nbsp;</strong>1900 2099 hoặc {cinema.phone}</li>
                                <li><strong>Email:&nbsp;</strong>cskh@bhdstar.vn</li>
                                <li><strong>Phòng chiếu:</strong>&nbsp;{cinema.details}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Comment list_cmt={listCmt} cinemaId={cinema.id} ></Comment>

            </div>

            <div className={cx('col', 'large-4')}>
                <div style={{ borderColor: '#72be43' }} className={cx('cinema-name', 'col-inner', 'c-box')}>
                    <h1 style={{ fontSize: '22px', textAlign: 'center', marginBottom: '10px' }}>Địa điểm khác</h1>
                    <ul style={{ listStyle: 'none' }}>
                        {cinemaList.map((element, index) => (
                            <li style={{ marginBottom: '8px' }} key={index}>
                                <a style={{ display: 'flex', textAlign: 'center' }} href={`http://localhost:3000/cinema/${element.name}`} title={element.name}>
                                    <Image className={cx('cinema-img')} src='https://www.bhdstar.vn/wp-content/uploads/2023/08/logo.png'></Image>
                                    <span>{element.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>

    );
}

export default CinemaDetails;