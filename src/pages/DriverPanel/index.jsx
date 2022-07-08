import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DriverHistory from "../../components/DriverHistory";
import DriverHome from "../../components/DriverHome";

function DriverPanel() {
  return (
    <div>
      <Routes>
        <Route path="/driver-home" element={<DriverHome />} />
        <Route path="/driver-history" element={<DriverHistory />} />
      </Routes>
    </div>
  );
}

export default DriverPanel;
