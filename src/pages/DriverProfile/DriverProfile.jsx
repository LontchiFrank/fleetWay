import React, { useState, useEffect } from "react";
import UserLayout from "../../components/Layout/UserLayout";
import styles from "./DriverProfile.module.css";
import firebase from "firebase";
import {
  EnvelopeCheck,
  GenderMale,
  Geo,
  GeoAltFill,
  Phone,
  TelephoneFill,
} from "react-bootstrap-icons";

function DriverProfile() {
  var driver = firebase.auth().currentUser;
  const ref = firebase.firestore();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    var docRef = ref.collection("Drivers").doc(driver.email);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setCurrentUser(doc.data());
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
  console.log(currentUser);
  return (
    <UserLayout>
      <div className="container" style={{ width: "100%", height: "90vh" }}>
        <div className={`${styles.contained}`}>
          <div className={`${styles.profile_image}`}>
            <div className={`${styles.user_photo}`}></div>
            <h3 style={{ color: "white" }}>
              {" "}
              {currentUser && currentUser.name}{" "}
            </h3>
          </div>
          <h2>User Information</h2>
          <div className={`${styles.user_info} p-4`}>
            <div className="Email" style={{ width: "25%", height: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <EnvelopeCheck
                  className="mb-3"
                  style={{ fontSize: "28px", color: "black" }}
                />
                <p> Email:</p>
                <p style={{ color: "#242424" }}> {currentUser.email} </p>
              </div>
            </div>
            <div className="tel" style={{ width: "25%", height: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <TelephoneFill
                  className="mb-3"
                  style={{ fontSize: "28px", color: "black" }}
                />
                <p> Phone Number:</p>
                <p style={{ color: "#242424" }}> {currentUser.tel} </p>
              </div>
            </div>
            <div className="location" style={{ width: "25%", height: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <GeoAltFill
                  className="mb-3"
                  style={{ fontSize: "28px", color: "black" }}
                />
                <p> Location:</p>
                <p style={{ color: "#242424" }}> {currentUser.location} </p>
              </div>
            </div>
            <div className="gender" style={{ width: "25%", height: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <GenderMale
                  className="mb-3"
                  style={{ fontSize: "28px", color: "black" }}
                />
                <p> Gender:</p>
                <p style={{ color: "#242424" }}> {currentUser.gender} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default DriverProfile;
