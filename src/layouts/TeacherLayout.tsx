import { Outlet } from "react-router-dom";
import List from "../utils/NavList/List";
import ListItem from "../utils/NavList/ListItem";
import useAuthStore from "../hooks/useAuthStore";
import { ReactSVG } from "react-svg";
import { NavButton } from "../utils/Buttons";
import Profile from "../utils/Profile";


function TeacherLayout() {
    const { user, logout } = useAuthStore();
    return <div className="grid main-layout bg-[#f7f8fa] h-screen overflow-hidden">
        <div className="header px-6 flex items-center">
            <div className="flex justify-between w-full">
                <div className="relative">
                    <span className="absolute inset-y-0 left-4 flex items-center justify-center">
                        <ReactSVG src="/src/assets/search-normal.svg" className="w-4 h-4" />
                    </span>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Search"
                        className="border border-[var(--color-light-grey)] py-2.5 pl-10 px-4 rounded-4xl h-[40px]"
                    />
                </div>
                <div className="profile flex gap-1">
                    <NavButton icon={"/src/assets/messages-dark.svg"} />
                    <NavButton icon={"/src/assets/notification-dark.svg"} />
                    <Profile />
                </div>
            </div>
        </div>
        <div className="menu overflow-y-scroll bg-white">
            <div className="px-[30px] py-[22px]">
                <img src="/src/assets/Logo.png" className="object-cover" alt="School Manager Logo" />
            </div>
            <List heading="Menu">
                <ListItem icon={"/src/assets/home-2.svg"} link={`/${user?.role}`} text={"Dashboard"} />
                <ListItem link={`/${user?.role}/teachers`} text={"Teachers"} icon={"/src/assets/teacher.svg"} />
                <ListItem link={`/${user?.role}/students`} text={"Students"} icon={"/src/assets/profile-user.svg"} />
                <ListItem link={`/${user?.role}/attendance`} text={"Attendance"} icon={"/src/assets/people.svg"} />
                <ListItem icon={"/src/assets/dollar-square.svg"} link={`/${user?.role}/finance`} text={"Finance"} />
                <ListItem icon={"/src/assets/notification-status.svg"} link={`/${user?.role}/notification`} text={"Notice"} />
                <ListItem icon={"/src/assets/calendar.svg"} link={`/${user?.role}/calander`} text={"Calander"} />
                <ListItem icon={"/src/assets/book-saved.svg"} link={`/${user?.role}/library`} text={"Library"} />
                <ListItem icon={"/src/assets/messages.svg"} link={`/${user?.role}/messages`} text={"Messages"} />
            </List>
            <List heading="Others">
                <ListItem icon={"/src/assets/profile-circle.svg"} link={`/${user?.role}/profile`} text={"Profile"} />
                <ListItem icon={"/src/assets/setting-2.svg"} link={`/${user?.role}/settings`} text={"Settings"} />
                <ListItem icon={"/src/assets/logout.svg"} onClick={logout} text={"Logout"} />
            </List>
        </div>
        <div className="content px-6 overflow-y-scroll">
            <Outlet></Outlet>
        </div>
    </div>
}
export default TeacherLayout;