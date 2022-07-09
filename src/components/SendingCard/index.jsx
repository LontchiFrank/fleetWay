import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  Check2Circle,
  GeoAlt,
  Pen,
  Trash,
  Trash2Fill,
} from "react-bootstrap-icons";
import rock from "../../styles/assets/brand.jpg";
import firebase from "firebase";
import { myAlert } from "../myAlert";

function SendingCard({ user }) {
  const [driver, setDriver] = useState();

  const ref = firebase.firestore();

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
          setDriver(doc.data());
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
  console.log(driver);
  return (
    <div
      className="card-request d-flex py-3  "
      style={{
        width: "100%",
        height: "10vh",
        borderLeft: "4px solid #311070",
        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <div className=" px-3 rounded d-flex justify-content-start">
        <img
          src={rock}
          alt=""
          style={{ height: "100%", width: "60px", borderRadius: "100%" }}
        />
      </div>
      <div className="name d-flex flex-column  " style={{ paddingLeft: "3em" }}>
        <p className="m-0">Name:</p>
        <p style={{ color: "#989898" }}>{user && user.Name} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Tel:</p>
        <p style={{ fontSize: "16px", color: "#989898" }}>
          {user && user.tel}{" "}
        </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Order:</p>
        <p style={{ fontSize: "16px", color: "#989898" }}>
          {user && user.order}{" "}
        </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Date:</p>
        <p style={{ fontSize: "16px", color: "#989898" }}>12/07/2022 </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Time:</p>
        <p style={{ fontSize: "16px", color: "#989898" }}>10:00am</p>
      </div>
      <div className="d-flex flex-column " style={{ paddingLeft: "3em" }}>
        <p className="m-0">Status:</p>
        {driver.accept == true ? (
          <p style={{ fontSize: "16px", color: "green" }}>Approved</p>
        ) : null}
        {driver.decline == true ? (
          <p style={{ fontSize: "16px", color: "red" }}>Declined</p>
        ) : null}
      </div>
      <div
        className="footer-request mt-2 d-flex "
        style={{ paddingLeft: "10em" }}
      >
        <div style={{ paddingLeft: "2em" }}>
          <Button
            variant="info"
            className="px-4"
            // onClick={() => acceptClick()}
          >
            Edit <Pen style={{ fontSize: "22px" }} />{" "}
          </Button>
        </div>
        <div style={{ paddingLeft: "2em" }}>
          <Button
            variant="danger"
            className="px-4"
            // onClick={() => declineClick()}
          >
            Decline <Trash style={{ fontSize: "22px" }} />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SendingCard;
