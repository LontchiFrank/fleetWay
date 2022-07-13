import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import rock from "../../styles/assets/1.png";
import { Pen, Trash } from "react-bootstrap-icons";
import firebase from "firebase";

function IncomingRequest({ user }) {
  const [driver, setDriver] = useState();
  const ref = firebase.firestore();

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
          setDriver(doc.data());
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

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
        <img src={rock} alt="" style={{ height: "100%" }} />
      </div>
      <div className="name d-flex flex-column  " style={{ paddingLeft: "3em" }}>
        <p className="m-0" style={{ color: "#989898", fontSize: "16px" }}>
          Name:
        </p>
        <p style={{ color: "#000", fontSize: "16px" }}>{user && user.Name} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0" style={{ color: "#989898", fontSize: "16px" }}>
          Tel:
        </p>
        <p style={{ fontSize: "16px", color: "#000000" }}>
          {user && user.tel}{" "}
        </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0" style={{ color: "#989898", fontSize: "16px" }}>
          Seats:
        </p>
        <p style={{ fontSize: "16px", color: "#000000" }}>{driver?.seats} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0" style={{ color: "#989898", fontSize: "16px" }}>
          Price:
        </p>
        <p style={{ fontSize: "16px", color: "#000000" }}>{driver?.prices} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0" style={{ color: "#989898", fontSize: "16px" }}>
          Date:
        </p>
        <p style={{ fontSize: "16px", color: "#000000" }}>12/07/2022 </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0" style={{ color: "#989898", fontSize: "16px" }}>
          Time:
        </p>
        <p style={{ fontSize: "16px", color: "#000000" }}>10mins </p>
      </div>
      <div className="d-flex flex-column " style={{ paddingLeft: "3em" }}>
        <p className="m-0" style={{ color: "#989898", fontSize: "16px" }}>
          Status:
        </p>
        {driver && driver.accept == true ? (
          <p style={{ fontSize: "16px", color: "green" }}>Approved</p>
        ) : null}
        {driver && driver.accept == false ? (
          <p style={{ fontSize: "16px", color: "orange" }}>Pending</p>
        ) : null}
        {driver && driver.decline == true ? (
          <p style={{ fontSize: "16px", color: "red" }}>Declined</p>
        ) : null}
      </div>
      <div className="footer-request mt-2 d-flex ">
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

export default IncomingRequest;
