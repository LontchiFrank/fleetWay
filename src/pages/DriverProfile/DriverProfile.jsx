import React from "react";
import UserLayout from "../../components/Layout/UserLayout";
import styles from "./DriverProfile.module.css";

function DriverProfile() {
  return (
    <UserLayout>
      <div className="container">
        <div className={`${styles.profile_image}`}>
          <div className="user-photo">
            <h2>This is My profile</h2>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default DriverProfile;
