import React, { useEffect, useState } from "react";
import ColumnWrapper from "../components/column_wrapper";
import { Heading1, Heading2, Heading3, Paragraph } from "../components/Typography";
import RowWrapper from "../components/row_wrapper";
import { SecondaryButton } from "../components/buttons";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProperLogo2 } from "../components/ems_logo";

function AuthPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const [onPage, setOnPage] = useState();

    useEffect(() => {
        setOnPage(location.pathname);
    }, [location.pathname]);

    const onAdminLoginPage = onPage === 'auth/login/admin';
    const onPrincipalLoginPage = onPage === 'auth/login/principal';
    const onTeacherLoginPage = onPage === 'auth/login/teacher';
    const onStudentLoginPage = onPage === 'auth/login/student';
    const onAuth = onPage === '/auth/login';

    if(onAuth){
        navigate('/');
        return null;
    }

    return (
        <div className="flex-column back-color-white align-center justify-start p-5">
            <ColumnWrapper className="p-20 br-10px shadow-lg bw-none back-color-white">
                <div className='flex-column align-center'>
                    {/* <Heading2 text="SchoolStream.com" className='font-w-800 mb-20'/> */}
                    <Link to='/'>
                        <ProperLogo2 style={{ height: '80px' }} />
                    </Link> 
                    <Paragraph text="All in one school management system" />
                </div>
                <Paragraph text="Login Portal" className="font-w-700 text-center" />

                {/* <ColumnWrapper className='bw-none'>
                    <RowWrapper className="justify-around bw-none">
                        <Link to="/auth/login/admin">
                            {onAdminLoginPage && <FontAwesomeIcon icon='fa-solid fa-chevron-right' className="color-blueGreen100 font-w-400 font-lg pr-5" />}
                            <SecondaryButton className={`font-w-400 ${onAdminLoginPage && 'bw-3px'}`}>Admin</SecondaryButton>
                        </Link>
                        <Link to="/auth/login/principal">
                            {onPrincipalLoginPage && <FontAwesomeIcon icon='fa-solid fa-chevron-right' className="color-blueGreen100 font-w-400 font-lg pr-5" />}
                            <SecondaryButton className={`font-w-400 ${onPrincipalLoginPage && 'bw-3px'}`}>Principal</SecondaryButton>
                        </Link>
                        <Link to="/auth/login/teacher">
                            {onTeacherLoginPage && <FontAwesomeIcon icon='fa-solid fa-chevron-right' className="color-blueGreen100 font-w-400 font-lg pr-5" />}
                            <SecondaryButton className={`font-w-400 ${onTeacherLoginPage && 'bw-3px'}`}>Teacher</SecondaryButton>
                        </Link>
                        <Link to="/auth/login/student">
                            {onStudentLoginPage && <FontAwesomeIcon icon='fa-solid fa-chevron-right' className="color-blueGreen100 font-w-400 font-lg pr-5" />}
                            <SecondaryButton className={`font-w-400 ${onStudentLoginPage && 'bw-3px'}`}>Student</SecondaryButton>
                        </Link>
                    </RowWrapper>
                </ColumnWrapper> */}
            </ColumnWrapper>
            <div className="flex-column p-10 m-20 w-100p">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthPage;
