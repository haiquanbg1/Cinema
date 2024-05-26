import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './AllCinemaChart.module.scss'

const cx = classNames.bind(styles)


const CustomTick = ({ x, y, payload }) => {
    return (
        <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
            {`${payload.value}`}
        </text>
    );
};

const AllCinemaChart = ({ data }) => {
    // console.log(data)
    const [selectedData, setSelectedData] = useState(null);

    const handleClick = (e) => {
        console.log(e)
        const clickedData = data.find(d => d.name === e.value);
        setSelectedData(clickedData);
    };

    return (
        <div className={cx('bar-container')}>
            <div className={cx('col', 'large-9')}>
                <ResponsiveContainer width="90%" height={500}>
                    <BarChart
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
                            dataKey="name"
                            onClick={handleClick}
                            interval={0} // Hiển thị tất cả các nhãn
                            angle={-60} // Xoay nhãn để tiết kiệm không gian
                            textAnchor="end"
                            height={120} // Tăng chiều cao để chứa nhãn xoay
                            tick={{ dx: -10, dy: 10 }} // Điều chỉnh vị trí nhãn

                        />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="pay" fill="#8884d8" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                </ResponsiveContainer>
            </div>


            <div className={cx('col', 'large-3')}>
                {selectedData && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>Số liệu cụ thể</h3>
                        <p>Name: {selectedData.name}</p>
                        <p>Pay: {selectedData.pay}</p>
                    </div>
                )}

            </div>
        </div>
    );
}

export default AllCinemaChart;
