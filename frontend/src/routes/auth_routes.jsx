import React from "react"
// import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/auth-pages/login"
// import LoginPage from "../pages/auth-pages/login"
import AdminLogin from "../pages/auth-pages/admin_login"
import StudentLogin from "../pages/auth-pages/student_login"
import CreateUser from "../pages/auth-pages/create_user"
import Login from "../pages/admin/login"

// function AuthRoutes() {
//   return (
//     <Routes>
//         <Route path="login" element={< LoginPage/>} />
//         <Route path="login_page" element={< Login/>} />
//         <Route path="admin_login" element={<AdminLogin/>} />
//         <Route path="student_login" element={<StudentLogin/>} />
//         <Route path="create_user" element={<CreateUser/>} />
//         <Route path="not" element={<NotFound/>} errorElement = {<div> Error <br/>404 Not Found</div>}/>
//     </Routes>
//   )
// }

// export default AuthRoutes

const authRoutes = {
    path: '/auth',
    children: [
        { path: 'login', element: <Login /> },
        { path: 'admin_login', element: <AdminLogin /> },
        { path: 'student_login', element: <StudentLogin /> },
        { path: 'create_user', element: <CreateUser /> },
        { path: 'login_page', element: <Login /> }
    ],
};

export default authRoutes;