import React from "react";
import { Row, Form } from "react-bootstrap";

function ThirdStep() {
  return (
    <div className="p-4">
      <div class="text">
        <h2>Carr's Information</h2>
        <p>Enter your Car's information to get closer to copanies.</p>
      </div>
      <Form>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Car's Brand:</Form.Label>
            <Form.Control type="text" placeholder="Enter Car's Brand" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image Car's plate Number:</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter Image"
              accept="/image"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Picture of the Car:</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter Last name"
              accept="/image"
            />
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default ThirdStep;
