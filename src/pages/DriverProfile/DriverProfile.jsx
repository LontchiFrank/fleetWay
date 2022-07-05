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
import app from "../../Firebase";
import log1 from "../../styles/assets/brand.jpg";

function DriverProfile() {
  var driver = firebase.auth().currentUser;
  const ref = firebase.firestore();
  const [currentUser, setCurrentUser] = useState();
  const [selectedImage, setSelectedImage] = useState();

  var docRef = ref.collection("Drivers").doc(driver.email);
  useEffect(() => {
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

  async function uploadFile(ev) {
    const file = ev.target.files[0];
    setSelectedImage(file);
    const storageRef = app.storage().ref("images/");
    try {
      console.log("loading");
      await storageRef.child(file.name).put(file);
      console.log("uploaded");
      const url = await storageRef.child(file.name).getDownloadURL();
      console.log(url);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <UserLayout>
      <div className="container" style={{ width: "100%", height: "90vh" }}>
        <div className={`${styles.contained}`}>
          <div className={`${styles.profile_image}`}>
            <div className={`${styles.user_photo}`}>
              <label for="img" className={`${styles.takephoto} `}>
                <img
                  for="img"
                  src={
                    selectedImage ? URL.createObjectURL(selectedImage) : log1
                  }
                  className="img-fluid "
                  style={{ width: "100%", height: "100%" }}
                />
                <input
                  type="file"
                  id="img"
                  name="image"
                  accept="image/*"
                  className="d-none"
                  //
                  onChange={(ev) => uploadFile(ev)}
                />
              </label>
            </div>
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
                <p style={{ color: "#242424" }}>
                  {" "}
                  {currentUser && currentUser.email}{" "}
                </p>
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
                <p style={{ color: "#242424" }}>
                  {" "}
                  {currentUser && currentUser.tel}{" "}
                </p>
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
                <p style={{ color: "#242424" }}>
                  {" "}
                  {currentUser && currentUser.location}{" "}
                </p>
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
                <p style={{ color: "#242424" }}>
                  {" "}
                  {currentUser && currentUser.gender}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default DriverProfile;
