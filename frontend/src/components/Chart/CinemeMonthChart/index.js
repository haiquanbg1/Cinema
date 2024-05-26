import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './CinemaMonthChart.module.scss'

const cx = classNames.bind(styles)


const CustomTick = ({ x, y, payload }) => {
    return (
        <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
            {`Tháng ${payload.value}`}
        </text>
    );
};

const CinemaMonthChart = ({ data }) => {
    console.log(data)
    const [selectedData, setSelectedData] = useState(null);

    const handleClick = (e) => {
        console.log(e)
        const clickedData = data.find(d => d.month == e.value);
        setSelectedData(clickedData);
    };

    return (
        <div className={cx('bar-container')}>
            <div className={cx('col', 'large-9')}>
                <ResponsiveContainer width="90%" height={500}>
                    <AreaChart
                        width={500}
                        height={500}
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 80, // Tăng khoảng trống dưới để chứa nhãn xoay
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <CartesianGrid
                            stroke="#ccc"
                            strokeDasharray="0 0"
                            horizontal={true}
                            vertical={false}
                        />
                        <XAxis
                            dataKey="month"
                            onClick={handleClick}
                            tick={<CustomTick />}
                            interval={0} // Hiển thị tất cả các nhãn
                            angle={-60} // Xoay nhãn để tiết kiệm không gian
                            textAnchor="end"
                            height={120} // Tăng chiều cao để chứa nhãn xoay
                        // tick={{ dx: -10, dy: 10 }} // Điều chỉnh vị trí nhãn
                        />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Area dataKey="pay" fill="#8884d8" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </AreaChart>
                </ResponsiveContainer>
            </div>


            <div className={cx('col', 'large-3')}>
                {selectedData && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>Số liệu cụ thể</h3>
                        <p>Name: {selectedData.month}</p>
                        <p>Pay: {selectedData.pay}</p>
                    </div>
                )}

            </div>
        </div>
    );
}

export default CinemaMonthChart;
