import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Home.module.css";
import taxi from "../../styles/assets/taxi.png";
import { Row, Form, Col, Button } from "react-bootstrap";
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
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
