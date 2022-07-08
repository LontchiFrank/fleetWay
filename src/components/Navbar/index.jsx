import React from "react";
// import { Header } from "./Navbar.style";
import { CDBNavbar, CDBInput } from "cdbreact";
import "./navbar.css";

const Navbar = () => {
  return (
    // <Header style={{background:"#333", color:"#fff"}}>
    <div className="mx-4">
      <CDBNavbar dark expand="md" scrolling className="justify-content-between">
        <CDBInput
          type="search"
          size="md"
          hint="Search"
          className="mb-n4 mt-n3 input-nav"
          placeholder="Search User"
        />
        <div className="ml-auto">
          <i className="fas fa-bell"></i>
          <i className="fas fa-comment-alt mx-4"></i>
          <img
            alt="panelImage"
            src="data:image/jpeg;base64,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"
            style={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
          />
        </div>
      </CDBNavbar>
    </div>
    // {/* </Header> */}
  );
};

export default Navbar;
