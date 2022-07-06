import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, Router } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className={`app`}
      style={{ display: "flex", height: "100%", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Contrast
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/driverpanel" active="activeClicked">
              <CDBSidebarMenuItem icon="columns">dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/drive-home" active="activeClicked">
              <CDBSidebarMenuItem icon="table">tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/drive-history" active="activeClicked">
              <CDBSidebarMenuItem icon="user">profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/hero404" target="_blank" active="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
          <CDBSidebarMenu></CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
