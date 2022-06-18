import React, { useState, useEffect } from "react";
import UserLayout from "../../components/Layout/UserLayout";
import styles from "./UserDash.module.css";
import { useDispatch, useSelector } from "react-redux";
import brand from "../../styles/assets/brand.jpg";
import { Button, Card, Form, Row, Col, Modal } from "react-bootstrap";
import {
  GeoAltFill,
  Phone,
  ThreeDotsVertical,
  Wifi,
} from "react-bootstrap-icons";
import firebase from "firebase";
import { getDrivers } from "../../redux/actions/driverAction";
import GeoMap from "../GeoMap/GeoMap";

function MyVerticallyCenteredModal({ show, setModalShow, lati, long }) {
  const [back, setBack] = useState(true);
  const toggle = () => {
    setBack(!back);
  };
  // useEffect(() => {
  //   ref.get().then((item) => {
  //     const items = item.docs.map((doc) => doc.data());
  //     setData(items);
  //   });

  //   dispatch(getDrivers(data));
  //   console.log(data);
  // }, []);

  return (
    <Modal
      show={show}
      // {...props}
      // show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Hire this Car
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Map</h4>
        <GeoMap latitudes={lati} longitudes={long} />
        <div
          style={{
            width: "100%",
            // height: "10%",
            borderBottom: "1px solid #ccc",
          }}
        >
          <div style={{ width: "100%", height: "25%", display: "flex" }}>
            <div
              style={{
                width: "50%",
                height: "100%",
                color: "#000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                // background: back ? "white" : "#d5d5ff",
                borderBottom: back ? "4px solid #F6B100" : "none",
              }}
              onClick={() => toggle()}
            >
              <div className="d-flex  pt-2 ">
                <h5 className="pt-2">Take A lyft</h5>
                <GeoAltFill style={{ fontSize: "22px", marginTop: "10px" }} />
              </div>
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                color: "#000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                // background: !back ? "white" : "#d5d5ff",
                borderBottom: !back ? "4px solid #F6B100" : "none",
              }}
              onClick={() => toggle()}
            >
              <div className="d-flex  pt-2 ">
                <h5 className="pt-2">Book Car</h5>
                <Phone style={{ fontSize: "22px", marginTop: "10px" }} />
              </div>
            </div>
          </div>
          {back ? (
            <div className="p-4">
              <Form>
                <Row>
                  <Col md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Destination:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Destination"
                      />
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

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Location:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Location" />
                  </Form.Group>
                </Row>
              </Form>
            </div>
          ) : (
            <div className="p-4">
              <Form>
                <Row>
                  <Col md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Destination:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Destination"
                      />
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
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Date:</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter Date of Departure"
                      />
                    </Form.Group>
                  </Col>

                  <Col md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Time:</Form.Label>
                      <Form.Control
                        type="time"
                        placeholder="Enter Time of Departure"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={() => setModalShow(false)}>
          Hire Taxi
        </Button>
        <Button onClick={() => setModalShow(false)}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}

function UserDashboard() {
  const [modalShow, setModalShow] = useState(false);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [back, setBack] = useState(true);
  const [data, setData] = useState([]);
  const toggle = () => {
    setBack(!back);
  };
  const dispatch = useDispatch();

  const driver = useSelector(({ driver }) => driver?.driver);
  // console.log(driver);
  const ref = firebase.firestore().collection("Drivers");

  useEffect(() => {
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setData(items);
    });

    dispatch(getDrivers(data));
    console.log(data);
  }, []);

  // useEffect(() => {
  //   console.log(longitude, "modalShow");
  // }, [longitude]);
  return (
    <UserLayout>
      <MyVerticallyCenteredModal
        show={modalShow}
        setModalShow={setModalShow}
        lati={latitude}
        long={longitude}
        // onHide={() => setModalShow(false)}
      />
      <div className={`${styles.box}`}>
        <div className={`${styles.hero}`}>
          <div className="container" style={{ width: "100%", height: "100%" }}>
            <div className={`${styles.hold_box} col-md-12  col-sm-12`}>
              <div className={`${styles.img_box}`}>
                <div className={`${styles.small_box}`}>
                  <div className="hall" style={{ padding: "2em" }}>
                    <h1>Be A Driver and please your customers</h1>
                    <p className="text-left" style={{ lineHeight: "1.8" }}>
                      Don’t compare your day 1 with someone’s 10 years”. I use
                      this quote all the time. Not just with tech. It applies to
                      all courses of life. I even use it when I’m coaching. Next
                      time you are comparing yourself remember things take time
                      and you got this!
                    </p>
                    <div
                      className="sign"
                      // style={{ width: "100%", height: "30%" }}
                    >
                      <Button
                        // variant="secondary"
                        className="py-4 px-4"
                        style={{
                          background: "#3d3d42",
                          outline: "none",
                          border: "none",
                        }}
                      >
                        Sign Up As Driver
                      </Button>
                    </div>
                  </div>
                </div>
                {/* <img src={} style={{ width: "100%", height: "90%" }} /> */}
              </div>

              <div className={`${styles.sel_box}`}> </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.hero1} col-md-12 col-sm-12`}>
        <div className="container" style={{ width: "100%", height: "100%" }}>
          <div className={`${styles.box2}`}>
            <div
              style={{
                width: "100%",
                // height: "10%",
                borderBottom: "1px solid #ccc",
              }}
            >
              <div style={{ width: "100%", height: "25%", display: "flex" }}>
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    color: "#000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    // background: back ? "white" : "#d5d5ff",
                    borderBottom: back ? "4px solid #F6B100" : "none",
                  }}
                  onClick={() => toggle()}
                >
                  <div className="d-flex  pt-2 ">
                    <h5 className="pt-2">Driver's Around You</h5>
                    <GeoAltFill
                      style={{ fontSize: "22px", marginTop: "10px" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    color: "#000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    // background: !back ? "white" : "#d5d5ff",
                    borderBottom: !back ? "4px solid #F6B100" : "none",
                  }}
                  onClick={() => toggle()}
                >
                  <div className="d-flex  pt-2 ">
                    <h5 className="pt-2">All Drivers</h5>
                    <Phone style={{ fontSize: "22px", marginTop: "10px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div></div>

            {back ? (
              <div>
                <h3 className="text-center pt-4">
                  Driver's located around your location
                </h3>
                <div className="d-flex  p-4 flex-wrap">
                  {/* <h3>Drivers all around you</h3> */}
                  <div
                    style={{ width: "100%", height: "40%", marginLeft: "2em" }}
                  >
                    <Form>
                      <Row>
                        <Col md="6">
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control
                              type="email"
                              placeholder="name@example.com"
                            />
                          </Form.Group>
                        </Col>

                        <Col md="3">
                          <Form.Select>
                            <option>Default select</option>
                          </Form.Select>
                        </Col>
                        <Button
                          variant="warning"
                          className="col-md-2"
                          style={{ color: "white" }}
                        >
                          {" "}
                          Hire
                        </Button>
                      </Row>
                    </Form>
                  </div>
                  {data.map((el, key) => (
                    <Card
                      key={key}
                      border="light"
                      style={{
                        marginLeft: "1em",
                        marginTop: "2em",
                        width: "18rem",
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                        // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                      className="col-md-12 col-sm-12"
                    >
                      <Card.Header className="d-flex">
                        {/* <p>{el.Name} </p> */}
                        <div
                          className="d-flex justify-content-center align-items-center"
                          style={{ width: "95%", height: "100%" }}
                        >
                          <div
                            className="icon-profile"
                            style={{
                              width: "70px",
                              height: "65px",
                              borderRadius: "50%",
                              background: "green",
                            }}
                          >
                            <img
                              src={brand}
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className=""
                          style={{ width: "5%", height: "100%" }}
                        >
                          <ThreeDotsVertical style={{ fontSize: "22px" }} />
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title className="fw-bold ">
                          {" "}
                          <p className="text-center fw-normal">{el.Name} </p>
                        </Card.Title>
                        <Card.Text className="d-flex flex-column justify-content-center align-items-center">
                          <Wifi
                            style={{
                              fontSize: "19px",
                              textAlign: "center",
                              color: "green",
                            }}
                          />
                          <p>Online</p>
                        </Card.Text>
                      </Card.Body>
                      <div className="px-4 pb-4 d-flex flex-column justify-content-center align-items-center">
                        <Button
                          variant="warning"
                          className="col-md-12"
                          style={{ color: "white" }}
                          onClick={() => {
                            setModalShow(true);
                            setLongitude(el.lng);
                            setLatitude(el.lat);
                          }}
                        >
                          {" "}
                          Hire
                        </Button>
                      </div>
                    </Card>
                  ))}
                  {/* <div className="d-flex justify-content-center   flex-wrap p-4 ">
          
           </div> */}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-center pt-4">
                  Driver's Available on FLeetway
                </h3>
                <div
                  style={{ width: "100%", height: "40%", marginLeft: "2em" }}
                >
                  <Form>
                    <Row>
                      <Col md="6">
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                          />
                        </Form.Group>
                      </Col>

                      <Col md="3">
                        <Form.Select>
                          <option>Default select</option>
                        </Form.Select>
                      </Col>
                      <Button
                        variant="warning"
                        className="col-md-2"
                        style={{ color: "white" }}
                      >
                        {" "}
                        Hire
                      </Button>
                    </Row>
                  </Form>
                </div>
              </div>
            )}
            {/* ends here*/}
          </div>
        </div>
      </div>
      {/* <div className={`${styles.box3}`}></div> */}
    </UserLayout>
  );
}

export default UserDashboard;
