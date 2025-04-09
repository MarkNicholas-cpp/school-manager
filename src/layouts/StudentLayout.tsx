import { Outlet } from "react-router-dom";

function StudentLayout() {
    return <>
        Comman Layout for Student and Student Routes<br />
        <Outlet></Outlet>
    </>
}
export default StudentLayout;