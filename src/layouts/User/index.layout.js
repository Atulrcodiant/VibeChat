import React from "react";
import { Outlet } from "react-router-dom";
import "../../assets/frontend/scss/custom.scss";

function AdminLayout() {
  return <Outlet />;
}

export default AdminLayout;
