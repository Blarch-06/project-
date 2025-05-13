import React from 'react';
import { Line } from 'react-chartjs-2';

interface ChartProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
        }[];
    };
    options?: {
        responsive: boolean;
        scales?: {
            y: {
                beginAtZero: boolean;
            };
        };
    };
}

const Chart: React.FC<ChartProps> = ({ data, options }) => {
    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default Chart;