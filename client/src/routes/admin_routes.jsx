import React from "react";
import AdminDashboard from "../pages/admin/admin_dashboard.jsx";
import Help from "../pages/admin/dashboard-contents/help.jsx";
import Home from "../pages/admin/dashboard-contents/home.jsx";
import Logout from "../pages/admin/dashboard-contents/logout.jsx";
import Profile from "../pages/admin/dashboard-contents/profile.jsx";
import Report from "../pages/admin/dashboard-contents/report.jsx";
import School from "../pages/admin/dashboard-contents/school.jsx";
import AddSchool from "../pages/admin/dashboard-contents/school-pages/add-school.jsx";
import SchoolListing from "../pages/admin/dashboard-contents/school-pages/school-listing.jsx";
import Settings from "../pages/admin/dashboard-contents/setting.jsx";
import Users from "../pages/admin/dashboard-contents/users.jsx";

import ViewSchool from "../pages/admin/dashboard-contents/school-pages/view-school.jsx";
import EditSchool from "../pages/admin/dashboard-contents/school-pages/edit-school.jsx";

import AllSchoolListing from "../pages/admin/dashboard-contents/school-pages/school-lists/all-school-listing.jsx";
import ActiveSchoolListing from "../pages/admin/dashboard-contents/school-pages/school-lists/active-school-listing.jsx";
import PendingSchoolListing from "../pages/admin/dashboard-contents/school-pages/school-lists/pending-school-listing.jsx";
import DeletedSchoolListing from "../pages/admin/dashboard-contents/school-pages/school-lists/deleted-school-listing.jsx";
import ArchivedSchoolListing from "../pages/admin/dashboard-contents/school-pages/school-lists/archived-school-listing.jsx";

import SchoolDetails from "../pages/admin/dashboard-contents/school-pages/school-info-pages/school-details.jsx";
import SchoolStudents from "../pages/admin/dashboard-contents/school-pages/school-info-pages/school-students.jsx";
import SchoolTeachers from "../pages/admin/dashboard-contents/school-pages/school-info-pages/school-teachers.jsx";
import SchoolDepartments from "../pages/admin/dashboard-contents/school-pages/school-info-pages/school-departments.jsx";
import SchoolClubs from "../pages/admin/dashboard-contents/school-pages/school-info-pages/school-clubs.jsx";
import SchoolEvents from "../pages/admin/dashboard-contents/school-pages/school-info-pages/school-events.jsx";
import SchoolExtras from "../pages/admin/dashboard-contents/school-pages/school-info-pages/school-extras.jsx";

import OverviewPages from "../pages/admin/dashboard-contents/user-pages/overview-page.jsx";
import Principal from "../pages/admin/dashboard-contents/user-pages/principal.jsx";
import Supervisor from "../pages/admin/dashboard-contents/user-pages/supervisor.jsx";
import Teacher from "../pages/admin/dashboard-contents/user-pages/teacher.jsx";
import Student from "../pages/admin/dashboard-contents/user-pages/student.jsx";
import Parent from "../pages/admin/dashboard-contents/user-pages/parent.jsx";

// Principal routes

import CreatePrincipal from "../pages/admin/dashboard-contents/user-pages/user-principal/create-principal.jsx";
import CreatePrincipalUser from "../pages/admin/dashboard-contents/user-pages/user-principal/create-principal-pages/create-principals-user-info.jsx";
import CreatePrincipalSpecific from "../pages/admin/dashboard-contents/user-pages/user-principal/create-principal-pages/create-principal-specific-info.jsx";
import TestPrincipal from "../pages/admin/dashboard-contents/user-pages/user-principal/create-principal-pages/test-principal.jsx";
// import PrincipalList from '../pages/admin/dashoard-contents/user-pages/user-principal/principal-list/principal-lists';
import PrincipalList from "../pages/admin/dashboard-contents/user-pages/user-principal/principal-list/principal-lists.jsx";
import ViewPrincipal from "../pages/admin/dashboard-contents/user-pages/user-principal/principal-list/view-principal.jsx";
import ViewPrincipalProfile from "../pages/admin/dashboard-contents/user-pages/user-principal/principal-list/view-principal-profile.jsx";

// Teacher routes

import CreateTeacher from "../pages/admin/dashboard-contents/user-pages/user-teacher/create-teacher.jsx";
import CreateTeacherUser from "../pages/admin/dashboard-contents/user-pages/user-teacher/create-teacher-pages/create-teachers-user-info.jsx";
import CreateTeacherSpecific from "../pages/admin/dashboard-contents/user-pages/user-teacher/create-teacher-pages/create-teacher-specific-info.jsx";
import TestTeacher from "../pages/admin/dashboard-contents/user-pages/user-teacher/create-teacher-pages/test-teacher.jsx";
import TeacherList from "../pages/admin/dashboard-contents/user-pages/user-teacher/teacher-list/teacher-lists.jsx";
import ViewTeacher from "../pages/admin/dashboard-contents/user-pages/user-teacher/teacher-list/view-teacher.jsx";
import ViewTeacherProfile from "../pages/admin/dashboard-contents/user-pages/user-teacher/teacher-list/view-teacher-profile.jsx";
// import { elements } from 'chart.js';
import ProtectedRoute from "../components/protectred_routes.jsx";
import CreateContact from "../pages/admin/dashboard-contents/user-pages/user-principal/create-principal-pages/create-contact.jsx";
import Course from "../pages/admin/dashboard-contents/course.jsx";

const adminRoutes = {
  path: "/admin",
  element: <AdminDashboard />,
  children: [
    { path: "home", element: <ProtectedRoute component={Home} /> },
    { path: "help", element: <ProtectedRoute component={Help} /> },
    { path: "logout", element: <ProtectedRoute component={Logout} /> },
    { path: "profile", element: <ProtectedRoute component={Profile} /> },
    { path: "report", element: <ProtectedRoute component={Report} /> },
    { path: "course", element: <ProtectedRoute component={Course} /> },
    {
      path: "school",
      element: <ProtectedRoute component={School} />,
      children: [
        { path: "add", element: <AddSchool /> },
        {
          path: "listing",
          element: <SchoolListing />,
          children: [
            { path: "all", element: <AllSchoolListing /> },
            { path: "active", element: <ActiveSchoolListing /> },
            { path: "pending", element: <PendingSchoolListing /> },
            { path: "deleted", element: <DeletedSchoolListing /> },
            { path: "archived", element: <ArchivedSchoolListing /> },
          ],
        },
        {
          path: "view/:schoolId",
          element: <ViewSchool />,
          children: [
            { path: "details", element: <SchoolDetails /> },
            { path: "students", element: <SchoolStudents /> },
            { path: "teachers", element: <SchoolTeachers /> },
            { path: "departments", element: <SchoolDepartments /> },
            { path: "clubs", element: <SchoolClubs /> },
            { path: "events", element: <SchoolEvents /> },
            { path: "extras", element: <SchoolExtras /> },
          ],
        },
        { path: "edit/:schoolId", element: <EditSchool /> },
      ],
    },
    { path: "settings", element: <ProtectedRoute component={Settings} /> },
    {
      path: "users",
      element: <ProtectedRoute component={Users} />,
      children: [
        {
          path: "overview",
          element: <OverviewPages />,
          children: [
            {
              path: "principal",
              element: <Principal />,
              children: [
                {
                  path: "create",
                  element: <CreatePrincipal />,
                  children: [
                    {
                      path: "user",
                      element: <CreatePrincipalUser />,
                      children: [
                        {
                          path: "specific/:user_id",
                          element: <CreatePrincipalSpecific />,
                        },
                      ],
                    },
                    { path: "contact/:user_id", element: <CreateContact /> },
                    { path: "test", element: <TestPrincipal /> },
                  ],
                },
                {
                  path: "list",
                  element: <PrincipalList />,
                  children: [{ path: "view", element: <ViewPrincipal /> }],
                },
                { path: "view_profile", element: <ViewPrincipalProfile /> },
              ],
            },
            { path: "supervisor", element: <Supervisor /> },
            {
              path: "teacher",
              element: <Teacher />,
              children: [
                {
                  path: "create",
                  element: <CreateTeacher />,
                  children: [
                    {
                      path: "user",
                      element: <CreateTeacherUser />,
                      children: [
                        {
                          path: "specific/:user_id",
                          element: <CreateTeacherSpecific />,
                        },
                      ],
                    },
                    { path: "contact/:user_id", element: <CreateContact /> },
                    { path: "test", element: <TestTeacher /> },
                  ],
                },
                {
                  path: "list",
                  element: <TeacherList />,
                  children: [{ path: "view", element: <ViewTeacher /> }],
                },
                { path: "view_profile", element: <ViewTeacherProfile /> },
              ],
            },
            { path: "student", element: <Student /> },
            { path: "parent", element: <Parent /> },
          ],
        },
      ],
    },
  ],
};

export default adminRoutes;
