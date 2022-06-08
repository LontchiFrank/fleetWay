import React from "react";
import UserLayout from "../../components/Layout/UserLayout";
import styles from "./UserDash.module.css";
import phone from "../../styles/assets/part.png";
import { Button } from "react-bootstrap";

function UserDashboard() {
  return (
    <UserLayout>
      <div className={`${styles.box}`}>
        <div className={`${styles.hero}`}>
          <div className="container" style={{ width: "100%", height: "100%" }}>
            <div className={`${styles.hold_box}`}>
              <div className={`${styles.img_box}`}>
                <div className={`${styles.small_box}`}>
                  <div className="hall" style={{ padding: "2em" }}>
                    <h1>Be A Driver and please your customers</h1>
                    <p className="text-left" style={{ lineHeight: "1.8" }}>
                      Don’t compare your day 1 with someone’s 10 years”. I use
                      this quote all the time. Not just with tech. It applies to
                      all courses of life. I even use it when I’m coaching. Next
                      time you are comparing yourself remember things take time
                      and you got this!
                    </p>
                    <div
                      className="sign"
                      // style={{ width: "100%", height: "30%" }}
                    >
                      <Button
                        // variant="secondary"
                        className="py-4 px-4"
                        style={{
                          background: "#3d3d42",
                          outline: "none",
                          border: "none",
                        }}
                      >
                        Sign Up As Driver
                      </Button>
                    </div>
                  </div>
                </div>
                {/* <img src={} style={{ width: "100%", height: "90%" }} /> */}
              </div>

              <div className={`${styles.sel_box}`}> </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.hero1}`}>
        <div className="container" style={{ width: "100%", height: "100%" }}>
          <div className={`${styles.box2}`}></div>
        </div>
      </div>
      {/* <div className={`${styles.box3}`}></div> */}
    </UserLayout>
  );
}

export default UserDashboard;
