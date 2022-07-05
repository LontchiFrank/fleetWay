import React from "react";
import { Route, Routes } from "react-router-dom";
import DriverHistory from "../../components/DriverHistory";
import DriverHome from "../../components/DriverHome";

function DriverPanel() {
  return (
    <div>
      <DriverLayout>
        <Routes>
          <Route path="/driver-home" element={<DriverHome />} />
          <Route path="/driver-history" element={<DriverHistory />} />
        </Routes>
      </DriverLayout>
    </div>
  );
}

export default DriverPanel;
