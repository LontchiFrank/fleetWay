import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Home.module.css";
import taxi from "../../styles/assets/taxi.png";
import taxi1 from "../../styles/assets/rect.png";
import phone from "../../styles/assets/phone.jpg";
import { Row, Form, Col, Button } from "react-bootstrap";
import { Box, Car, CreditCard, Map } from "react-bootstrap-icons";

// import styles from "./AdminLayout.module.css";

function Home() {
  const [back, setBack] = useState(true);
  const [back1, setBack1] = useState(false);
  const toggle = () => {
    setBack(!back);
  };
  const toggle1 = () => {
    setBack1(!back1);
  };

  return (
    <Layout>
      <div className={`${styles.main_screen}`}>
        <section className={`${styles.screen_one}`}>
          <div
            className="container p-0"
            style={{ width: "100%", height: "100%" }}
          >
            <div className={`${styles.image_container}`}>
              <div className={`${styles.text_cont}`}>
                <h1>The best Way to get Wherever you are going</h1>
                <h4 style={{ color: "#6C6C71", fontWeight: "350" }}>
                  Driving a cab is not really a nurturing type of relationship.
                  You take people and they tip you, they may not tip you, you
                  don't know their names, they don't care about you, you don't
                  care about them.
                </h4>
                <div className={`${styles.button_cont}`}>
                  <div
                    style={{
                      width: "50%",
                      height: "35%",
                      borderRadius: "6px",
                      // border: "5px solid #fff",
                      backgroundColor: "#F6B100",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <button
                      style={{
                        outline: "none",
                        background: "none",
                        border: "none",
                      }}
                    >
                      <h4
                        style={{
                          color: "white",
                        }}
                      >
                        Sign Up As a User
                      </h4>
                    </button>
                  </div>
                  {/* <div
                    style={{
                      width: "50%",
                      height: "30%",
                      backgroundColor: "yellow",
                    }}
                  ></div> */}
                </div>
              </div>
              <div className={`${styles.img_cont}`}>
                <img
                  src={taxi}
                  alt=""
                  style={{ width: "100%", height: "50%" }}
                />
              </div>
            </div>
            <div className={`${styles.bookbox}`}>
              <div style={{ width: "100%", height: "25%", display: "flex" }}>
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    color: "#000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: back ? "white" : "#d5d5ff",
                    borderTop: back ? "4px solid #F6B100" : "none",
                  }}
                  onClick={() => toggle()}
                >
                  <h5>Trip Package</h5>
                </div>
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    color: "#000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: !back ? "white" : "#d5d5ff",
                    borderTop: !back ? "4px solid #F6B100" : "none",
                  }}
                  onClick={() => toggle()}
                >
                  {" "}
                  <h5>Trip Package</h5>
                </div>
              </div>

              <div
                style={{ width: "100%", height: "75%" }}
                className="mx-4 pt-4"
              >
                {back ? (
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Location</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Destination</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Arrival Date</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md={2}
                      controlId="formGridZip"
                      style={{ marginTop: "1.9em" }}
                    >
                      <Button
                        style={{
                          width: "75%",
                          backgroundColor: "#F6B100",
                          border: "none",
                        }}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Form.Group>
                  </Row>
                ) : (
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Location</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Destination...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Arrival Date</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Returned Date</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md={2}
                      controlId="formGridZip"
                      style={{ marginTop: "1.9em" }}
                    >
                      <Button
                        style={{
                          width: "75%",
                          backgroundColor: "#F6B100",
                          border: "none",
                        }}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Form.Group>
                  </Row>
                )}
              </div>
            </div>
            <div className={`${styles.offer}`}>
              <h1 className={`${styles.heading}`}>What We Offer</h1>
              <h2 style={{ textAlign: "center", lineHeight: "52.8px" }}>
                The services we provide in our Company
              </h2>
              <div className={`${styles.cards_hold}`}>
                <div className={`${styles.cardthink}`}>
                  <div
                    className="head pt-3"
                    style={{
                      width: "100%",
                      height: "40%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CreditCard
                      style={{
                        fontSize: "52px",
                        color: "#52525E",
                        marginBottom: "10px",
                      }}
                    />
                    <h4 style={{ color: "#52525E" }}>Easy Payment</h4>
                  </div>
                  <div
                    className="corp px-3"
                    style={{
                      width: "100%",
                      height: "60%",
                      textAlign: "center",
                      fontSize: "22px",
                    }}
                  >
                    <p className="p-0 m-0">
                      montre-nous que tu maitrises le mboa et dis-nous dans
                      quelle ville by telling us in which town this monument is
                      found
                    </p>
                  </div>
                </div>
                <div className={`${styles.cardthink}`}>
                  <div
                    className="head pt-3"
                    style={{
                      width: "100%",
                      height: "40%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      style={{
                        fontSize: "52px",
                        color: "#52525E",
                        marginBottom: "10px",
                      }}
                    />
                    <h4 style={{ color: "#52525E" }}>Make Trip</h4>
                  </div>
                  <div
                    className="corp px-3"
                    style={{
                      width: "100%",
                      height: "60%",
                      textAlign: "center",
                      fontSize: "22px",
                    }}
                  >
                    <p className="p-0 m-0">
                      montre-nous que tu maitrises le mboa et dis-nous dans
                      quelle ville by telling us in which town this monument is
                      found
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.cardthink}`}
                  style={{ backgroundColor: "#fff" }}
                >
                  <div
                    className="head pt-3"
                    style={{
                      width: "100%",
                      height: "40%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Map
                      style={{
                        fontSize: "52px",
                        color: "#52525E",
                        marginBottom: "10px",
                      }}
                    />
                    <h4 style={{ color: "#52525E" }}>Search Your location</h4>
                  </div>
                  <div
                    className="corp px-3"
                    style={{
                      width: "100%",
                      height: "60%",
                      textAlign: "center",
                      fontSize: "22px",
                    }}
                  >
                    <p className="p-0 m-0">
                      montre-nous que tu maitrises le mboa et dis-nous dans
                      quelle ville by telling us in which town this monument is
                      found
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.specialOffer}`}>
              <div
                className="image_tax"
                style={{
                  width: "40%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={taxi1}
                  alt=""
                  // style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div
                className="text_tax"
                style={{ width: "50%", height: "100%" }}
              >
                <h1
                  style={{
                    color: "#f6b100",
                    textAlign: "center",
                    letterSpacing: "22px",
                    paddingTop: "3em",
                    paddingBottom: "10px",
                  }}
                >
                  Special Offer
                </h1>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "400",
                    fontSize: "29px",
                    lineHeight: "46.4px",
                  }}
                >
                  Don’t compare your day 1 with someone’s 10 years”. I use this
                  quote all the time. Not just with tech. It applies to all
                  courses of life. I even use it when I’m coaching. Next time
                  you are comparing yourself remember things take time and you
                  got this!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className={`${styles.screen_two}`}>
          <div className=""></div>
        </section> */}
      </div>
      <div className={`${styles.screen_two}`}>
        <div className={`${styles.hold_two} container`}>
          <div className="text-offer" style={{ width: "50%", height: "100%" }}>
            <h2
              style={{
                width: "100%",
                paddingTop: "2em",
                textAlign: "center",
                letterSpacing: " 22px",
                color: " #f6b100",
                paddingBottom: "1em",
              }}
            >
              Wherever you are we can locate you{" "}
            </h2>
            <div className="d-flex">
              <Box
                style={{
                  fontSize: "68px",
                  color: "#f6b100",
                  marginRight: "10px",
                }}
              />
              <p style={{ fontSize: "22px" }}>
                The best Taxis are in fleetway, trusted and reliable, the
                product or service should be sold, and how the company will
                measure its efforts.{" "}
              </p>
            </div>
            <div className="d-flex">
              <Box
                style={{
                  fontSize: "68px",
                  color: "#f6b100",
                  marginRight: "10px",
                }}
              />
              <p style={{ fontSize: "22px" }}>
                The best Taxis are in fleetway, trusted and reliable, the
                product or service should be sold, and how the company will
                measure its efforts.{" "}
              </p>
            </div>
            <div className="d-flex">
              <Box
                style={{
                  fontSize: "68px",
                  color: "#f6b100",
                  marginRight: "10px",
                }}
              />
              <p style={{ fontSize: "22px" }}>
                The best Taxis are in fleetway, trusted and reliable, the
                product or service should be sold, and how the company will
                measure its efforts.{" "}
              </p>
            </div>
            <div className="d-flex">
              <Box
                style={{
                  fontSize: "68px",
                  color: "#f6b100",
                  marginRight: "10px",
                }}
              />
              <p style={{ fontSize: "22px" }}>
                The best Taxis are in fleetway, trusted and reliable, the
                product or service should be sold, and how the company will
                measure its efforts.{" "}
              </p>
            </div>
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={phone}
              alt=""
              style={{
                width: "90%",
                height: "70%",
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
