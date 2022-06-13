import React from "react";
import { Button } from "react-bootstrap";
import FirstStep from "../../components/FirstStep/FirstStep";
import Layout from "../../components/Layout/Layout";
import ParentSteps from "../../components/ParentSteps/ParentSteps";
import styles from "./DriverInfo.module.css";

function DriverInfo() {
  return (
    <Layout>
      <div className="container">
        <h2> Driver's information</h2>
        <div
          style={{
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={`${styles.form_box}`}>
            <div className={`${styles.progres}`}>
              <div className="headers text-left">
                <h3
                  className="pt-4 "
                  style={{ color: "white", marginLeft: "1.6em" }}
                >
                  fleetWay
                </h3>
                <h2
                  className="pt-3"
                  style={{ color: "white", marginLeft: "1.4em" }}
                >
                  {" "}
                  Step 1
                </h2>
                <p
                  className=""
                  style={{ color: "white", paddingLeft: "2.7em" }}
                >
                  Enter your personal information to get closer to companies.
                </p>
              </div>
              <ul className={`${styles.progress_bar}`}>
                <li
                  class="active pt-3"
                  style={{ paddingLeft: "18px", fontSize: "18px" }}
                >
                  Personal Information
                </li>
                <li style={{ paddingLeft: "18px", fontSize: "18px" }}>
                  Education
                </li>
                <li style={{ paddingLeft: "18px", fontSize: "18px" }}>
                  Work Experience
                </li>
                <li style={{ paddingLeft: "18px", fontSize: "18px" }}>
                  User Photo
                </li>
              </ul>
            </div>
            <div className={`${styles.form_part}`}>
              {/* {change}
              <div className="d-flex justify-content-right">
                <Button variant="warning">Next</Button>
              </div> */}
              <ParentSteps />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DriverInfo;
