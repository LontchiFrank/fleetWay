import React, { useState, useEffect } from "react";
import { Button, Row, Col, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getToken } from "../../Firebase";

function Notify(props) {
  const [show, setShow] = useState();
  const [isTokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    let data;
    async function tokenFunc() {
      data = await getToken(setTokenFound);
      if (data) {
        console.log("Token is", data);
      }
      return data;
    }
    tokenFunc();
  }, [setTokenFound]);

  return (
    <div className="">
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        animation
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">Notification</strong>
          <small>12 mins ago</small>
        </Toast.Header>
        <Toast.Body>Request for a Lyft!</Toast.Body>
      </Toast>

      <Button onClick={() => setShow(true)}>Show Toast</Button>
    </div>
  );
}

export default Notify;
