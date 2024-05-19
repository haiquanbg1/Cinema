import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import CommentForm from "./CommentForm";
import Comment from "../Comment";
import requestApi from "~/fetch";
import { getCommentById } from "./config";
import styles from './Comments.module.scss'

const cx = classNames.bind(styles)

function Comments({ cinema_id }) {
    console.log(cinema_id)
    const [listCmt, setListCmt] = useState([]);
    const [reset, setReset] = useState();
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
        , [reset])

    const addComment = async (text) => {
        setReset(false)
        const resObj = { content: text, rating: '3', cinema: cinema_id }
        await requestApi('createComment', 'post', resObj)
        setReset(true)
    };

    const deleteComment = async (id) => {
        setReset(false)
        await requestApi(`deleteComment/${cinema_id}`, 'delete', { id: id })
        setReset(true)

    }

    return (
        <div style={{ borderColor: '#72be43' }} className={cx('col-inner', 'c-box')}>
            <CommentForm handleSubmit={addComment} />

            {listCmt.map((comment, index) => (
                <Comment
                    currentUserId={localStorage.getItem('userId')}
                    key={index}
                    comment={comment}
                    deleteComment={deleteComment}
                >
                </Comment>
            ))}
        </div>
    );
}

export default Comments;