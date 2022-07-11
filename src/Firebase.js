import firebase from "firebase";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCNywiWxPC2p5TSKfJ1x9j-Mg3cQZtEMQI",
  authDomain: "fleetway-19c43.firebaseapp.com",
  projectId: "fleetway-19c43",
  storageBucket: "fleetway-19c43.appspot.com",
  messagingSenderId: "192852844387",
  appId: "1:192852844387:web:15ab09ea7b5fa4d66c7d56",
  measurementId: "G-84C4VMFN71",
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
export default app;

export const getToken = async (setTokenFound) => {
  let currentToken = "";
  try {
    currentToken = await messaging.getToken({
      vapidKey:
        "BEyKC0KH9GzP0DYkhYKbjxROVbIdhbynYi1cvXOwkW_RONKBKiqLxnMh02_xjq1qv7p9vV0s9P0eyYBnsoQRpXw",
    });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token.", error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
