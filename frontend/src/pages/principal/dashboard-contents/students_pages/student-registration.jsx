import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);
function StudentRegistration() {
    const location = useLocation();
    
    const onBatchPage = location.pathname.startsWith('/principal/students/registration/batch');
    const onSinglePage = location.pathname.startsWith('/principal/students/registration/single');

    const btnStyle = {
        "backgroundColor": onBatchPage ? "#034303" : "#ffffff",
        "color": onBatchPage ? "#ffffff" : "#034303",
        "border": onBatchPage ? "none" : "1px solid #034303",
    };

    const btnStyle2 = {
        "backgroundColor": onSinglePage ? "#034303" : "#ffffff",
        "color": onSinglePage ? "#ffffff" : "#034303",
        "border": onSinglePage ? "none" : "1px solid #034303",
    };

  return(
    <div>
        <h3>Student Registration</h3>
        <div id="btns" className="flex-row gap-10">
            <Link to='/principal/students/registration/batch' style={{"textDecoration":"none"}}>
                
                <div className="flex-row gap-10 bw-1px bs-solid bc-gray100 p-10 br-10px" style={btnStyle}>
                    <FontAwesomeIcon icon='fa-solid fa-file-upload' />
                    Batch Registration
                </div>

            </Link>

            <Link to='/principal/students/registration/single' style={{"textDecoration":"none"}}>

                <div className="flex-row gap-10 bw-1px bs-solid bc-gray100 p-10 br-10px" style={btnStyle2}>
                    <FontAwesomeIcon icon='fa-solid fa-file-signature' />
                    Single Registration    
                </div>
                 
            </Link>

        </div>
        <div>
            <Outlet />
        </div>
    </div>
);
}

export default StudentRegistration;
