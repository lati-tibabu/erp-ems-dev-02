import React from 'react';
import AdminDashboard from '../pages/admin/admin_dashboard';
import Help from '../pages/admin/dashboard-contents/help';
import Home from '../pages/admin/dashboard-contents/home';
import Logout from '../pages/admin/dashboard-contents/logout';
import Profile from '../pages/admin/dashboard-contents/profile';
import Report from '../pages/admin/dashboard-contents/report';
import School from '../pages/admin/dashboard-contents/school';
import AddSchool from '../pages/admin/dashboard-contents/school-pages/add-school';
import SchoolListing from '../pages/admin/dashboard-contents/school-pages/school-listing';
import Settings from '../pages/admin/dashboard-contents/setting';
import Users from '../pages/admin/dashboard-contents/users';
import { elements } from 'chart.js';

const adminRoutes = {
  path: '/admin',
  element: <AdminDashboard />,
  children: [
    { path: 'home', element: <Home /> },
    { path: 'help', element: <Help /> },
    { path: 'logout', element: <Logout /> },
    { path: 'profile', element: <Profile /> },
    { path: 'report', element: <Report /> },
    { path: 'school', element: <School />,
      children : [
        {path: 'add', element: <AddSchool />},
        {path: 'listing', element: <SchoolListing />},
      ]
    },
    // { path: 'school/add', element: <AddSchool /> },
    // { path: 'school/listing', element: <SchoolListing /> },
    { path: 'settings', element: <Settings /> },
    { path: 'users', element: <Users /> },
  ],
};

export default adminRoutes;
