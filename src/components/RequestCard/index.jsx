import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Check2Circle, GeoAlt, Trash, Trash2Fill } from "react-bootstrap-icons";
import rock from "../../styles/assets/1.png";

function RequestCard({ User, toggles }) {
  const [toggle1, setToggle1] = useState(toggles);

  const handleToggle = (toggles) => {
    setToggle1(!toggles);
  };
  console.log(toggle1);
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
        <p style={{ color: "#989898" }}>{User.currentUser.name} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Tel:</p>
        <p style={{ fontSize: "16px", color: "#989898" }}>
          {User.currentUser.tel}{" "}
        </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Location:</p>
        <p style={{ fontSize: "16px", color: "#989898" }}>{User.locate} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Price:</p>
        <p style={{ fontSize: "16px", color: "#989898" }}>{User.price} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Date:</p>
        <p style={{ fontSize: "16px", color: "#989898" }}>{User.date} </p>
      </div>
      <div
        className="name d-flex flex-column justify-content-start "
        style={{ paddingLeft: "3em" }}
      >
        <p className="m-0">Time:</p>
        <p style={{ fontSize: "16px", color: "#989898" }}>{User.time} </p>
      </div>
      <div className="footer-request mt-2 d-flex ">
        <div style={{ paddingLeft: "2em" }}>
          <Button
            variant="info"
            className="px-4"
            onClick={() => handleToggle()}
          >
            View <GeoAlt style={{ fontSize: "22px" }} />
          </Button>
        </div>

        <div style={{ paddingLeft: "2em" }}>
          <Button variant="success" className="px-4">
            Accept <Check2Circle style={{ fontSize: "22px" }} />{" "}
          </Button>
        </div>
        <div style={{ paddingLeft: "2em" }}>
          <Button variant="danger" className="px-4">
            Decline <Trash style={{ fontSize: "22px" }} />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
