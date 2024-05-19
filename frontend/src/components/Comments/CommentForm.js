import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";

import Button from "../Button";
import styles from './CommentForm.module.scss'

const cx = classNames.bind(styles)

function CommentForm({
    handleSubmit,
    hasCancelButton = false,
    initialText = "",
    handleCancel
}) {
    const [text, setText] = useState(initialText);
    const isTextareaDisabled = text.length === 0;
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    };

    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [text]);


    return (
        <form className={cx('container')} onSubmit={onSubmit}>
            <textarea
                ref={textareaRef}
                className={cx('custom-scrollbar-textarea', 'input')}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <Button disabled={isTextareaDisabled} primary>Write</Button>

            {hasCancelButton && (
                <button
                    type="button"
                    className={cx('cancel-Btn')}
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            )
            }
        </form >
    );
}

export default CommentForm;