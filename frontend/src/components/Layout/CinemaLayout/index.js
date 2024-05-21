import Header from "~/components/Layout/components/Header";
import styles from './CinemaLayout.module.scss';
import Slider from "~/components/Slider";
import Footer from "~/components/Footer";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function CinemaLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />

            <h1 className={cx('title')}>Hệ thống rạp</h1>
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default CinemaLayout;