import classNames from "classnames/bind";
import { useState } from "react";

import Button from "../Button";
import styles from './CommentForm.module.scss'

const cx = classNames.bind(styles)

function CommentForm({
    hasCancelButton = false,
    initialText = "",
}) {
    const [text, setText] = useState(initialText);
    const isTextareaDisabled = text.length === 0;
    const onSubmit = (event) => {
        event.preventDefault();
        // handleSubmit(text);
        setText("");
    };


    return (
        <form className={cx('container')} onSubmit={onSubmit}>
            <textarea
                className={cx('input')}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <Button disabled={isTextareaDisabled} primary>Write</Button>

            {hasCancelButton && (
                <button
                    type="button"
                    className="comment-form-button comment-form-cancel-button"
                // onClick={handleCancel}
                >
                    Cancel
                </button>
            )
            }
        </form >
    );
}

export default CommentForm;