import React from "react";
import PrincipalDashboard from "../pages/principal/principal_dashboard";

import ProtectedRoute from "../components/protectred_routes";

import Home from "../pages/principal/dashboard-contents/home";
import Students from "../pages/principal/dashboard-contents/students";
import Teachers from "../pages/principal/dashboard-contents/teachers";
import Departments from "../pages/principal/dashboard-contents/departments";
import Clubs from "../pages/principal/dashboard-contents/clubs";
import Calendar from "../pages/principal/dashboard-contents/calendar";
import Attendance from "../pages/principal/dashboard-contents/attendance";
import Profile from "../pages/principal/dashboard-contents/profile";
import Help from "../pages/principal/dashboard-contents/help";



const principalRoutes = {
    path: '/principal',
    element: <PrincipalDashboard />,
    children: [
        {path: 'home', element: <Home/>},
        {path: 'students', element: <Students/>},
        {path: 'teachers', element: <Teachers/>},
        {path: 'departments', element: <Departments/>},
        {path: 'clubs', element: <Clubs/>},
        {path: 'calendar', element: <Calendar/>},
        {path: 'attendance', element: <Attendance/>},
        {path: 'profile', element: <Profile/>},
        {path: 'help', element: <Help/>},
    ]
}

export default principalRoutes;
