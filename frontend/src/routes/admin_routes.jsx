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

import OverviewPages from '../pages/admin/dashboard-contents/user-pages/overview-page';
import Principal from '../pages/admin/dashboard-contents/user-pages/principal';
import Supervisor from '../pages/admin/dashboard-contents/user-pages/supervisor';
import Teacher from '../pages/admin/dashboard-contents/user-pages/teacher';
import Student from '../pages/admin/dashboard-contents/user-pages/student';
import Parent from '../pages/admin/dashboard-contents/user-pages/parent';

// Principal routes

import CreatePrincipal from '../pages/admin/dashboard-contents/user-pages/user-principal/create-principal';
  import CreatePrincipalUser from '../pages/admin/dashboard-contents/user-pages/user-principal/create-principal-pages/create-principals-user-info';
  import CreatePrincipalSpecific from '../pages/admin/dashboard-contents/user-pages/user-principal/create-principal-pages/create-principal-specific-info';
  import TestPrincipal from '../pages/admin/dashboard-contents/user-pages/user-principal/create-principal-pages/test-principal';
// import PrincipalList from '../pages/admin/dashoard-contents/user-pages/user-principal/principal-list/principal-lists';
import PrincipalList from '../pages/admin/dashboard-contents/user-pages/user-principal/principal-list/principal-lists.jsx';
  import ViewPrincipal from '../pages/admin/dashboard-contents/user-pages/user-principal/principal-list/view-principal.jsx';
  import ViewPrincipalProfile from '../pages/admin/dashboard-contents/user-pages/user-principal/principal-list/view-principal-profile.jsx';

// Teacher routes

import CreateTeacher from '../pages/admin/dashboard-contents/user-pages/user-teacher/create-teacher';
  import CreateTeacherUser from '../pages/admin/dashboard-contents/user-pages/user-teacher/create-teacher-pages/create-teachers-user-info'
  import CreateTeacherSpecific from '../pages/admin/dashboard-contents/user-pages/user-teacher/create-teacher-pages/create-teacher-specific-info';
  import TestTeacher from '../pages/admin/dashboard-contents/user-pages/user-teacher/create-teacher-pages/test-teacher';
import TeacherList from '../pages/admin/dashboard-contents/user-pages/user-teacher/teacher-list/teacher-lists';
  import ViewTeacher from '../pages/admin/dashboard-contents/user-pages/user-teacher/teacher-list/view-teacher';
  import ViewTeacherProfile from '../pages/admin/dashboard-contents/user-pages/user-teacher/teacher-list/view-teacher-profile';
// import { elements } from 'chart.js';
import ProtectedRoute from '../components/protectred_routes';
import CreateContact from '../pages/admin/dashboard-contents/user-pages/user-principal/create-principal-pages/create-contact';

const adminRoutes = {
  path: '/admin',
  element: <AdminDashboard />,
  children: [
    { path: 'home', element: <ProtectedRoute component={Home} />},
    { path: 'help', element: <ProtectedRoute component={Help} />},
    { path: 'logout', element: <ProtectedRoute component={Logout} /> },
    { path: 'profile', element: <ProtectedRoute component={Profile} /> },
    { path: 'report', element: <ProtectedRoute component={Report} /> },
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
    { path: 'settings', element: <ProtectedRoute component={Settings} /> },
    { path: 'users', element: < ProtectedRoute component={Users} /> ,
      children: [
        {path: 'overview', element: <OverviewPages />,
          children: [
            {path: 'principal', element: <Principal />,
              children: [
                {path: 'create', element: <CreatePrincipal />,
                  children : [
                    {path: 'user', element: <CreatePrincipalUser />,
                      children: [
                        {path: 'specific/:user_id', element: <CreatePrincipalSpecific />}
                      ]
                    },
                    {path: 'contact/:user_id', element: <CreateContact />},
                    {path: 'test', element: <TestPrincipal />},
                  ]
                },
                {path: 'list', element: <PrincipalList />,
                  children: [
                    {path: 'view', element: <ViewPrincipal />},
                  ]
                },
                {path: 'view_profile', element: <ViewPrincipalProfile />}
              ]
            },
            {path: 'supervisor', element: <Supervisor />},
            {path: 'teacher', element: <Teacher />,
              children: [
                {path: 'create', element: <CreateTeacher />,
                  children : [
                    {path: 'user', element: <CreateTeacherUser />,
                      children: [
                        {path: 'specific/:user_id', element: <CreateTeacherSpecific />}
                      ]
                    },
                    {path: 'contact/:user_id', element: <CreateContact />},
                    {path: 'test', element: <TestTeacher />},
                  ]
                },
                {path: 'list', element: <TeacherList />,
                  children: [
                    {path: 'view', element: <ViewTeacher />},
                  ]
                },
                {path: 'view_profile', element: <ViewTeacherProfile />}
              ]
            },
            {path: 'student', element: <Student />},
            {path: 'parent', element: <Parent />},
          ]
        },
      ],

  },
  ],
};

export default adminRoutes;
