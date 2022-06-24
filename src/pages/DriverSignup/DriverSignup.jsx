import React, { useState, useEffect } from "react";
import styles from "./DriverSignup.module.css";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase";
import track from "../../styles/assets/Driver.png";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import app from "../../Firebase";
import { myAlert } from "../../components/myAlert";
import { getUser } from "../../redux/actions/userAction";

function DriverSignup() {
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
    if (password !== password2) {
      setTimeout(() => {
        // After 3 seconds set the show value to false
        setShow(true);
        setError("Password do not Match");
      }, 2000);
    } else {
      const newDataObj = { name, tel, id: uuidv4(), email };
      app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
          let d = ref
            .doc(email)
            .set(newDataObj)
            .then(() => {
              console.log({
                message: `user${data.user.uid} signed up successfully`,
              });
              myAlert(d ? true : false);
              dispatch(getUser(newDataObj));
              navigate("/userdashboard");

              //you can now save the user state globally and navigate to the next page
            })
            .catch((err) => {
              setError(err.message);
            });
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };
  return (
    <div>
      {" "}
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
                    Register as Driver in Fleetway
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
                    {show ? <Alert variant="danger">{error}</Alert> : null}
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
                    {/* <Row></Row> */}
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
                      Already have an account?{" "}
                      <a href="/signin-driver">Sign In</a>
                    </p>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverSignup;
