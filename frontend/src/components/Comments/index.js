import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import CommentForm from "./CommentForm";
import Comment from "../Comment";

import { getCommentById } from "./config";
import styles from './Comments.module.scss'

const cx = classNames.bind(styles)

function Comments({ cinema_id }) {
    console.log(cinema_id)
    const [listCmt, setListCmt] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getCommentById(cinema_id)
                setListCmt(res)
                console.log(res)

                // // setShowTimes(res.data.data)
                // // setCinema(res.data.booked)
            } catch (err) {
                console.log(err);
            }
        }
        fetchAPI();
    }
        , [])

    return (
        <div style={{ borderColor: '#72be43' }} className={cx('col-inner', 'c-box')}>
            <CommentForm />

            {listCmt.map((comment, index) => (
                <Comment key={index} comment={comment}></Comment>
            ))}
        </div>
    );
}

export default Comments;