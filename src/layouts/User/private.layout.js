import React from "react";
import { Outlet} from "react-router-dom";
import { Footer, Header } from "../../components";

function AdminPrivateLayout() {
  return (
      <div>
            <Header/>
            <Outlet />
            <Footer />
      </div>
  );
}

export default AdminPrivateLayout;
