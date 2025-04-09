import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../hooks/useAuthStore";

const RoleBasedRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
    const { user, isValidSession } = useAuthStore();
    console.log("Role based route")
    if (!isValidSession()) return <Navigate to="/" replace />;
    if (!user || !allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" replace />;

    return <Outlet />;
};

export default RoleBasedRoute;
