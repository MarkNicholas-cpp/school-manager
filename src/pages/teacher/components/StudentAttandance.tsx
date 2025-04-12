
// components/AttendanceDonut.tsx
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import SelectComponent from './SelectComponent';

// Register elements
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const StudentAttandance = () => {
    const data: ChartData<'doughnut', number[], string> = {
        labels: ['Present', 'Absent'],
        datasets: [
            {
                data: [80, 20],
                backgroundColor: ['#cfceff', '#FAE27C'],
                borderWidth: 0,
                borderRadius: 8,
            },
        ],
    };
    const options: ChartOptions<'doughnut'> = {
        rotation: 90 - 8,
        cutout: "60%",
        plugins: {
            tooltip: {
                enabled: true, // ← this is important
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        return `${label}: ${value}%`;
                    }
                },
                backgroundColor: '#fff',
                titleColor: '#000',
                bodyColor: '#000',
                borderColor: '#E5E7EB',
                borderWidth: 1,
                titleFont: {
                    weight: 'bold'
                },
                bodyFont: {
                    size: 14
                },
                padding: 10,
                cornerRadius: 6
            },
            datalabels: {
                display: false
            },
            legend: {
                display: false
            }
        }
    };


    const [date, setDate] = useState<Date>(new Date());

    const dateRef = useRef<HTMLInputElement>(null);

    const handleLabelClick = () => {
        if (dateRef.current) {
            dateRef.current.showPicker();
        }
    }
    const formatDate = (date: Date) =>
        date.toLocaleDateString("en-GB", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        });
    const [selected, setSelected] = useState("grade-1");

    const selectOptions = [
        { label: "Grade 1", value: "grade-1" },
        { label: "Grade 2", value: "grade-2" },
        { label: "Grade 3", value: "grade-3" },
    ];

    return <div className="flex flex-col justify-between gap-4">
        <p className="heading-md font-semibold">Student Attendance</p>
        <div className="aspect-square w-[80%] self-center relative">
            <div className='absolute inset-0 flex items-center justify-center heading-lg font-semibold'>80%</div>
            <Doughnut data={data} options={options} />
        </div>
        <div className="custom-legend flex items-center justify-between px-5">
            <div className="label flex gap-2">
                <span className="w-[15px] block aspect-square rounded-full bg-[var(--color-light-purple)] self-center"></span>
                <p>Present</p>
            </div>
            <div className="label flex gap-2">
                <span className="w-[15px] block aspect-square rounded-full bg-[var(--color-yellow)] self-center"></span>
                <p>Absent</p>
            </div>
        </div>
        <div className="selection flex items-center justify-between">
            <div className="form-date-picker relative text-caption bg-[var(--color-light-grey)]/30  px-3 py-1.5 rounded-lg text-[var(--color-grey)]">
                <label htmlFor="date" className='flex items-center justify-center gap-2 cursor-pointer' onClick={handleLabelClick}>
                    <ReactSVG width={20} className='aspect-square' src='/src/assets/calendar-1.svg' />
                    <span className=''>{formatDate(date)}</span>
                    <span className='mt-1'>
                        <ReactSVG width={10} className='aspect-square' src='/src/assets/down.svg' />
                    </span>
                </label>
                <input ref={dateRef} type="date" name="date" id="date" className='opacity-0 absolute left-0 top-0 pointer-events-none' value={date.toISOString().split("T")[0]} onChange={(e) => setDate(new Date(e.target.value))} />
            </div>
            <SelectComponent
                name="grade"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                options={selectOptions}
            />
        </div>
    </div>

}

export default StudentAttandance;