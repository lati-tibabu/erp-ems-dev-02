import React, { useEffect, useState } from "react";
import ColumnWrapper from "../components/column_wrapper";
import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
} from "../components/Typography";
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

  const onAdminLoginPage = onPage === "auth/login/admin";
  const onPrincipalLoginPage = onPage === "auth/login/principal";
  const onTeacherLoginPage = onPage === "auth/login/teacher";
  const onStudentLoginPage = onPage === "auth/login/student";
  const onAuth = onPage === "/auth/login";

  if (onAuth) {
    navigate("/");
    return null;
  }

  return (
    <div className="flex-column back-color-blue20-20 align-center justify-start h-100s">
      <ColumnWrapper
        className="p-10 shadow-md bw-none back-color-white w-90s"
        style={{}}
      >
        <div className="flex-row align-center gap-10">
          {/* <Heading2 text="SchoolStream.com" className="font-w-800 mb-20" /> */}
          <Link to="/">
            <ProperLogo2 style={{ height: "50px", marginLeft: "30px" }} />
          </Link>
          {/* <Paragraph text="All in one school management system" /> */}
        </div>
      </ColumnWrapper>
      <div className="flex-column p-10 m-20 w-100p">
        {/* <Paragraph text="Login Portal" className="font-w-700 text-center" /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default AuthPage;
