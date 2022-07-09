import React from "react";
import { Button } from "react-bootstrap";
import rock from "../../styles/assets/1.png";
import { Check2Circle, GeoAlt, Trash, Trash2Fill } from "react-bootstrap-icons";
import firebase from "firebase";

function IncomingRequest({ name, tel, location, Desti, time, seats, price }) {
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
        <p className="m-0">Name:</p>
        <p style={{ color: "#989898", fontSize: "13px" }}>{name} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Tel:</p>
        <p style={{ fontSize: "13px", color: "#989898" }}>{tel} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Destination:</p>
        <p style={{ fontSize: "13px", color: "#989898" }}>{Desti} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Location:</p>
        <p style={{ fontSize: "13px", color: "#989898" }}>{location} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Seats:</p>
        <p style={{ fontSize: "13px", color: "#989898" }}>{seats} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Price:</p>
        <p style={{ fontSize: "13px", color: "#989898" }}>{price} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Time:</p>
        <p style={{ fontSize: "13px", color: "#989898" }}>{time} </p>
      </div>
      <div className="footer-request mt-2 d-flex ">
        <div style={{ paddingLeft: "1em" }}>
          <Button
            variant="success"
            className=""
            // onClick={() => acceptClick()}
          >
            Accept <Check2Circle style={{ fontSize: "14px" }} />{" "}
          </Button>
        </div>

        <div style={{ paddingLeft: "1em" }}>
          <Button
            variant="danger"
            className=""
            // onClick={() => declineClick()}
          >
            Decline <Trash style={{ fontSize: "14px" }} />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default IncomingRequest;
