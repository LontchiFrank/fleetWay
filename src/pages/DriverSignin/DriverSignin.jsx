import React, { useState, useEffect } from "react";
import styles from "./DriverSignin.module.css";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase";
import track from "../../styles/assets/Driver.png";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import app from "../../Firebase";
import { myAlert } from "../../components/myAlert";
import { getUser } from "../../redux/actions/userAction";
import { getDrivers } from "../../redux/actions/driverAction";

function DriverSignin() {
  const ref = firebase.firestore().collection("Drivers");
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState(false);
  const { name, email, tel, password, password2 } = formData;

  const getData2 = () => {
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setData(items);
      setLoader(false);
      console.log(data);
    });
  };

  // return () => {
  //   clearTimeout(timeId);
  // };

  useEffect(() => {
    getData2();
  }, []);
  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onsubmit = (e) => {
    e.preventDefault();
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        myAlert(true);
        dispatch(getDrivers(data));
        navigate("/driverInfo");

        //you can now save the user state globally and navigate to the next page
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        myAlert(false);
      });
  };
  return (
    <div>
      {" "}
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
                    Login as Driver in Fleetway
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
                    {error ? <Alert variant="danger">{error}</Alert> : null}
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
                      Don't have an account?{" "}
                      <a href="/signup-driver">Sign Up</a>
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

export default DriverSignin;
