import RegisterHeader from "~/components/Layout/components/HeaderRegister";
import styles from './Admin.module.scss';
import Slider from "~/components/Slider";
import Footer from "~/components/Footer";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function AdminLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <RegisterHeader />

            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default AdminLayout;