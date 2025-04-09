import { Outlet } from "react-router-dom";

function AuthLayout() {
    return <>
        Comman Layout for Admin , Teacher , Student <br />
        <Outlet></Outlet>
    </>
}
export default AuthLayout;