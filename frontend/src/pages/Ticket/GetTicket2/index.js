import classNames from "classnames/bind";
import styles from "./GetTicket2.module.scss";
const cx = classNames.bind(styles)


function GetTicket2() {
    return (
        <div>
            <h1 style={{ color: 'white', fontSize: '26px', fontWeight: '800', textAlign: 'center', margin: '30px' }}>Bước 2: Chọn ghế</h1>
            <div className={cx('large-12', 'col')}>
                <div className={cx('col-inner')}>
                    <div id="app">
                        <div className={cx('large-8', 'col')}>
                            <div className={cx('col-inner')}>
                                <div className={cx('cinema-map-container')}>
                                    <div className={cx('map-body')}>
                                        <table>
                                            <tr>
                                                <td></td>
                                                <td colSpan={'17'}>
                                                    <div className={cx('map-header')}></div>
                                                    <div className={cx('seat-types', 'row', 'row-small')} style={{ marginTop: '30px', marginBottom: '15px', alignItems: 'center' }}>
                                                        <div className={cx('col', 'large-4')}>
                                                            <div className={cx("col-inner", 'seat-container')}>
                                                                <div className={cx('icon')}>
                                                                    <span className={cx('seat-icon', 'standard')}></span>
                                                                </div>
                                                                <div className={cx('icon-text')}>Ghế thường</div>
                                                            </div>
                                                        </div>

                                                        <div className={cx('col', 'large-4')}>
                                                            <div className={cx("col-inner", 'seat-container')}>
                                                                <div className={cx('icon')}>
                                                                    <span className={cx('seat-icon', 'vip')}></span>
                                                                </div>
                                                                <div className={cx('icon-text')}>Ghế vip</div>
                                                            </div>
                                                        </div>

                                                        <div className={cx('col', 'large-4')}>
                                                            <div className={cx("col-inner", 'seat-container')}>
                                                                <div className={cx('icon')}>
                                                                    <span className={cx('seat-icon', 'couple')}></span>
                                                                </div>
                                                                <div className={cx('icon-text')}>Ghế đôi</div>
                                                            </div>
                                                        </div>

                                                        <div className={cx('col', 'large-4')}>
                                                            <div className={cx("col-inner", 'seat-container')}>
                                                                <div className={cx('icon')}>
                                                                    <span className={cx('seat-icon', 'selected')}></span>
                                                                </div>
                                                                <div className={cx('icon-text')}>Ghế đã chọn</div>
                                                            </div>
                                                        </div>

                                                        <div className={cx('col', 'large-4')}>
                                                            <div className={cx("col-inner", 'seat-container')}>
                                                                <div className={cx('icon')}>
                                                                    <span className={cx('seat-icon', 'disable')}></span>
                                                                </div>
                                                                <div className={cx('icon-text')}>Ghế đã bán</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>A</td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A1" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A2" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A3" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A4" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A5" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A6" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A7" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A8" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A9" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A10" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A11" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A12" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A13" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A14" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A15" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A16" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                </td>
                                                <td>A</td>
                                            </tr>
                                            <tr>
                                                <td>B</td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B1" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B2" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B3" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B4" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B5" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B6" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B7" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B8" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B9" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B10" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B11" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B12" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B13" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B14" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B15" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="B16" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                </td>
                                                <td>B</td>
                                            </tr>
                                            <tr>
                                                <td>C</td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C1" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C2" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C3" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C4" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C5" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C6" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C7" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C8" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C9" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C10" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C11" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C12" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C13" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C14" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C15" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="C16" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                </td>
                                                <td>C</td>
                                            </tr>
                                            <tr>
                                                <td>D</td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D1" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D2" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D3" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D4" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D5" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D6" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D7" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D8" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D9" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D10" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D11" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D12" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D13" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D14" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D15" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="D16" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                </td>
                                                <td>D</td>
                                            </tr>
                                            <tr>
                                                <td>E</td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E1" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E2" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E3" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E4" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E5" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E6" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E7" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E8" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E9" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E10" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E11" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E12" className={cx('seat-icon', 'vip')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E13" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E14" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E15" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="E16" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                </td>
                                                <td>E</td>
                                            </tr>
                                            <tr>
                                                <td>F</td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F1" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F2" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F3" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F4" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F5" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F6" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F7" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F8" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F9" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F10" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F11" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F12" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F13" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F14" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F15" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="F16" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                </td>
                                                <td>F</td>
                                            </tr>
                                            <tr>
                                                <td>G</td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G1" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G2" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G3" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G4" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G5" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G6" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G7" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G8" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G9" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G10" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G11" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G12" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G13" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G14" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G15" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="G16" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                </td>
                                                <td>G</td>
                                            </tr>
                                            <tr>
                                                <td>H</td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H1" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H2" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H3" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H4" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H5" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H6" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H7" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H8" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H9" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H10" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H11" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H12" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H13" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H14" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H15" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="H16" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                </td>
                                                <td>H</td>
                                            </tr>
                                            <tr>
                                                <td>I</td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A1" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A2" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="A3" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="I4" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="I5" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="I6" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="I7" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="I8" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="I9" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="I10" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="I11" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="I12" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="I13" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="I14" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="I15" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="I16" className={cx('seat-icon', 'standard')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                </td>
                                                <td>I</td>
                                            </tr>
                                            <tr>
                                                <td>J</td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J1" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J2" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J4" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J5" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J7" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J8" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J10" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J11" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J13" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={cx('seat')}>
                                                        <a href="#" title="J14" className={cx('seat-icon', 'couple')}></a>
                                                    </div>
                                                </td>
                                                <td>

                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                </td>
                                                <td>J</td>
                                            </tr>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('large-4', 'col')}>
                            <div className="col-inner">
                                <div className={cx('c-box', 'film-cart')}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetTicket2;