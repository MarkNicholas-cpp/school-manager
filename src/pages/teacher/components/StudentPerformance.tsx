import { useState } from "react";
import BarChart from "./BarChart";
import SelectComponent from "./SelectComponent";

const StudentPreferance = () => {
    const [selectValue, setSelectValue] = useState<string>("Weekly");
    return <div className="flex h-full flex-col gap-5">
        <div className="flex justify-between">
            <p className="heading-md font-semibold">Student Performance</p>
            <SelectComponent name={"Period"} value={selectValue} onChange={function (e: React.ChangeEvent<HTMLSelectElement>): void {
                setSelectValue(e.target.value);
            }} options={[{ label: "Weekly", value: "Weekly" }, { label: "Monthly", value: "Monthly" }]}></SelectComponent>
        </div>
        <div className="h-full">
            <BarChart></BarChart>
        </div>
        <div className="custom-legend flex items-center justify-evenly px-5">
            <div className="label flex gap-2">
                <span className="w-[15px] block aspect-square rounded-full bg-[var(--color-light-purple)] self-center"></span>
                <p>Class 10</p>
            </div>
            <div className="label flex gap-2">
                <span className="w-[15px] block aspect-square rounded-full bg-[var(--color-yellow)] self-center"></span>
                <p>Class 11</p>
            </div>
            <div className="label flex gap-2">
                <span className="w-[15px] block aspect-square rounded-full bg-[var(--color-light-cyan)] self-center"></span>
                <p>Class 12</p>
            </div>
        </div>
    </div>;
}
export default StudentPreferance;