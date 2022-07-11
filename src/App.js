import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import firebase from "firebase";
import { onMessageListener } from "./Firebase";
import Notify from "./components/Notify";
// import { getToken } from "./Firebase";

function App() {
  // const [isTokenFound, setTokenFound] = useState(false);
  // getToken(setTokenFound);
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  const messaging = firebase.messaging();
  messaging.getToken().then((data) => {
    <Notify />;
    console.warn("token", data);
  });

  useEffect(() => {
    onMessageListener()
      .then((payload) => {
        setShow(true);
        setNotification({
          title: payload.notification.title,
          body: payload.notification.body,
        });
        console.log("payload", payload);
      })
      .catch((err) => console.log("failed: ", err));
  }, []);
  return (
    <div className="App">
      {/* {isTokenFound && Notification},{!isTokenFound && Need} */}
      <Provider store={store}>
        <Navigation />
      </Provider>
    </div>
  );
}

export default App;
