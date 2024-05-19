import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import CommentForm from "./CommentForm";
import Comment from "../Comment";
import requestApi from "~/fetch";
import { getCommentById } from "./config";
import styles from './Comments.module.scss'

const cx = classNames.bind(styles)

function Comments({ list_cmt, cinemaId }) {
    const [listCmt, setListCmt] = useState(list_cmt);
    const [reset, setReset] = useState();
    const [activeComment, setActiveComment] = useState(null);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                if (cinemaId) {
                    const res = await getCommentById(cinemaId)
                    setListCmt(res)
                }
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
        const resObj = {
            content: text, rating: '3', cinema: cinemaId
        }
        await requestApi('createComment', 'post', resObj)
        setReset(true)
    };

    const deleteComment = async (id) => {
        setReset(false)
        await requestApi(`deleteComment`, 'delete', { id: id })
        setReset(true)
    }

    const updateComment = async (text, id) => {
        setReset(false)
        await requestApi(`updateComment`, 'put', { content: text, rating: '3', id })
        setActiveComment(null);
        setReset(true)
    }

    return (
        <div style={{ borderColor: '#72be43' }} className={cx('col-inner', 'c-box')}>
            <CommentForm handleSubmit={addComment} />

            {listCmt.length != 0 ?
                listCmt.map((comment, index) => (
                    <Comment
                        currentUserId={localStorage.getItem('userId')}
                        key={index}
                        comment={comment}
                        deleteComment={deleteComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        updateComment={updateComment}
                    >
                    </Comment>
                ))
                :
                list_cmt.map((comment, index) => (
                    <Comment
                        currentUserId={localStorage.getItem('userId')}
                        key={index}
                        comment={comment}
                        deleteComment={deleteComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        updateComment={updateComment}
                    >
                    </Comment>
                ))
            }


        </div>
    );
}

export default Comments;