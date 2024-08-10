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

import ViewSchool from '../pages/admin/dashboard-contents/school-pages/view-school';
import EditSchool from '../pages/admin/dashboard-contents/school-pages/edit-school';
// import { elements } from 'chart.js';
import ProtectedRoute from '../components/protectred_routes';
import { elements } from 'chart.js';

const adminRoutes = {
  path: '/admin',
  element: <AdminDashboard />,
  // element: { path: 'home', element: <ProtectedRoute component={Home} />},
  children: [
    // { path: 'home', element: <Home /> },
    { path: 'home', element: <ProtectedRoute component={Home} />},
    // { path: 'help', element: <Help /> },
    { path: 'help', element: <ProtectedRoute component={Help} />},
    // { path: 'logout', element: <Logout /> },
    { path: 'logout', element: <ProtectedRoute component={Logout} /> },
    // { path: 'profile', element: <Profile /> },
    { path: 'profile', element: <ProtectedRoute component={Profile} /> },
    // { path: 'report', element: <Report /> },
    { path: 'report', element: <ProtectedRoute component={Report} /> },
    // { path: 'school', element: <School />,
    { path: 'school', element: <ProtectedRoute component={School} />,
      children : [
        {path: 'add', element: <AddSchool />},
        {path: 'listing', element: <SchoolListing />},
        {path: 'view/:schoolId', element: <ViewSchool />},
        {path: 'edit/:schoolId', element: <EditSchool />},
      ]
    },
    // { path: 'school/add', element: <AddSchool /> },
    // { path: 'school/listing', element: <SchoolListing /> },
    // { path: 'settings', element: <Settings /> },
    { path: 'settings', element: <ProtectedRoute component={Settings} /> },
    // { path: 'users', element: <Users /> },
    { path: 'users', element: < ProtectedRoute component={Users} /> },
  ],
};

export default adminRoutes;
