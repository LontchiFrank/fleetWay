import React from "react";
import UserLayout from "../../components/Layout/UserLayout";
import GeoMap from "../GeoMap/GeoMap";
import mtn from "../../styles/assets/MTN.jpeg";
import orange from "../../styles/assets/momo.jpeg";

import { Button, Card, Form, Row, Col, Modal } from "react-bootstrap";

function TrackPay() {
  return (
    <UserLayout>
      <div className="container">
        <GeoMap />
        <h3 className="pt-4">Detail Information</h3>
        <div className="">
          <Form>
            <Row>
              <Col md="6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Destination:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Destination" />
                </Form.Group>
              </Col>

              <Col md="6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Location:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Location" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Price:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Price" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>

              <Col md="6">
                <Form.Group className="mb-3">
                  <Form.Label>Number of Seat</Form.Label>
                  <Form.Select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <h4>ChoosePayment Method:</h4>

          <div
            className="pb-5 d-flex"
            style={{ width: "100%", height: "60%", gap: "16px" }}
          >
            <div className="mtn" style={{}}>
              <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  width: "100%",
                  height: "200px",
                }}
              >
                <div style={{ width: "100%", height: "80%" }}>
                  <img
                    src={mtn}
                    alt=""
                    style={{ width: "100%", height: "90%" }}
                  />
                </div>
                <div tyle={{ width: "100%", height: "20%" }}>Choose MTN</div>
              </div>
            </div>
            <div className="orange" style={{}}>
              <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  width: "100%",
                  height: "200px",
                }}
              >
                <img
                  src={orange}
                  alt=""
                  style={{ width: "100%", height: "80%" }}
                />
                <div tyle={{ width: "100%", height: "20%" }}>Choose MTN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default TrackPay;
