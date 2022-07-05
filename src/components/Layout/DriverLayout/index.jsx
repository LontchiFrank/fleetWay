import React from "react";
import DriverDashboad from "../../../pages/DriverDashboard/DriverDashboad";

function DriverLayout({ children }) {
  return (
    <div>
      <div className="sidenav w-auto bg-warning">
        <DriverDashboad />
      </div>
      <div className="mainPage  ">
        <div className="page ">{children}</div>
      </div>
    </div>
  );
}

export default DriverLayout;
