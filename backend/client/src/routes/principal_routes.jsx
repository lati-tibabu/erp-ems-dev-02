import React from "react";
import PrincipalDashboard from "../pages/principal/principal_dashboard";

import ProtectedRoute from "../components/protectred_routes";

import Home from "../pages/principal/dashboard-contents/home";
import Students from "../pages/principal/dashboard-contents/students";
    import StudentList from "../pages/principal/dashboard-contents/students_pages/student-list";
        import ViewStudent from "../pages/principal/dashboard-contents/students_pages/view-student/view-student";

    import StudentRegistration from "../pages/principal/dashboard-contents/students_pages/student-registration";
        import BatchRegistration from "../pages/principal/dashboard-contents/students_pages/batch_registration";
        import SingleStudentRegistration from "../pages/principal/dashboard-contents/students_pages/single_registration";
        import StudentSpecificInfo from "../pages/principal/dashboard-contents/students_pages/specific_student_info";


import Teachers from "../pages/principal/dashboard-contents/teachers";
import Classes from "../pages/principal/dashboard-contents/classes";
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
        {path: 'students', element: <Students/>, 
            children: [
                {path: 'list', element: <StudentList />,
                    children: [
                        {path: 'view', element: <ViewStudent />},
                    ]
                },
                {path: 'registration', element: <StudentRegistration />,
                    children: [
                        {path: 'batch', element: <BatchRegistration />},
                        {path: 'single', element: <SingleStudentRegistration />, 
                            children: [
                                {path:'specific/:user_id', element: <StudentSpecificInfo />},
                            ]
                        },

                    ]
                }
            ]
        },
        {path: 'teachers', element: <Teachers/>},
        {path: 'classes', element: <Classes/>},
        {path: 'departments', element: <Departments/>},
        {path: 'clubs', element: <Clubs/>},
        {path: 'calendar', element: <Calendar/>},
        {path: 'attendance', element: <Attendance/>},
        {path: 'profile', element: <Profile/>},
        {path: 'help', element: <Help/>},
    ]
}

export default principalRoutes;
