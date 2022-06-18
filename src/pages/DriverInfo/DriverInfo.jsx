import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ArrowLeft, ArrowRight, Check } from "react-bootstrap-icons";
import FirstStep from "../../components/FirstStep/FirstStep";
import Layout from "../../components/Layout/Layout";
import UserLayout from "../../components/Layout/UserLayout";
import ParentSteps from "../../components/ParentSteps/ParentSteps";
import styles from "./DriverInfo.module.css";

function DriverInfo() {
  const [change, setChange] = useState(1);

  const incement = () => {
    setChange(change + 1);
  };
  const decement = () => {
    setChange(change - 1);
  };
  return (
    <UserLayout>
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
                  Step {change}
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
                  Driver's Information
                </li>
                <li style={{ paddingLeft: "18px", fontSize: "18px" }}>
                  Car's Information
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
              <ParentSteps change={change} />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
                className=" p-4 "
              >
                {change > 1 ? (
                  <Button
                    variant="secondary"
                    style={{ color: "white" }}
                    onClick={() => decement()}
                  >
                    <ArrowLeft style={{ fontSize: "15px" }} /> Previous Step
                  </Button>
                ) : null}
                {change >= 1 && change < 4 ? (
                  <Button
                    variant="warning"
                    style={{ color: "white" }}
                    onClick={() => incement()}
                  >
                    Next Step <ArrowRight style={{ fontSize: "15px" }} />
                  </Button>
                ) : (
                  <Button variant="success" style={{ color: "white" }}>
                    Submit
                    <Check style={{ fontSize: "15px" }} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default DriverInfo;
