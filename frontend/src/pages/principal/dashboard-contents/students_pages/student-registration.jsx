import React from "react";
import { Link, Outlet } from "react-router-dom";
function StudentRegistration() {
  return(
    <div>
        <h3>Student Registration</h3>
        <div id="btns" className="flex-row gap-10">
            <Link to='/principal/students/registration/batch'>Batch Registration</Link>
            <Link to='/principal/students/registration/single'>Single Registration</Link>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
);
}

export default StudentRegistration;
