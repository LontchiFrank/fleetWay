import firebase from "firebase";

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

export default app;
