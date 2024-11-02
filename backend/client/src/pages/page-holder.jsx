import React from "react";
import { Outlet } from "react-router-dom";

function PageHolder() {
  return (
    <>
        <Outlet />
    </>
  );
}

export default PageHolder;
