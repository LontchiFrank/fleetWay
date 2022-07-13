import React, { useState, useEffect } from "react";
import UserLayout from "../../components/Layout/UserLayout";
import styles from "./UserDash.module.css";
import { useDispatch, useSelector } from "react-redux";
import brand from "../../styles/assets/brand.jpg";
import { Button, Card, Form, Row, Col, Modal } from "react-bootstrap";
import {
  Eye,
  GeoAlt,
  GeoAltFill,
  Phone,
  ThreeDotsVertical,
  Wifi,
  WifiOff,
} from "react-bootstrap-icons";
import firebase from "firebase";
import { getDrivers } from "../../redux/actions/driverAction";
import GeoMap from "../GeoMap/GeoMap";
import { Link, useNavigate } from "react-router-dom";
import { myAlert } from "../../components/myAlert";
import { CDBSpinner, CDBContainer } from "cdbreact";
import UserNavbar from "../../components/Layout/UserNavbar";
import Notify from "../../components/Notify";

function MyVerticallyCenteredModal({ show, setModalShow, lati, long }) {
  const [back, setBack] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [geo, setGeo] = useState();
  const [order, setOrder] = useState({
    destination: "",
    locate: "",
    price: "",
    date: "",
    time: "",
  });
  const [order2, setOrder2] = useState({
    destinations: "",
    locates: "",
    prices: "",
    seats: "",
    times: "",
  });
  const ref = firebase.firestore();
  const toggle = () => {
    setBack(!back);
  };
  const navigate = useNavigate();
  const { destination, locate, price, date, time } = order;
  const { destinations, locates, prices, seats, times } = order2;

  var user = firebase.auth().currentUser;
  // console.log(user.uid);

  var docRef = ref.collection("Users").doc("A2zYqv504kxTf6kxG55W");
  var docRef1 = ref
    .collection("Drivers")
    .doc("Driver 1")
    .collection("Order2")
    .doc("Order2");

  useEffect(() => {
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

    docRef1
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setGeo(doc.data());
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
  console.log(geo);

  console.log(currentUser);
  const newDataObj = { currentUser, destination, locate, price, date, time };
  const newDataObj1 = {
    currentUser,
    destinations,
    locates,
    seats,
    prices,
    times,
  };

  const onchange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  const onchange2 = (e) => {
    setOrder2({ ...order2, [e.target.name]: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    ref
      .collection("Drivers")
      .doc("Driver 1")
      .collection("Order1")
      .doc("Order1")
      .set(newDataObj)
      .then(() => {
        myAlert(true);
        navigate("/trackingpay");
      });
  };

  const onsubmit2 = (e) => {
    e.preventDefault();
    ref
      .collection("Drivers")
      .doc("Driver 1")
      .collection("Order2")
      .doc("Order2")
      .set(newDataObj1)
      .then(() => {
        myAlert(true);
        navigate("/lyft-track");
      });
  };

  // const actualSets = 4 - geo && geo.seats;
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
                <h5 className="pt-2">Book Car</h5>
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
                <h5 className="pt-2"> Take A lyft</h5>
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
                        name="destination"
                        value={destination}
                        onChange={(e) => onchange(e)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Location:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Location"
                        name="locate"
                        value={locate}
                        onChange={(e) => onchange(e)}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Price:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Price"
                        name="price"
                        value={price}
                        onChange={(e) => onchange(e)}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                  </Col>

                  <Col md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Date:</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter Date of Departure"
                        name="date"
                        value={date}
                        onChange={(e) => onchange(e)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Time:</Form.Label>
                      <Form.Control
                        type="time"
                        placeholder="Enter Time of Departure "
                        name="time"
                        value={time}
                        onChange={(e) => onchange(e)}
                      />
                    </Form.Group>
                  </Col>
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
                        name="destinations"
                        value={destinations}
                        onChange={(e) => onchange2(e)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Location:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Location"
                        name="locates"
                        value={locates}
                        onChange={(e) => onchange2(e)}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Price:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Price"
                        name="prices"
                        value={prices}
                        onChange={(e) => onchange2(e)}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                  </Col>

                  <Col md="6">
                    <Form.Group className="mb-3">
                      <Form.Label>Number of Seat</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Seats"
                        name="seats"
                        value={seats}
                        onChange={(e) => onchange2(e)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Time:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Time of Departure "
                        name="times"
                        value={times}
                        onChange={(e) => onchange2(e)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
          )}
        </div>
        <p className="d-flex m-0">
          Destinations:{" "}
          <p className="fs-5 p-0 mx-2">
            {geo && geo.destinations} <GeoAlt />
          </p>{" "}
        </p>
        <p className="d-flex m-0">
          Available Seats:<p className="fs-5 p-0 mx-2"> {4 - geo?.seats}</p>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info">
          <Link
            to="/viewcar"
            style={{ textDecoration: "none", color: "white" }}
          >
            View <Eye />{" "}
          </Link>
        </Button>
        {back ? (
          <Button variant="warning" onClick={(e) => onsubmit(e)}>
            Hire Taxi
          </Button>
        ) : (
          <Button variant="warning" onClick={(e) => onsubmit2(e)}>
            Hire Taxi
          </Button>
        )}
        <Button variant="danger" onClick={() => setModalShow(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function UserDashboard() {
  const [modalShow, setModalShow] = useState(false);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [back, setBack] = useState(true);
  const [geo, setGeo] = useState();
  const [actual, setActual] = useState(4);
  const [data, setData] = useState([]);
  const toggle = () => {
    setBack(!back);
  };
  const dispatch = useDispatch();

  const driver = useSelector(({ driver }) => driver?.driver);
  // console.log(driver);
  const ref = firebase.firestore().collection("Drivers");
  const ref1 = firebase.firestore();
  var docRef1 = ref1
    .collection("Drivers")
    .doc("Driver 1")
    .collection("Order2")
    .doc("Order2");
  useEffect(() => {
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setData(items);
    });

    dispatch(getDrivers(data));

    docRef1
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          <Notify set={true} />;
          setGeo(doc.data());
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
  console.log(geo);
  // console.log(geo.seats);
  // const actualSeats = 4 - geo.seats;

  return (
    <UserNavbar>
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
                        <Link
                          to="/signup-driver"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Sign Up As Driver
                        </Link>
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
                              type="text"
                              placeholder="Enter Driver's Name"
                            />
                          </Form.Group>
                        </Col>

                        <Col md="3">
                          <Form.Select>
                            <option>Choose...</option>
                            <option>High</option>
                            <option>Low</option>
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
                  {data != 0 ? (
                    data
                      .filter((user) => user.distance == "near")
                      .map((filteredUser, key) => (
                        <Card
                          key={key}
                          border="light"
                          style={{
                            marginLeft: "1em",
                            marginTop: "2em",
                            width: "18rem",
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                          }}
                          className="col-md-12 col-sm-12"
                        >
                          <Card.Header className="d-flex">
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
                              <p className="text-center fw-normal">
                                {filteredUser.Name}{" "}
                              </p>
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
                            <div
                              className="d-flex justify-content-between"
                              style={{ width: "100%" }}
                            >
                              <p>
                                Available seats:
                                <p className="m-0 fw-bold fs-4">
                                  {/* {4 - geo?.seats} */}
                                  {actual - geo?.seats !== NaN
                                    ? actual - geo?.seats
                                    : actual}
                                </p>{" "}
                              </p>
                              <span class="alert alert-warning" role="alert">
                                {filteredUser.cat}
                              </span>
                            </div>
                          </Card.Body>
                          <div className="px-4 pb-4 d-flex flex-column justify-content-center align-items-center">
                            <Button
                              variant="warning"
                              className="col-md-12"
                              style={{ color: "white" }}
                              onClick={() => {
                                setModalShow(true);
                                setLongitude(filteredUser.lng);
                                setLatitude(filteredUser.lat);
                              }}
                            >
                              {" "}
                              Hire
                            </Button>
                          </div>
                        </Card>
                      ))
                  ) : (
                    <div
                      style={{
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CDBContainer>
                        <CDBSpinner multicolor />
                      </CDBContainer>
                    </div>
                  )}
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
                <div className="d-flex flex-wrap">
                  {data
                    .filter((user) => user.distance == "far")
                    .map((filteredUser, key) => (
                      <Card
                        key={key}
                        border="light"
                        style={{
                          marginLeft: "1em",
                          marginTop: "2em",
                          width: "18rem",
                          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                        }}
                        className="col-md-12 col-sm-12"
                      >
                        <Card.Header className="d-flex">
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
                            <p className="text-center fw-normal">
                              {filteredUser.Name}{" "}
                            </p>
                          </Card.Title>
                          <Card.Text className="d-flex flex-column justify-content-center align-items-center">
                            {/* <Wifi
                              style={{
                                fontSize: "19px",
                                textAlign: "center",
                                color: "green",
                              }}
                            /> */}
                            <WifiOff
                              style={{
                                fontSize: "19px",
                                textAlign: "center",
                                color: "grey",
                              }}
                            />
                            <p>Offline</p>
                          </Card.Text>
                        </Card.Body>
                        <div className="px-4 pb-4 d-flex flex-column justify-content-center align-items-center">
                          <Button
                            variant="warning"
                            className="col-md-12"
                            style={{ color: "white" }}
                            onClick={() => {
                              setModalShow(true);
                              setLongitude(filteredUser.lng);
                              setLatitude(filteredUser.lat);
                            }}
                          >
                            {" "}
                            Hire
                          </Button>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            )}
            {/* ends here*/}
          </div>
        </div>
      </div>
      {/* <div className={`${styles.box3}`}></div> */}
    </UserNavbar>
  );
}

export default UserDashboard;
