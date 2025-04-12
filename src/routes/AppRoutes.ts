import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../pages/auth/AdminLogin";
import TeacherLogin from "../pages/auth/TeacherLogin";
import StudentLogin from "../pages/auth/StudentLogin";
import AuthLayout from "../layouts/AuthLayout";
import StudentLayout from "../layouts/StudentLayout";
import StudentDashboard from "../pages/dashboard/StudentDashboard";
import TeacherLayout from "../layouts/TeacherLayout";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import TeacherDashboard from "../pages/dashboard/TeacherDashboard";
import Teachers from "../pages/teacher/Teachers";
import AdminLayout from "../layouts/AdminLayout";
import { ProtectedRoute, PrivateRoute } from "./PrivateRoute";
import RoleBasedRoute from "./RoleBasedRoute";


import Role from '../types/auth';
import Students from "../pages/teacher/Students";

const router = createBrowserRouter([
    {
        path: "/",
        Component: PrivateRoute,
        children: [
            {
                path: "", Component: AuthLayout, children: [
                    { path: "", Component: AdminLogin },
                    { path: "teacher-login", Component: TeacherLogin },
                    { path: "student-login", Component: StudentLogin },
                ]
            }
        ]
    },
    {
        path: "/student",
        Component: ProtectedRoute,
        children: [
            {
                path: "",
                Component: () => RoleBasedRoute({ allowedRoles: [Role.STUDENT] }),
                children: [
                    {
                        path: "", Component: StudentLayout, children: [
                            { path: "", Component: StudentDashboard }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: "/teacher",
        Component: ProtectedRoute,
        children: [
            {
                path: "",
                Component: () => RoleBasedRoute({ allowedRoles: [Role.TEACHER] }),
                children: [
                    {
                        path: "", Component: TeacherLayout, children: [
                            { path: "", Component: TeacherDashboard },
                            { path: "teachers", Component: Teachers },
                            { path: "students", Component: Students }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: "/admin",
        Component: ProtectedRoute,
        children: [
            {
                path: "",
                Component: () => RoleBasedRoute({ allowedRoles: [Role.ADMIN] }),
                children: [
                    {
                        path: "", Component: TeacherLayout, children: [
                            { path: "", Component: AdminDashboard }
                        ]
                    }
                ]
            }
        ]
    }
]);

export default router;
