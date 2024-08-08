import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './routes'

import 'normalize.css'; // for normalizing the default styling applied by the react itself

import './index.css'
// import CreateUser from './pages/create_user'
// import AdminLogin from './pages/admin_login'
// import AdminDashboard from './pages/admin/admin_dashboard'
// import StudentLogin from './pages/student_login'
// import SchoolCreate from './pages/school_create'
// import AdminLogin2 from './pages/admin/login'
import ViewSchool from './pages/admin/dashboard-contents/school-pages/view-school';

function App() {
  return (
    // <Router>
    //   <AllRoutes />
    // </Router>
    // <div>App</div>
    // <CreateUser />
    // <AdminLogin2 />
    // <AdminDashboard />
    // <StudentLogin />
    // <SchoolCreate/>
    <ViewSchool />
  )
}

export default App
