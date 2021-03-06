import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-light  pt-3 pb-3">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
            href="#"
            style={{ color: "#222f3e", fontweight: "700" }}
          >
            {/* <img src="/Dip.jpeg" className="img-responsive" height="60" /> */}
            fleetWay
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              {" "}
              <i class="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link actived"
                  aria-current="page"
                  style={{ color: "#222f3e", fontweight: "700" }}
                >
                  Home
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                ></ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/testimony"
                  className="nav-link actived"
                  aria-current="page"
                  style={{ color: "#222f3e", fontweight: "700" }}
                >
                  Testimonies
                </Link>
              </li>
              <div className="d-flex" style={{ gap: "6px " }}>
                <button
                  type="button"
                  class="btn  p-0 py-0 px-2"
                  style={{ border: "2px solid #F6B100" }}
                >
                  <li className="nav-item">
                    <Link
                      to="/signin"
                      className="nav-link actived"
                      aria-current="page"
                      style={{ color: "#F6B100", fontweight: "700" }}
                    >
                      Signin
                    </Link>
                  </li>
                </button>

                <button
                  type="button"
                  class="btn  btn-sm py-0"
                  style={{ backgroundColor: "#2826AE" }}
                >
                  <li className="nav-item">
                    {" "}
                    <Link
                      to="/signup"
                      className="nav-link actived"
                      aria-current="page"
                      style={{ color: "white" }}
                    >
                      Signup
                    </Link>
                  </li>
                </button>
              </div>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </nav>
      <div>{children}</div>
      <footer
        className="container-fluid page-footer font-small pt-4"
        style={{ backgroundColor: "#BFD9FE" }}
      >
        <div className="container text-md-left">
          <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
              <h5 className="text-uppercase">FleetWay</h5>
              <p>
                Proven that most people actually give it a chance when they are
                guided to understand the basics about the industry.
              </p>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    Home page
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    Contribute
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    +2376 70 21 27 26 | 6 71 03 30 40
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    info@dipglobalsystem.com
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    Yaounde, Lorem ipsum dolo
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>

        <div className="footer-copyright text-center py-3">
          ?? 2021 Copyright:
          <a
            href="https://mdbootstrap.com/"
            style={{
              textDecoration: "none",
              color: "black",
              listStyle: "none",
            }}
          >
            {" "}
            dip.com
          </a>
        </div>
      </footer>
    </main>
  );
}

export default Layout;
