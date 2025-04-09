import { Outlet } from "react-router-dom";

function AdminLayout() {
    return <>
        Comman Layout for Admin and Admin Routes<br />
        <Outlet></Outlet>
    </>
}
export default AdminLayout;