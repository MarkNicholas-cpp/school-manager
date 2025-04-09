import { Link } from "react-router-dom";

export default function AdminLogin() {
    return <>
        <h1>Admin Login Component </h1>
        <Link to="student-login" >Login as Student</Link><br />
        <Link to="teacher-login" >Login as Teacher</Link>
    </>
}