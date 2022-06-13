import React from "react";
import { Row, Form } from "react-bootstrap";

function FirstStep() {
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
            <Form.Control type="text" placeholder="Enter First Name" />
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
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control type="number" placeholder="Enter Phone Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Location:</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default FirstStep;
