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
import DriverDashboad from "./pages/DriverDashboard/DriverDashboad";
import DriverProfile from "./pages/DriverProfile/DriverProfile";
import DriverHome from "./components/DriverHome";
import DriverHistory from "./components/DriverHistory";
import DriverLayout from "./components/Layout/DriverLayout";
import LyftTrack from "./pages/LyftTrack";
import UserProfile from "./pages/Userprofile/UserProfile";

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
          <Route exact path="/lyft-track" element={<LyftTrack />} />
          <Route exact path="/driverpanel" element={<DriverLayout />} />
          <Route exact path="/driverprofile" element={<DriverProfile />} />
          <Route exact path="/userprofile" element={<UserProfile />} />
          <Route exact path="/drive-home" element={<DriverHome />} />
          <Route path="/driver-history" element={<DriverHistory />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Navigation;
