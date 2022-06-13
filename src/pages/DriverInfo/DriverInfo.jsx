import React from "react";
import Layout from "../../components/Layout/Layout";
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
            <div className={`${styles.progres}`}></div>
            <div className={`${styles.form_part}`}></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DriverInfo;
