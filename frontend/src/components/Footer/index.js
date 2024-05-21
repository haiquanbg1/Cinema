import classNames from "classnames/bind";


import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className={cx('footer-wrapper')}>
            <section className={cx('section')}>
                <div className={cx('section-content')}>
                    <div className={cx('container')}>
                        <div className={cx('col', 'large-3')}>
                            <div className={cx('col-inner')}>
                                <div className={cx('title-container')}>
                                    <h3>
                                        <span className={cx('title')}>VỀ BHD STAR</span>
                                    </h3>
                                </div>

                                <div className={cx('ux-menu')}>
                                    <div className={cx('ux-menu-item')}>
                                        <span>Hệ thống rạp</span>
                                    </div>
                                    <div className={cx('ux-menu-item')}>
                                        <span>Cụm rạp</span>
                                    </div>
                                    <div className={cx('ux-menu-item')}>
                                        <span>Liên hệ</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('col', 'large-5')}>
                            <div className={cx('col-inner')}>
                                <div className={cx('title-container')}>
                                    <h3>
                                        <span className={cx('title')}>QUY ĐỊNH & ĐIỀU KHOẢN</span>
                                    </h3>
                                </div>

                                <div className={cx('ux-menu')}>
                                    <div className={cx('ux-menu-item')}>
                                        <span>Quy định thành viên</span>
                                    </div>
                                    <div className={cx('ux-menu-item')}>
                                        <span>Điều khoản</span>
                                    </div>
                                    <div className={cx('ux-menu-item')}>
                                        <span>Hướng dẫn đặt vé trực tuyến</span>
                                    </div>
                                    <div className={cx('ux-menu-item')}>
                                        <span>Quy định và chính sách chung</span>
                                    </div>
                                    <div className={cx('ux-menu-item')}>
                                        <span>Chính sách bảo vệ thông tin cá nhân của người tiêu dùng</span>
                                    </div>
                                </div>



                            </div>
                        </div>

                        <div className={cx('col', 'large-4')}>
                            <div className={cx('col-inner')}>
                                <div className={cx('title-container')}>
                                    <h3>
                                        <span className={cx('title')}>CHĂM SÓC KHÁCH HÀNG</span>
                                    </h3>
                                </div>

                                <div className={cx('ux-menu')}>
                                    <div className={cx('ux-menu-item')}>
                                        <span>
                                            <span style={{ fontWeight: '800' }}>Hotline: </span>
                                            19006868
                                        </span>
                                    </div>
                                    <div className={cx('ux-menu-item')}>
                                        <span>
                                            <span style={{ fontWeight: '800' }}>Giờ làm việc: </span>
                                            9:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ, Tết)
                                        </span>

                                    </div>
                                    <div className={cx('ux-menu-item')}>
                                        <span>
                                            <span style={{ fontWeight: '800' }}>Email hỗ trợ: </span>
                                            cskh@123.vn
                                        </span>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;