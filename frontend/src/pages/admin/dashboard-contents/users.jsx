import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Users() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=> {
    location.pathname === '/admin/users' && navigate('/admin/users/overview');
  },[])

  return (
    <>
      <Outlet />
    </>
  );
}

export default Users;
