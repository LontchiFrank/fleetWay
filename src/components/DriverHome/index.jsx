import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import firebase from "firebase";
import RequestCard from "../RequestCard";
import GeoMap from "../../pages/GeoMap/GeoMap";

function DriverHome() {
  const ref = firebase.firestore();
  const [user, setUser] = useState([]);
  const [toggle, setToggle] = useState(false);
  const handleToggle = (toggles) => {
    setToggle(toggles);
  };
  console.log(toggle);
  var docRef = ref
    .collection("Drivers")
    .doc("Driver 1")
    .collection("Order1")
    .doc("Order1");

  useEffect(() => {
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setUser([doc.data()]);
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  // console.log(user);

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
        <Navbar />

        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div className="p-4 container">
              <div className="header-request">
                <h2>User Request</h2>
              </div>
              <div className="body-request">
                {user.map((el) => (
                  <RequestCard User={el} toggles={toggle} />
                ))}
                {toggle ? (
                  <div style={{ width: "90%", heigth: "30vh" }}>
                    {" "}
                    <GeoMap />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverHome;
