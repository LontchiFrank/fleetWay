import React from "react";
import { Row, Form } from "react-bootstrap";

function FourthStep() {
  return (
    <div className="p-4">
      <div class="text">
        <h2> User Photo</h2>
        <p>Enter your User information to get closer to copanies.</p>
      </div>
      <Form>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Passport photo:</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter First Name"
              accept="/image"
            />
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default FourthStep;
