import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../hooks/useAuthStore";

export const ProtectedRoute = () => {
    const { isValidSession } = useAuthStore();
    console.log(isValidSession() ? "Valid session" : "Not the valid session")
    return isValidSession() ? <Outlet /> : <Navigate to="/teacher-login" replace />;
};

export const PrivateRoute = () => {
    const { isValidSession, user } = useAuthStore();
    
    return isValidSession() ? (
      <Navigate to={`/${user?.role}`} replace /> // Redirect based on role
    ) : (
      <Outlet />
    );
  };
