import styles from './HeaderTicket.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';
import Button from '~/components/Button';


const cx = classNames.bind(styles)

function HeaderTicket() {
    const cities = ['TP.Hồ Chí Minh', 'Hà Nội', 'Nha Trang', 'Đà Nẵng']
    const [city, setCity] = useState('Chọn thành phố')
    const logOut = () => {
        localStorage.clear()
    }

    if (!localStorage.accessToken) {
        return (
            <header id='header' className={cx('header')}>
                <div className={cx('header-wrapper')}>
                    <div className={cx('header-inner', 'flex-row')}>
                        <div id='header-logo' className={cx('logo', 'flex-col')}>
                            <Link to={'/'}>
                                <Image src='https://www.bhdstar.vn/wp-content/uploads/2023/08/logo.png' className={cx('header-logo')}></Image>
                            </Link>
                        </div>
                        <div className={cx('flex-left')}>
                            <div className={cx('step-container')}>
                                <div className={cx('step')} data-step="1">
                                    <Link to=''>01</Link>
                                </div>
                                <div className={cx('step')} data-step="2">
                                    <Link to=''>02</Link>
                                </div>
                                <div className={cx('step')} data-step="3">
                                    <Link to=''>03</Link>
                                </div>
                                <div className={cx('step')} data-step="4">
                                    <Link to=''>04</Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('flex-right', 'flex-grow', 'flex-col')}>
                            <ul className={cx('header-nav', 'nav-right')}>
                                <span>
                                    <Tippy
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx('city-select')} tabIndex="-1" {...attrs}>
                                                <PopperWrapper>
                                                    {cities.map((city, index) => (
                                                        <h4 onClick={e => setCity(e.target.innerText)} key={index} className={cx('city')}>{city}</h4>
                                                    ))}
                                                </PopperWrapper>
                                            </div>
                                        )}
                                    >
                                        <li className={cx('nav-item', 'nav-right--item')}>
                                            <span>{city}</span>
                                            <FontAwesomeIcon className={cx('f-icon2')} icon={faAngleDown} />
                                        </li>
                                    </Tippy>
                                </span>

                                <span>
                                    <Tippy
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx('login-div')} tabIndex="-1" {...attrs}>
                                                <PopperWrapper>
                                                    <form className={cx('login-form')}>
                                                        <div className={cx('login-item')} >
                                                            <label>Email *</label>
                                                            <input type="text" id="username" placeholder="Tài khoản hoặc địa chỉ Email" />
                                                            <span></span>
                                                            <small></small>
                                                        </div>
                                                        <div className={cx('login-item')} >
                                                            <label>Mật khẩu *</label>
                                                            <input type="password" id="password" placeholder="Mật khẩu" />
                                                            <span></span>
                                                            <small></small>
                                                        </div>
                                                        <Button className={cx('login-Btn')} primary stretch>Đăng nhập</Button>
                                                        <br></br>
                                                        <Button className={cx('login-Btn')} outline stretch to={'/register'}>Đăng ký</Button>
                                                    </form>
                                                </PopperWrapper>
                                            </div>
                                        )}
                                    >
                                        <li className={cx('nav-item', 'nav-right--item')}>
                                            <Link to={'/register'} >
                                                Đăng nhập/Đăng ký
                                            </Link>
                                        </li>

                                    </Tippy>
                                </span>
                            </ul>
                        </div>
                    </div>
                </div>
            </header >
        );
    }
    else {
        return (
            <header id='header' className={cx('header')}>
                <div className={cx('header-wrapper')}>
                    <div className={cx('header-inner', 'flex-row')}>
                        <div id='header-logo' className={cx('logo', 'flex-col')}>
                            <Link to={'/'}>
                                <Image src='https://www.bhdstar.vn/wp-content/uploads/2023/08/logo.png' className={cx('header-logo')}></Image>
                            </Link>
                        </div>
                        <div className={cx('flex-left')}>
                            <div className={cx('step-container')}>
                                <div className={cx('step')} data-step="1">
                                    <Link to=''>01</Link>
                                </div>
                                <div className={cx('step')} data-step="2">
                                    <Link to=''>02</Link>
                                </div>
                                <div className={cx('step')} data-step="3">
                                    <Link to=''>03</Link>
                                </div>
                                <div className={cx('step')} data-step="4">
                                    <Link to=''>04</Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('flex-right', 'flex-grow', 'flex-col')}>
                            <ul className={cx('header-nav', 'nav-right')}>
                                <span>
                                    <Tippy
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx('city-select')} tabIndex="-1" {...attrs}>
                                                <PopperWrapper>
                                                    {cities.map((city, index) => (
                                                        <h4 onClick={e => setCity(e.target.innerText)} key={index} className={cx('city')}>{city}</h4>
                                                    ))}
                                                </PopperWrapper>
                                            </div>
                                        )}
                                    >
                                        <li className={cx('nav-item', 'nav-right--item')}>
                                            <span>{city}</span>
                                            <FontAwesomeIcon className={cx('f-icon2')} icon={faAngleDown} />
                                        </li>
                                    </Tippy>
                                </span>

                                <span>
                                    <Tippy
                                        trigger='click'
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx("city-select", 'info')} tabIndex="-1" {...attrs}>
                                                <PopperWrapper className='info-header'>
                                                    <div className={cx('info-header--container')}>

                                                        {/* <div className={cx('info-header-content')}>
                                                                    <Image src={'https://static2-images.vnncdn.net/files/publish/2022/11/22/ronaldo-mang-xa-hoi-219.jpg'} className={cx('avatar')}></Image>
                                                                    <span>{name}</span>
                                                                </div> */}

                                                        <Link className={cx('info-header--link')}> Xem tất cả thông tin</Link>

                                                        {localStorage.getItem('isAdmin') === '0' ?
                                                            (<Link className={cx('info-header--link')} >Go to admin page</Link>)
                                                            : (<span></span>)}

                                                        <Link to={'/register'} onClick={logOut} className={cx('info-header--link')} >Đăng xuất</Link>
                                                    </div>
                                                </PopperWrapper>
                                            </div>
                                        )}
                                    >
                                        <li className={cx('info-container')}>
                                            <Link className={cx('account-link')}>
                                                <Image src={'https://static2-images.vnncdn.net/files/publish/2022/11/22/ronaldo-mang-xa-hoi-219.jpg'} className={cx('avatar')}></Image>
                                                <span>{localStorage.getItem('firstName')}</span>
                                            </Link>
                                        </li>
                                    </Tippy>
                                </span>
                            </ul>
                        </div>
                    </div>


                </div>
            </header >
        );
    }
}



export default HeaderTicket;