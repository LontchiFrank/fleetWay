import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";
import { NavLink } from "react-router-dom";

function DriverDashboad() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          fleetWay
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink to="/drive-home">
              <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/driver-history">
              <CDBSidebarMenuItem icon="sticky-note">
                Components
              </CDBSidebarMenuItem>
            </NavLink>

            <CDBSidebarMenuItem icon="chart-line" iconType="solid">
              Metrics
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}
export default DriverDashboad;
