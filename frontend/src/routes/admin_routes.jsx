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

import AllSchoolListing from '../pages/admin/dashboard-contents/school-pages/school-lists/all-school-listing';
import ActiveSchoolListing from '../pages/admin/dashboard-contents/school-pages/school-lists/active-school-listing';
import PendingSchoolListing from '../pages/admin/dashboard-contents/school-pages/school-lists/pending-school-listing';
import DeletedSchoolListing from '../pages/admin/dashboard-contents/school-pages/school-lists/deleted-school-listing';
import ArchivedSchoolListing from '../pages/admin/dashboard-contents/school-pages/school-lists/archived-school-listing';

import SchoolDetails from '../pages/admin/dashboard-contents/school-pages/school-info-pages/school-details';
import SchoolStudents from '../pages/admin/dashboard-contents/school-pages/school-info-pages/school-students';
import SchoolTeachers from '../pages/admin/dashboard-contents/school-pages/school-info-pages/school-teachers';
import SchoolDepartments from '../pages/admin/dashboard-contents/school-pages/school-info-pages/school-departments';
import SchoolClubs from '../pages/admin/dashboard-contents/school-pages/school-info-pages/school-clubs';
import SchoolEvents from '../pages/admin/dashboard-contents/school-pages/school-info-pages/school-events';
import SchoolExtras from '../pages/admin/dashboard-contents/school-pages/school-info-pages/school-extras';

// import { elements } from 'chart.js';
import ProtectedRoute from '../components/protectred_routes';

const adminRoutes = {
  path: '/admin',
  element: <AdminDashboard />,
  // errorElement: <div>404</div>,
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
        {path: 'listing', element: <SchoolListing />,
          children: [
            {path: 'all', element: <AllSchoolListing />},
            {path: 'active', element: <ActiveSchoolListing />},
            {path: 'pending', element: <PendingSchoolListing />},
            {path: 'deleted', element: <DeletedSchoolListing />},
            {path: 'archived', element: <ArchivedSchoolListing />},
          ]
        },
        {path: 'view/:schoolId', element: <ViewSchool />,
          children: [
            {path: 'details', element: <SchoolDetails />},
            {path: 'students', element: <SchoolStudents />},
            {path: 'teachers', element: <SchoolTeachers />},
            {path: 'departments', element: <SchoolDepartments />},
            {path: 'clubs', element: <SchoolClubs />},
            {path: 'events', element: <SchoolEvents />},
            {path: 'extras', element: <SchoolExtras />},
          ]
        },
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
