import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import SignIn from "./pages/SignIn/SignIn";
import Clive from "./components";

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
        </Routes>
        {/* <Offline>
        <Network />
      </Offline> */}
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Navigation;
