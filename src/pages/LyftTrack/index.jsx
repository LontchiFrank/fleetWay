import React, { useEffect, useState } from "react";
import UserLayout from "../../components/Layout/UserLayout";
import GeoMap from "../GeoMap/GeoMap";
import orange from "../../styles/assets/momo.jpeg";
import mtn from "../../styles/assets/MTN.jpeg";
import firebase from "firebase";
import IncomingRequest from "../../components/ComingRequest";

function LyftTrack() {
  const ref = firebase.firestore();
  const [driver, setDriver] = useState();
  const [misile, setMisile] = useState();
  var docRef = ref.collection("Drivers").doc("Driver 1");
  var docRef1 = ref
    .collection("Drivers")
    .doc("Driver 1")
    .collection("Order2")
    .doc("Order2");
  useEffect(() => {
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setDriver(doc.data());
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <UserLayout>
      <div className="container" style={{ height: "90vh", width: "100%" }}>
        <GeoMap />
        <h3 className="pt-4">Detail Information</h3>
        <div className="">
          {/* <SendingCard user={driver} /> */}
          <IncomingRequest user={driver} />

          <div style={{ paddingTop: "7em" }}>
            <h4>ChoosePayment Method:</h4>
            <div
              className="pb-5 d-flex"
              style={{ width: "100%", height: "60%", gap: "16px" }}
            >
              <div className="mtn" style={{}}>
                <div
                  className="d-flex justify-content-center align-items-center flex-column"
                  style={{
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    width: "100%",
                    height: "200px",
                  }}
                >
                  <div style={{ width: "100%", height: "80%" }}>
                    <img
                      src={mtn}
                      alt=""
                      style={{ width: "100%", height: "90%" }}
                    />
                  </div>
                  <div tyle={{ width: "100%", height: "20%" }}>Choose MTN</div>
                </div>
              </div>
              <div className="orange" style={{}}>
                <div
                  className="d-flex justify-content-center align-items-center flex-column"
                  style={{
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    width: "100%",
                    height: "200px",
                  }}
                >
                  <img
                    src={orange}
                    alt=""
                    style={{ width: "100%", height: "80%" }}
                  />
                  <div tyle={{ width: "100%", height: "20%" }}>Choose MTN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default LyftTrack;
