import React from "react";

import StudentDashboard from "../pages/student/student_dashboard";

import Home from "../pages/student/dashboard-content/home";
import MyClass from "../pages/student/dashboard-content/my_class";
import MyResult from "../pages/student/dashboard-content/my_result";
import Profile from "../pages/student/dashboard-content/profile";
import Help from "../pages/student/dashboard-content/help";

const studentRoutes = {
    path: '/student',
    element: <StudentDashboard />,
    children: [
        {path: 'home', element: <Home />},
        {path: 'my-class',element:<MyClass />},
        {path: 'my-result',element:<MyResult />},
        {path: 'profile',element:<Profile />},
        {path: 'help',element:<Help />},
    ]
}

export default studentRoutes;
