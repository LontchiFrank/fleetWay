import React from "react";
import { Row, Form } from "react-bootstrap";

function SecondStep() {
  return (
    <div className="p-4">
      <div class="text">
        <h2>Your Driver's Permit</h2>
        <p>Enter your Driver's information to get closer to copanies.</p>
      </div>
      <Form>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Driver's License:</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter First Name"
              accept="/pdf"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Driver's Union Permit:</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter Last name"
              accept="/pdf"
            />
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default SecondStep;
