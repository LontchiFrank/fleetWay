import React from "react";
import Sidebar from "../Sidebar";

function DriverHome() {
  return (
    <div className="dashboard d-flex">
      <div className="sidenav">
        <Sidebar />
      </div>
      <div
        className="mainPage  "
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div className="p-4">
              <div className="header-request">
                <h2>User Request</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverHome;
