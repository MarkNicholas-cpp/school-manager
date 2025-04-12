import { ReactSVG } from "react-svg";

const TaskCard = ({ name, id, task, date }: { name: string, id: string, task: string, date: string }) => {
    return <div className="flex items-center justify-between">
        <div className="input flex gap-2 mx-2">
            <input type="checkbox" className="self-baseline mt-1" name={name} id={id} />
            <label htmlFor={id} className="cursor-pointer">
                <div className="">
                    <p className="paragraph-md text-ellipsis font-bold">{task}</p>
                    <p className="text-caption text-[var(--color-grey)]">{date}</p>
                </div>
            </label>
        </div>
        <div className="update-delete flex gap-2 self-baseline">
            <button className="cursor-pointer w-4 h-4">
                <ReactSVG src={"/src/assets/edit.svg"}></ReactSVG>
            </button>
            <button className="cursor-pointer w-4 h-4">
                <ReactSVG src={"/src/assets/trash.svg"}></ReactSVG>
            </button>
        </div>
    </div>;
};

export default TaskCard;


