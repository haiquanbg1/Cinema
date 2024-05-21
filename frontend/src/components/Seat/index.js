import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Seat.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Seat({ type = '', id, onClick, coupleSelect = false }) {

    // const classes = {
    //     standard,
    //     vip,
    //     couple,
    //     disable,
    //     selected
    // }

    const [selected, setSelected] = useState(false)
    const handleClick = () => {
        setSelected(!selected)

        // let seatobj = { id, disabled, couple, standard, vip, selected: selected ? true : false };

        // axios.post('/', seatobj)
        //     .then((res) => {
        //         console.log(res)
        //     })
        //     .catch(err => console.log(err))
    }

    // const props = {
    //     onClick,
    // };
    // if (disable) {
    //     Object.keys(props).forEach((key) => {
    //         if (key.startsWith('on') && typeof props[key] === 'function') {
    //             delete props[key];
    //         }
    //     });
    // }



    return (
        <div className={cx('seat')} onClick={type != 'couple' ? () => handleClick() : () => { }} >
            <a title={id} className={cx(type, 'seat-icon', selected && 'selected', coupleSelect && 'coupleSelect')}></a>
        </div>
    );
}

export default Seat;