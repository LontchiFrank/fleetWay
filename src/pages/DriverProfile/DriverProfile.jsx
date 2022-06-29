import React, { useState, useEffect } from "react";
import UserLayout from "../../components/Layout/UserLayout";
import styles from "./DriverProfile.module.css";
import firebase from "firebase";

function DriverProfile() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    var driver = firebase.auth().currentUser;
    const ref = firebase.firestore();
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
          </div>
          <div className={`${styles.user_info}`}></div>
        </div>
      </div>
    </UserLayout>
  );
}

export default DriverProfile;
