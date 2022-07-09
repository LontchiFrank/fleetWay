import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import firebase from "firebase";
import { useLottie } from "lottie-react";
import GeoMap from "../../pages/GeoMap/GeoMap";
import groovyWalkAnimation from "../../animations/109616-girl-happy-to-get-fund.json";
import LyftRequestCard from "../LyftRequest";
import IncomingRequest from "../ComingRequest";

function DriverHistory() {
  const ref = firebase.firestore();
  const [user, setUser] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [man, setMan] = useState();

  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  var docRef = ref
    .collection("Drivers")
    .doc("Driver 1")
    .collection("Order2")
    .doc("Order2");

  useEffect(() => {
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setUser([doc.data()]);
          setMan(doc.data());
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
  console.log(man);
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
            <div className="p-4  ">
              <div className="header-request">
                <h2>User Lyft Request</h2>
              </div>
              <div
                className="body-request  d-flex pt-4"
                style={{ width: "100%", height: "80vh", paddingBottom: "2em" }}
              >
                <div
                  className="firstpart mx-3"
                  style={{ width: "65%", height: "100%" }}
                >
                  {user.map((el, key) => (
                    <LyftRequestCard
                      key={key}
                      User={el}
                      toggle={toggle}
                      setToggle={setToggle}
                    />
                  ))}
                  {toggle ? (
                    <div
                      style={{
                        width: "100%",
                        heigth: "30vh",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ width: "90%", heigth: "100%" }}>
                        {" "}
                        <GeoMap />
                      </div>
                    </div>
                  ) : null}
                </div>
                <div
                  className="secondpart p-3"
                  style={{
                    width: "35%",
                    height: "100%",
                    borderLeft: "1px solid #ccc",
                  }}
                >
                  <h4> Available Request</h4>
                  {/* <IncomingRequest
                    name="Njume Yannick"
                    tel="655998097"
                    location="Malingo"
                    Desti="Bonduma"
                    time="05mins"
                    seats="2"
                    price="150"
                  /> */}

                  <div style={{ width: "100%", height: "40%" }}>{View}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverHistory;
