import { ReactSVG } from "react-svg";
import TaskCard from "./TaskCard";

const TaskComponent = () => {
    return <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
            <p className="heading-md font-semibold">Tasks</p>
            <button className="text-caption bg-[var(--color-light-cyan)]/30 text-[var(--color-primary)] p-1 px-4 rounded-3xl flex gap-1 items-center justify-between cursor-pointer"><span className="text-[15px] mb-1">+</span> Add Task</button>
        </div>
        <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center justify-center">
                <ReactSVG src="/src/assets/search-normal.svg" className="w-4 h-4" />
            </span>
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search Task"
                className="bg-[var(--color-broken-white)]  pl-10 rounded-[50px] w-full h-[35px]"
            />
        </div>
        <div className="tasks flex flex-col gap-5 h-[250px] scrollbar-hide overflow-y-scroll">
            <TaskCard name={"task-name-1"} id={"task-id-1"} task={"Grade Student Essays"} date={"April 24,2024"}></TaskCard>
            <TaskCard name={"task-name-2"} id={"task-id-2"} task={"Update Lesson Plans"} date={"April 25,2024"}></TaskCard>
            <TaskCard name={"task-name-3"} id={"task-id-3"} task={"Attend Department meeting"} date={"April 26,2024"}></TaskCard>
            <TaskCard name={"task-name-4"} id={"task-id-4"} task={"Complie Reports for the Parent Teacher Meeting"} date={"April 27,2024"}></TaskCard>
        </div>
    </div>;
};

export default TaskComponent;