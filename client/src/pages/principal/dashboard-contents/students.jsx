import React, { useEffect } from "react";
import StudentList from "./students_pages/student-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

function Students() {
  const location = useLocation();
  const navigate = useNavigate();

  const onListPage = location.pathname.startsWith('/principal/students/list');
  const onRegistrationPage = location.pathname.startsWith('/principal/students/registration');


  useEffect(()=> {
    navigate('/principal/students/list')
  },[])

  return(
    <div>
      
      <h1>Students</h1>

      {/* {onListPage && <h1>On List Page</h1>}
      {onRegistrationPage && <h1>On Registration Page</h1>} */}

      <div className="flex-row justify-between align-center">
        <div className="flex-row gap-10">
          <Link to="/principal/students/list" style={{textDecoration: 'none'}}>
            <div 
                className={`max-w-300px p-10 br-10px mb-10 back-color-blueGreen100-10 color-blueGreen50 ${onListPage && 'bw-2px bs-solid bc-blueGreen100-80'}`}
                style={{cursor:'pointer'}}>StudentList
            </div>
          </Link>

          <Link to='/principal/students/registration' style={{textDecoration: 'none'}}>
            <div 
                className={`max-w-300px p-10 br-10px mb-10 back-color-blueGreen100-10 color-blueGreen50 ${onRegistrationPage && 'bw-2px bs-solid bc-blueGreen100-80'}`}
                style={{cursor:'pointer'}}>Student Registration
            </div>
          </Link>
        </div>

        {/* <div id="student_search" className="flex-row">
          <input id="bar" placeholder="Search student" type="text" className="flex-grow-1 br-none"  />
          <div id="search_button" className="flex-row justify-center align-center back-color-blue100 color-white p-10 " style={{cursor:'pointer'}}>
            <FontAwesomeIcon icon='fa-solid fa-search' />
          </div>
        </div> */}
      </div>

      {/* <StudentList /> */}
      <Outlet />
    </div>
    );
}

export default Students;
