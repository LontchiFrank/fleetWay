import React, { useEffect, useState } from "react";
import { Row, Form } from "react-bootstrap";
import firebase from "firebase";

function FirstStep() {
  var driver = firebase.auth().currentUser;
  const ref = firebase.firestore();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
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
    <div className="p-4">
      <div class="text">
        <h2>Your Personal Information</h2>
        <p>Enter your personal information to get closer to copanies.</p>
      </div>

      <Form>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={currentUser && currentUser.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Last name" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={driver.email}
              disabled
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Phone Number"
              value={currentUser && currentUser.tel}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Location:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Location"
              value={currentUser && currentUser.location}
              cation
            />
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default FirstStep;
