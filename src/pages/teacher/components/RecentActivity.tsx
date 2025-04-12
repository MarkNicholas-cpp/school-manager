import RecentActivityTile from "./RecentActivityTile";

const RecentActivity = () => {
    return <div className="">
        <div className="flex justify-between mb-5">
            <p className="heading-md font-semibold ">Recent Activity</p>
            <button className="text-caption text-[var(--color-grey)] cursor-pointer">View all</button>
        </div>
        <div className="flex flex-col gap-3 h-[230px] scrollbar-hide overflow-y-scroll">
            <RecentActivityTile
                title="Curriculum Update Submitted"
                description="Your multimedia proposal for the World History curriculum has been approved."
                time="7:00 AM"
            />
            <RecentActivityTile
                title="Curriculum Update Submitted"
                description="Your multimedia proposal for the World History curriculum has been approved."
                time="7:00 AM"
            />
            <RecentActivityTile
                title="Curriculum Update Submitted"
                description="Your multimedia proposal for the World History curriculum has been approved."
                time="7:00 AM"
            />
            <RecentActivityTile
                title="Curriculum Update Submitted"
                description="Your multimedia proposal for the World History curriculum has been approved."
                time="7:00 AM"
            />
            <RecentActivityTile
                title="Curriculum Update Submitted"
                description="Your multimedia proposal for the World History curriculum has been approved."
                time="7:00 AM"
            />
        </div>
    </div>;
};

export default RecentActivity;