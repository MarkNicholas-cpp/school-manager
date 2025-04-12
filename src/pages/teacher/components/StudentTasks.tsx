import { ReactSVG } from "react-svg";
import Search from "../../../utils/Search";
import StatusChip from "./StatusChip";

const StudentTasks = () => {
    const data = [
        {
            name: "Emily Peterson",
            class: "History 11 AP World History",
            topic: "World War II",
            task: "Essay on the Impact of WWII on Modern Europe",
            date: "April 30, 2024",
            status: { label: "Active", type: "info" },
        },
        {
            name: "Jacob Lee",
            class: "History 12",
            topic: "The Cold War",
            task: "Research Paper on the Cuban Missile Crisis",
            date: "May 5, 2024",
            status: { label: "Not Viewed", type: "danger" },
        },
        {
            name: "Sarah Martin",
            class: "History 10A",
            topic: "European Colonization",
            task: "Prepare Arguments for Class Debate",
            date: "April 29, 2024",
            status: { label: "Reviewing", type: "warning" },
        },
        {
            name: "Liam Johnson",
            class: "History 12",
            topic: "American History",
            task: "Presentation on the Civil Rights Movement",
            date: "May 10, 2024",
            status: { label: "Not Viewed", type: "danger" },
        },
        {
            name: "Olivia Smith",
            class: "History 11 AP World History",
            topic: "Industrial Revolution",
            task: "Group Project on the Effects of Industrialization",
            date: "May 3, 2024",
            status: { label: "Reviewing", type: "warning" },
        },
    ];

    return (
        <div className="">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Student Tasks</h2>
                <div className="flex items-center gap-3">
                    <Search />
                    <button className="w-9 h-9 rounded-full bg-[var(--color-warning)] flex items-center justify-center">
                        <ReactSVG
                            beforeInjection={(svg) => {
                                svg.querySelectorAll("path")?.forEach((path) =>
                                    path.setAttribute("stroke", "black")
                                );
                            }}
                            src="/src/assets/edit.svg"
                        />
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl">
                <table className="min-w-full text-sm">
                    <thead className="bg-[var(--color-light-cyan)]/30">
                        <tr>
                            {["Student Name", "Topic", "Task Name", "Submission Date", "Status"].map((header, i) => (
                                <th key={i} className="text-left font-medium text-gray-700 px-6 py-3">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {data.map((item, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                    <div className="text-xs text-gray-500">{item.class}</div>
                                </td>
                                <td className="px-6 py-4 text-gray-700">{item.topic}</td>
                                <td className="px-6 py-4 text-gray-700">{item.task}</td>
                                <td className="px-6 py-4 text-gray-700">{item.date}</td>
                                <td className="px-6 py-4">
                                    <StatusChip status={item.status.type as "success" || "danger" || "warning" || "info"} label={item.status.label} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center px-6 mt-4 text-sm text-gray-600">
                <button className="px-4 py-2 bg-white border rounded-md text-gray-600 hover:bg-gray-100">
                    Previous
                </button>
                <span>Page 1 of 12</span>
                <button className="px-4 py-2 bg-white border rounded-md text-gray-600 hover:bg-gray-100">
                    Next
                </button>
            </div>
        </div>
    );
};

export default StudentTasks;
