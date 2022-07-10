import React from "react";
import "aframe";
// import ReactDOM from "react-dom";
import { Scene, Sky } from "react-aframe-ar";
import inside from "../../styles/assets/3.jpeg";
function ViewCar() {
  return (
    <Scene>
      <Sky color="#ccc" src={inside} />
    </Scene>
  );
}

export default ViewCar;
