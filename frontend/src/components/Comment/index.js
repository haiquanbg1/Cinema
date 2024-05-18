import classNames from "classnames/bind";


import styles from './Comment.module.scss'
import Image from "../Image";

const cx = classNames.bind(styles)

function Comment({
    comment,
    updateComment,
    deleteComment,
    currentUserId,
}) {

    const canDelete = currentUserId == comment.user
    const canEdit = currentUserId == comment.user
    const time = comment.time.slice(0, 10)

    return (
        <div className={cx('comment-container')}>
            <div className={cx('image-container')}>
                <Image src='https://image.plo.vn/w850/Uploaded/2024/yqjvzdjwp/2024_05_16/ronaldo-al-nassr-671.jpeg.webp'></Image>
            </div>

            <div className={cx('comment-right')}>
                <div className={cx('content-container')}>
                    <div className={cx('info')}>
                        <div className={cx('info--name')}>{comment.name}</div>
                        <div className={cx('info--created')}>{time}</div>
                    </div>
                    <div className={cx('content')}>{comment.content}</div>
                </div>

                <div className={cx('comment-actions')}>
                    {canEdit && (
                        <div
                            className={cx("comment-action")}
                        // onClick={() =>
                        //     setActiveComment({ id: comment.id, type: "editing" })
                        // }
                        >
                            Edit
                        </div>
                    )}
                    {canDelete && (
                        <div
                            className={cx("comment-action")}
                            onClick={() => deleteComment(comment.id)}
                        >
                            Delete
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Comment;