import React from "react";
import StudentList from "./students_pages/student-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";

function Students() {
  return(
    <div>
      
      <h1>Students</h1>

      <div className="flex-row justify-between align-center">
        <div className="flex-row gap-10">
          <Link to="/principal/students/list" style={{textDecoration: 'none'}}>
            <div 
                className="max-w-300px p-10 br-10px bw-1px bs-solid bc-blueGreen100-80 mb-10 back-color-blueGreen100-10 color-blueGreen50"
                style={{cursor:'pointer'}}>StudentList
            </div>
          </Link>

          <Link to='/principal/students/registration' style={{textDecoration: 'none'}}>
            <div 
                className="max-w-300px p-10 br-10px bw-1px bs-solid bc-blueGreen100-80 mb-10 back-color-blueGreen100-10 color-blueGreen50"
                style={{cursor:'pointer'}}>Student Registration
            </div>
          </Link>
        </div>

        <div id="student_search" className="flex-row">
          <input id="bar" placeholder="Search student" type="text" className="flex-grow-1 br-none"  />
          <div id="search_button" className="flex-row justify-center align-center back-color-blue100 color-white p-10 " style={{cursor:'pointer'}}>
            <FontAwesomeIcon icon='fa-solid fa-search' />
          </div>
        </div>
      </div>

      {/* <StudentList /> */}
      <Outlet />
    </div>
    );
}

export default Students;
