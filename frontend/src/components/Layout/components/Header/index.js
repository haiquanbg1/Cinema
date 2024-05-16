import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles)

function Header() {
    const cities = ['TP.Hồ Chí Minh', 'Hà Nội', 'Nha Trang', 'Đà Nẵng']
    const [city, setCity] = useState('Chọn thành phố')
    let name = localStorage.getItem('firstName') ? localStorage.getItem('firstName').concat(localStorage.getItem('lastName')) : '';
    const usenavigate = useNavigate();

    const logOut = () => {
        localStorage.clear()
    }
    if (!localStorage.accessToken) {
        return (
            <header id='header' className={cx('header')}>
                <div className={cx('header-wrapper', 'stuck')}>
                    <div className={cx('header-inner', 'flex-row')}>
                        <div id='header-logo' className={cx('logo', 'flex-col')}>
                            <Link to={'/'}>
                                <Image src='https://www.bhdstar.vn/wp-content/uploads/2023/08/logo.png' className={cx('header-logo')}></Image>
                            </Link>
                        </div>
                        <div className={cx('flex-left', 'flex-grow', 'flex-col')}>
                            <ul className={cx('header-nav', 'nav-left')}>
                                <li className={cx('nav-item')}>
                                    <Link >Lịch chiếu</Link>
                                </li>
                                <li className={cx('nav-item')}>
                                    <Link>Hệ thống rạp</Link>
                                </li>
                                <li className={cx('nav-item')}>
                                    <Link>Khuyến mãi/Sự kiện</Link>
                                </li>
                                <li className={cx('nav-item')}>
                                    <Link>Cửa hàng</Link>
                                </li>
                                <li className={cx('nav-item')}>
                                    <Link>Khác</Link>
                                    <FontAwesomeIcon className={cx('f-icon1')} icon={faAngleDown} />
                                </li>
                            </ul>
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
                                <li className={cx('nav-right--item', 'big')}>
                                    <FontAwesomeIcon className={cx('f-icon3')} icon={faTicketSimple} />
                                    <Link to={'/get-ticket'}>Mua vé</Link>
                                </li>
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
                        <div className={cx('flex-left', 'flex-grow', 'flex-col')}>
                            <ul className={cx('header-nav', 'nav-left')}>
                                <li className={cx('nav-item')}>
                                    <Link >Lịch chiếu</Link>
                                </li>
                                <li className={cx('nav-item')}>
                                    <Link to={'/cinema'}>Hệ thống rạp</Link>
                                </li>
                                <li className={cx('nav-item')}>
                                    <Link>Khuyến mãi/Sự kiện</Link>
                                </li>
                                <li className={cx('nav-item')}>
                                    <Link>Cửa hàng</Link>
                                </li>
                                <li className={cx('nav-item')}>
                                    <Link>Khác</Link>
                                    <FontAwesomeIcon className={cx('f-icon1')} icon={faAngleDown} />
                                </li>
                            </ul>
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

                                                        <div className={cx('info-header-content')}>
                                                            <Image src={'https://static2-images.vnncdn.net/files/publish/2022/11/22/ronaldo-mang-xa-hoi-219.jpg'} className={cx('avatar')}></Image>
                                                            <span>{name}</span>
                                                        </div>

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

                                <li className={cx('nav-right--item', 'big')}>
                                    <FontAwesomeIcon className={cx('f-icon3')} icon={faTicketSimple} />
                                    <Link to={'/get-ticket'}>Mua vé</Link>
                                </li>
                            </ul>
                        </div >
                    </div >
                </div >
            </header >
        );
    }


}



export default Header;