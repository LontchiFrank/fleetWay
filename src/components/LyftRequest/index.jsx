import React from "react";
import { Button } from "react-bootstrap";
import rock from "../../styles/assets/1.png";
import { Check2Circle, GeoAlt, Trash, Trash2Fill } from "react-bootstrap-icons";
import firebase from "firebase";
import { myAlert } from "../myAlert";

function LyftRequestCard({ User, toggle, setToggle }) {
  const ref = firebase.firestore();

  var docRef = ref
    .collection("Drivers")
    .doc("Driver 1")
    .collection("Order2")
    .doc("Order2");

  const acceptClick = () => {
    docRef
      .update({
        accept: true,
      })
      .then(() => {
        myAlert(true);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  const declineClick = () => {
    docRef
      .update({
        decline: true,
        accept: false,
      })
      .then(() => {
        console.log("Decline Successfully");
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

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
      <div
        className="name d-flex flex-column  "
        style={{ paddingLeft: "1.5em" }}
      >
        <p className="m-0" style={{ color: "#989898" }}>
          Name:
        </p>
        <p style={{ color: "#000000", fontSize: "13px" }}>
          {User.currentUser.name}{" "}
        </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "1.5em" }}
      >
        <p className="m-0" style={{ color: "#989898" }}>
          Tel:
        </p>
        <p style={{ fontSize: "13px", color: "#000000" }}>
          {User.currentUser.tel}{" "}
        </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "1.5em" }}
      >
        <p className="m-0" style={{ color: "#989898" }}>
          Destination:
        </p>
        <p style={{ fontSize: "13px", color: "#000000" }}>
          {User.destinations}{" "}
        </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "1.5em" }}
      >
        <p className="m-0" style={{ color: "#989898" }}>
          Location:
        </p>
        <p style={{ fontSize: "13px", color: "#000000" }}>{User.locates} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "1.5em" }}
      >
        <p className="m-0" style={{ color: "#989898" }}>
          Price:
        </p>
        <p style={{ fontSize: "13px", color: "#000000" }}>{User.prices} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "1.5em" }}
      >
        <p className="m-0" style={{ color: "#989898" }}>
          Seats:
        </p>
        <p style={{ fontSize: "20px", color: "black", fontWeight: "bold" }}>
          {User.seats}{" "}
        </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "1.5em" }}
      >
        <p className="m-0" style={{ color: "#989898" }}>
          Time:
        </p>
        <p style={{ fontSize: "13px", color: "#000000" }}>{User.times} </p>
      </div>
      <div className="footer-request mt-2 d-flex ">
        <div style={{ paddingLeft: "1em" }}>
          <Button
            variant="info"
            className="px-3"
            onClick={() => setToggle(!toggle)}
          >
            View <GeoAlt style={{ fontSize: "14px" }} />
          </Button>
        </div>

        {User.accept == true ? null : (
          <div style={{ paddingLeft: "1em" }}>
            <Button
              variant="success"
              className="px-3"
              onClick={() => acceptClick()}
            >
              Accept <Check2Circle style={{ fontSize: "14px" }} />{" "}
            </Button>
          </div>
        )}
        {User.accept == true && User.decline == true ? (
          <p style={{ fontSize: "14px", color: "red" }}>Cancelled</p>
        ) : (
          <div style={{ paddingLeft: "1em" }}>
            <Button
              variant="danger"
              className="px-3"
              onClick={() => declineClick()}
            >
              Remove <Trash style={{ fontSize: "14px" }} />{" "}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LyftRequestCard;
