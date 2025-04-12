import { useState, useRef } from "react";
import SelectComponent from "./SelectComponent";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Filler,
    ChartOptions,
    ChartData,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Filler);

const TeachingActivity = () => {
    const [selectValue, setSelectValue] = useState("Monthly");
    const chartRef = useRef<any>(null);

    const monthlyData = [50, 140, 70, 120, 80, 130, 60, 110, 70, 125, 90, 95];
    const labels = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const getGradient = (ctx: CanvasRenderingContext2D, chartArea: any) => {
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, "#FAE27C");  // same color at top
        gradient.addColorStop(1, "#fff");  // same color at bottom
        return gradient;
    };


    const chartData: ChartData<"line"> = {
        labels,
        datasets: [
            {
                label: "Working Hours",
                data: monthlyData,
                fill: true,
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    console.log(ctx);
                    if (!chartArea) return "#FAE27C"; // avoid undefined errors
                    return getGradient(ctx, chartArea);
                },
                borderColor: "#FAE27C",
                tension: 0.4,
                pointBackgroundColor: "#FAE27C",
                pointBorderColor: "#fff",
                pointHoverRadius: 5,
                pointRadius: 0,
                borderWidth:4,
            },
        ],
    };

    const options: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                }, ticks: {
                    stepSize: 40,
                    font: {
                        size: 14,
                        family: "Plus Jakarta Sans, sans-serif"
                    }
                }
            },
            y: {
                min: 0,
                max: 160,
                ticks: {
                    stepSize: 40,
                    font: {
                        size: 14,
                        family: "Plus Jakarta Sans, sans-serif"
                    }
                },
            },
        },
        plugins: {
            legend: { display: false },
            datalabels: {
                display: false
            }
            ,
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `Working Hours: ${context.parsed.y} Hours`;
                    },
                },

            },

        },
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold">Teaching Activity</p>
                <SelectComponent
                    name="Period"
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                    options={[
                        { label: "Weekly", value: "Weekly" },
                        { label: "Monthly", value: "Monthly" },
                    ]}
                />
            </div>
            <div className="h-72">
                <Line ref={chartRef} data={chartData} options={options} />
            </div>
        </div>
    );
};

export default TeachingActivity;
