import Chart from "~/components/Chart";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 250, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 130, pv: 2400, amt: 2400 },
];
function Admin() {
    return (
        <Chart />
    );
}

export default Admin