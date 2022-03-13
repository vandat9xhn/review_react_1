import * as React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
const backgroundColor = ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'];
const datasets_data = [2478, 5267, 734, 784, 433];
const data: ChartData<'bar', number[], string> = {
    labels: labels,
    datasets: [
        {
            label: 'Population',
            backgroundColor: backgroundColor,
            data: datasets_data,
        },
    ],
};

//
export interface MyChartBarProps {}

//
function MyChartBar({}: MyChartBarProps) {
    //
    return (
        <div style={{ width: '500px', margin: 'auto' }}>
            <Bar
                data={data}
                options={{
                    // legend: { display: false },
                    // title: {
                    //     display: true,
                    //     text: 'Predicted world population (millions) in 2050',
                    // },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Title for bar',
                        },
                        legend: {
                            position: 'right',
                        },
                    },
                    // scales: {

                    // }
                }}
            />
        </div>
    );
}

export default MyChartBar;
