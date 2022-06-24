import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import app from "../../Firebase";
import "./GeoMap.css";

const init_location = {
  lng: 9.263224,
  lat: 4.155966,
};

function GeoMap({ latitudes, longitudes }) {
  const [location, setlocation] = useState(init_location);
  const [driver, setdriver] = useState(init_location);

  useEffect(() => {
    move();
  }, []);

  const zoomLevel = 15;
  async function move() {
    for (let i = 0; i < 1000; i++) {
      const val = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            lng: 9.263224 + i * 0.00001,
            lat: 4.155966 + i * 0.00001,
          });
        }, 1000);
      });
      setdriver(val);
    }
  }

  async function uploadFile(ev) {
    const file = ev.target.files[0];
    const storageRef = app.storage().ref("images/");
    try {
      console.log("loading");
      await storageRef.child(file.name).put(file);
      console.log("uploaded");
      const url = await storageRef.child(file.name).getDownloadURL();
      console.log(url);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <input onChange={uploadFile} type={"file"}></input>
      <Map
        location={location}
        zoomLevel={zoomLevel}
        long={longitudes}
        lati={latitudes}
        driver={driver}
      ></Map>
    </div>
  );
}

export default GeoMap;

const Map = ({ location, zoomLevel, long, lati, driver }) => (
  <div className="map">
    <div style={{ height: "35vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAr4-SnQMdWpy81BAjK3Y0536uiO17l1oQ" }}
        center={location}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={driver.lat}
          lng={driver.lng}
          img={
            "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX7963927.jpg"
          }
        />
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          img={
            "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
          }
        />
      </GoogleMapReact>
    </div>
  </div>
);

const LocationPin = ({ img }) => {
  return <img style={{ width: "70px" }} src={img} alt="" />;
};
