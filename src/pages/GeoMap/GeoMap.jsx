import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const init_location = {
  lng: 4.2452626,
  lat: 9.7386367,
};

function GeoMap() {
  const [location, setlocation] = useState(init_location);

  const zoomLevel = 3;

  //   get geolocation
  function getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((result) => {
        console.log(result);
        setlocation({
          address: "",
          lat: result.coords.latitude,
          lng: result.coords.longitude,
        });
      });
    }
  }

  useEffect(() => {
    getGeolocation();
  }, []);
  return (
    <div>
      <Map location={location} zoomLevel={zoomLevel}></Map>
    </div>
  );
}

export default GeoMap;

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div style={{ height: "50vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAr4-SnQMdWpy81BAjK3Y0536uiO17l1oQ" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat - 0.1}
          lng={location.lng - 0.1}
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
