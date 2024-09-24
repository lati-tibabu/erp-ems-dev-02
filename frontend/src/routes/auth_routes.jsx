import React from "react"
// import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/auth-pages/login"
import AdminLogin from "../pages/auth-pages/admin_login"
// import StudentLogin from "../pages/auth-pages/student_login"
import CreateUser from "../pages/auth-pages/create_user"
import Login from "../pages/admin/login"
import PrincipalLogin from "../pages/principal/login"
import TeacherLogin from "../pages/teacher/login"
import StudentLogin from "../pages/student/login"
import AuthPage from "../pages/auth-page"
import PageHolder from "../pages/page-holder"

const authRoutes = {
    path: '/auth',
    element: <AuthPage />,
    children: [
        { path: 'login',
             children: [
                {path: 'admin', element: <Login />},
                {path: 'principal', element: <PrincipalLogin />},
                {path: 'teacher', element: <TeacherLogin />},
                {path: 'student', element: <StudentLogin />}
             ]},
        { path: 'plogin', element: <PrincipalLogin />},
        { path: 'admin_login', element: <AdminLogin /> },
        { path: 'student_login', element: <StudentLogin /> },
        { path: 'create_user', element: <CreateUser /> },
        { path: 'login_page', element: <Login /> }
    ],
};

export default authRoutes;