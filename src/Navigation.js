import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import SignIn from "./pages/SignIn/SignIn";
import Clive from "./components";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import DriverSignup from "./pages/DriverSignup/DriverSignup";
import GeoMap from "./pages/GeoMap/GeoMap";
import DriverInfo from "./pages/DriverInfo/DriverInfo";
import TrackPay from "./pages/TrackPay/TrackPay";
import DriverSignin from "./pages/DriverSignin/DriverSignin";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div className="App">{children}</div>;
}

function Navigation() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/userdashboard" element={<UserDashboard />} />
          <Route exact path="/signup-driver" element={<DriverSignup />} />
          <Route exact path="/signin-driver" element={<DriverSignin />} />
          <Route exact path="/geo-map" element={<GeoMap />} />
          <Route exact path="/driverInfo" element={<DriverInfo />} />
          <Route exact path="/trackingpay" element={<TrackPay />} />
        </Routes>
        {/* <Offline>
        <Network />
      </Offline> */}
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Navigation;
