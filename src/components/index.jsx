import React from "react";
import app from "../Firebase";

function Clive() {
  const signup = () => {
    app
      .auth()
      .createUserWithEmailAndPassword("frank@yahoo.cm", "frankyb")
      .then(() => {
        console.log("sucessfull");
      })
      .catch(() => {
        console.log("Failed");
      });
  };
  return (
    <div>
      <button onClick={signup}>Sign up</button>
    </div>
  );
}

export default Clive;
