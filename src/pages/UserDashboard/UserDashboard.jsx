import React from "react";
import UserLayout from "../../components/Layout/UserLayout";
import styles from "./UserDash.module.css";
import phone from "../../styles/assets/part.png";

function UserDashboard() {
  return (
    <UserLayout>
      <div className={`${styles.box}`}>
        <div className={`${styles.hero}`}>
          <div className={`${styles.hold_box}`}>
            <div className={`${styles.img_box}`}>
              <img src={phone} style={{ width: "80%", height: "100%" }} />
            </div>

            <div className={`${styles.sel_box}`}>
              {/* <div className={`${styles.sel1_box}`}></div> */}
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default UserDashboard;
