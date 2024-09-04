import React, { useEffect, useState } from "react";
import ColumnWrapper from "../components/column_wrapper";
import { Heading2, Heading3, Paragraph } from "../components/Typography";
import RowWrapper from "../components/row_wrapper";
import { SecondaryButton } from "../components/buttons";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AuthPage() {

    const location = useLocation();

    const [onPage, setOnPage] = useState();

    useEffect(() => {
        setOnPage(location.pathname);
    }, [location.pathname]);

    const onAdminLoginPage = onPage === ('auth/login/admin');
    const onPrincipalLoginPage = onPage === ('auth/login/principal');
  return (
    <div className="flex-column back-color-white align-center justify-start p-30">
      <ColumnWrapper className="p-20 br-10px shadow-lg bw-none">
        <div>
          <Heading2 text="SchoolStream.com" className='font-w-800 mb-20'/>
          <Paragraph text="All in one school management system" />
          {/* <Heading2 text={onPage.endsWith('/admin')} /> */}
        </div>
        <Paragraph text="Login Portal" className="font-w-700 text-center" />

        <ColumnWrapper className='bw-none'>
          <RowWrapper className="justify-around bw-none">
            <Link to="/auth/login/admin">
                {onAdminLoginPage&&<FontAwesomeIcon icon='fa-solid fa-chevron-right' className="color-blueGreen100 font-w-400 font-lg pr-5" />}
                <SecondaryButton className={`font-w-400 ${onAdminLoginPage&&'bw-3px'}`}>Admin</SecondaryButton>
            </Link>
            <Link to="/auth/login/principal">
                {onPrincipalLoginPage&&<FontAwesomeIcon icon='fa-solid fa-chevron-right' className="color-blueGreen100 font-w-400 font-lg pr-5" />}
                <SecondaryButton className={`font-w-400 ${onPrincipalLoginPage&&'bw-3px'}`}>Principal</SecondaryButton>
            </Link>
          </RowWrapper>
        </ColumnWrapper>
      </ColumnWrapper>
      <div className="flex-column p-30 m-20 w-100p">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthPage;
