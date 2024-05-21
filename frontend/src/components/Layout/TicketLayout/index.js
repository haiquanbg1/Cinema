import HeaderTicket from '../components/HeaderTicket';
import styles from './TicketLayout.module.scss';
import classNames from "classnames/bind";
import Footer from '~/components/Footer';
const cx = classNames.bind(styles)

function TicketLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderTicket />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer></Footer>
        </div>

    );
}

export default TicketLayout;