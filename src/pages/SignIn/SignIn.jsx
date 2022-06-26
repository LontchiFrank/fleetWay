import React, { useState } from "react";
import styles from "./Signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import track from "../../styles/assets/track.png";
import { Row, Form, Col, Button } from "react-bootstrap";
import app from "../../Firebase";
import { myAlert } from "../../components/myAlert";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const navigate = useNavigate();
  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log({
          message: `user${data.user.uid} signed up successfully`,
        });
        myAlert(data ? true : false);
        navigate("/userdashboard");

        //you can now save the user state globally and navigate to the next page
      })
      .catch((err) => {
        myAlert(false);
        console.error(err);
      });
  };

  return (
    <div>
      <div className={`${styles.main_sign}`}>
        <div style={{ marginLeft: "17em", marginRight: "17em" }}>
          <div className={`${styles.main_box}`}>
            <div className={`${styles.main_hold}`}>
              <div className={`${styles.form_box}`}>
                <div
                  style={{
                    width: "100%",
                    height: "20%",
                    paddingTop: "3em",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <h2>Sign In Here</h2>
                  <p style={{ color: "#6462D6", fontSize: "22px" }}>
                    Login into your Fleetway Account
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "80%",
                    paddingLeft: "5em",
                    paddingRight: "5em",
                  }}
                >
                  <Form onSubmit={(e) => onsubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={(e) => onchange(e)}
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => onchange(e)}
                      />
                    </Form.Group>

                    <Button
                      style={{
                        width: "100%",
                        backgroundColor: "#F6B100",
                        border: "none",
                      }}
                      type="submit"
                    >
                      Submit
                    </Button>
                    <p className="text-center">
                      Don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                  </Form>
                </div>
              </div>
              <div className={`${styles.img_box}`}>
                <img src={track} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
