import React, { useState } from "react";
import styles from "./Signup.module.css";
import track from "../../styles/assets/track.png";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import app from "../../Firebase";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState(false);
  const { name, email, tel, password, password2 } = formData;

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError("Password do not Match");
    }
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        console.log({ message: `user${data.user.uid} signed up successfully` });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={`${styles.main_sign}`}>
      <div style={{ marginLeft: "17em", marginRight: "17em" }}>
        <div className={`${styles.main_box}`}>
          <div className={`${styles.main_hold}`}>
            <div className={`${styles.img_box}`}>
              <img src={track} alt="" />
            </div>
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
                <h2>Sign Up Here</h2>
                <p style={{ color: "#6462D6", fontSize: "22px" }}>
                  Register as User in Fleetway
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
                  {error ? <Alert>{error}</Alert> : null}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      value={name}
                      onChange={(e) => onchange(e)}
                    />
                  </Form.Group>
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
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telephone :</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Phone Number"
                      name="tel"
                      value={tel}
                      onChange={(e) => onchange(e)}
                    />
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
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password2"
                      value={password2}
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
                    Already have an account? <a href="/signin">Sign In</a>
                  </p>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
