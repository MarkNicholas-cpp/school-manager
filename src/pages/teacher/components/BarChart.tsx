import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { FC } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: FC = () => {
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    const data: ChartData<"bar"> = {
        labels,
        datasets: [
            {
                label: "Class 10",
                data: [100, 85, 75, 95, 70],
                backgroundColor: "#BFEAFF",
                borderRadius: 4,
                barThickness: 15,
            },
            {
                label: "Class 11",
                data: [75, 90, 60, 85, 55],
                backgroundColor: "#FDE68A",
                borderRadius: 4,
                barThickness: 15,
            },
            {
                label: "Class 12",
                data: [90, 85, 80, 75, 50],
                backgroundColor: "#DDD6FE",
                borderRadius: 4,
                barThickness: 15,
            },
        ],
    };

    const options: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                display: false
            },
            legend: {
                display: false,
                
            },
            tooltip: {
                callbacks: {
                    label: (ctx) => `${ctx.formattedValue}%`,
                },
                backgroundColor: "#fff",
                titleColor: "#333",
                bodyColor: "#333",
                borderColor: "#eee",
                borderWidth: 1,
                padding: 10,
                cornerRadius: 6,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 14,
                        family: "Plus Jakarta Sans, sans-serif"
                    },
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: (value) => `${value}%`,
                    stepSize: 25,
                    font: {
                        size: 14,
                        family: "Plus Jakarta Sans, sans-serif"
                    },
                },
            },
        },
    };

    return (
        <div className="h-full">
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
