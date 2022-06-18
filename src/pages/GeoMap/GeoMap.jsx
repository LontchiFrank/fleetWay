import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const init_location = {
  lng: 9.263224,
  lat: 4.155966,
};

function GeoMap({ latitudes, longitudes }) {
  console.log(longitudes, latitudes);
  const [location, setlocation] = useState(init_location);

  const zoomLevel = 15;

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
      <Map
        location={location}
        zoomLevel={zoomLevel}
        long={longitudes}
        lati={latitudes}
      ></Map>
    </div>
  );
}

export default GeoMap;

const Map = ({ location, zoomLevel, long, lati }) => (
  <div className="map">
    <div style={{ height: "35vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAr4-SnQMdWpy81BAjK3Y0536uiO17l1oQ" }}
        center={location}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={lati}
          lng={long}
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
