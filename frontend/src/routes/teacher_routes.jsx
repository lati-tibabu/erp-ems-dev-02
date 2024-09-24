import React from "react";

import TeacherDashboard from "../pages/teacher/teacher_dashboard";

import Home from "../pages/teacher/dashboard-contents/home";
import Courses from "../pages/teacher/dashboard-contents/courses";
import Classes from "../pages/teacher/dashboard-contents/classes";
import Students from "../pages/teacher/dashboard-contents/students";
import Calendar from "../pages/teacher/dashboard-contents/calendar";
import Attendance from "../pages/teacher/dashboard-contents/attendance";
import Profile from "../pages/teacher/dashboard-contents/profile";
import Help from "../pages/teacher/dashboard-contents/help";

const teacherRoutes = {
    path: '/teacher',
    element: <TeacherDashboard />,
    children: [
        {path: 'home', element: <Home/>},
        {path: 'courses', element: <Courses/>},
        {path: 'classes', element: <Classes/>},
        {path: 'students', element: <Students/>},
        {path: 'calendar', element: <Calendar/>},
        {path: 'attendance', element: <Attendance/>},
        {path: 'profile', element: <Profile/>},
        {path: 'help', element: <Help/>},
    ]
}

export default teacherRoutes;