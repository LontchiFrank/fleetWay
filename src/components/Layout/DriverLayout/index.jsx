import React from "react";
import {
  CDBBtn,
  CDBProgress,
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBContainer,
  CDBLink,
} from "cdbreact";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import DriverDashboad from "../../../pages/DriverDashboard/DriverDashboad";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../Sidebar";
import "./Dash.css";
import DriverHome from "../../DriverHome";
import DriverHistory from "../../DriverHistory";
import DriverPanel from "../../../pages/DriverPanel";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function DriverLayout({ children }) {
  const data = {
    chart1: {
      labels: ["Eating", "Drinking", "Sleeping"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: ["#F2C94C", "#2F80ED", "#9B51E0"],
          borderWidth: 0,
          data: [9, 22, 7],
        },
      ],
    },
    chart2: {
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255, 153, 51, 0.8)",
          borderColor: "rgb(102, 51, 0)",
          data: [65, 59, 75, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: "#2F80ED",
          borderColor: "rgb(0, 41, 102)",
          data: [38, 48, 60, 79, 96, 47, 80],
        },
      ],
    },
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      xAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div className="dashboard d-flex">
      <div className="sidenav">
        <Sidebar />
      </div>
      <div
        className="mainPage  "
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div className="d-flex card-section">
              <div className="cards-container">
                <div className="card-bg w-100 border d-flex flex-column">
                  <div className="p-4 d-flex flex-column h-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4 className="m-0 h5 font-weight-bold text-dark">
                        Sales
                      </h4>
                      <div className="py-1 px-2 bg-grey rounded-circle">
                        <i className="fas fa-suitcase"></i>
                      </div>
                    </div>
                    <h4 className="my-4 text-right text-dark h2 font-weight-bold">
                      300 FCFA
                    </h4>
                    <CDBProgress
                      value={65}
                      height={8}
                      colors="primary"
                    ></CDBProgress>
                    <p className="mt-2 text-success small">
                      <i className="fas fa-angle-up p-0"></i> 27.4%
                      <span
                        style={{ fontSize: "0.95em" }}
                        className="ml-2 font-weight-bold text-muted"
                      >
                        Since last month
                      </span>
                    </p>
                  </div>
                </div>
                <div className="card-bg w-100 border d-flex flex-column">
                  <div className="p-4 d-flex flex-column h-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4 className="m-0 h5 font-weight-bold text-dark">
                        Traffic by Source
                      </h4>
                      <div className="px-2 py-1 bg-grey rounded-circle">
                        <i className="fas fa-chart-line"></i>
                      </div>
                    </div>
                    <div className=" d-flex justify-content-between">
                      <CDBContainer
                        style={{
                          width: "220px",
                          height: "150px",
                          margin: "66px -1rem",
                        }}
                        className="p-0"
                      >
                        <Pie
                          data={data.chart1}
                          options={
                            ({ responsive: true },
                            { maintainAspectRatio: false },
                            { legend: { display: false } })
                          }
                        />
                      </CDBContainer>
                      <div className="text-right w-25">
                        <p className="m-0">Google</p>
                        <p className="text-success small">10.57</p>
                        <div>
                          <div className="d-flex align-items-center justify-content-between text-success">
                            <span
                              style={{
                                fontSize: "3em",
                                margin: "-2rem 0px -1.5rem 0px",
                              }}
                            >
                              &#8226;
                            </span>
                            <span className="small">Google</span>
                          </div>
                          <div
                            className="d-flex align-items-center justify-content-between"
                            style={{ color: "#9B51E0" }}
                          >
                            <span
                              style={{
                                fontSize: "3em",
                                margin: "-2rem 0px -1.5rem 0px",
                              }}
                            >
                              &#8226;
                            </span>
                            <span className="small">Yahoo</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between text-warning">
                            <span
                              style={{
                                fontSize: "3em",
                                margin: "-2rem 0px -1.5rem 0px",
                              }}
                            >
                              &#8226;
                            </span>
                            <span className="small">Bing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card-bg w-100 d-flex flex-column border d-flex flex-column"
                  style={{ gridRow: "span 2" }}
                >
                  <div className="p-4 d-flex flex-column h-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4 className="m-0 h5 font-weight-bold text-dark">
                        Total Orders
                      </h4>
                      <div className="px-2 py-1 bg-grey rounded-circle">
                        <i className="fas fa-shopping-bag"></i>
                      </div>
                    </div>
                    <div className="mt-5 d-flex align-items-center justify-content-between">
                      <div>
                        <h4 className="m-0 h1 font-weight-bold text-dark">
                          452
                        </h4>
                        <p className="text-success small">
                          <i className="fas fa-angle-up p-0"></i> 18.52%
                        </p>
                      </div>
                      <div className="text-right d-flex flex-column justify-content-between">
                        <div className="d-flex align-items-center justify-content-between text-primary">
                          <span
                            style={{
                              fontSize: "3em",
                              margin: "-2rem 0px -1.5rem 0px",
                            }}
                          >
                            &#8226;
                          </span>
                          <span className="small">August</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between text-warning">
                          <span
                            style={{
                              fontSize: "3em",
                              margin: "-2rem 0px -1.5rem 0px",
                            }}
                          >
                            &#8226;
                          </span>
                          <span className="small ml-2">September</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-0 mt-auto">
                      <Bar height={250} data={data.chart2} options={options} />
                    </div>
                    <p className="c-p text-dark font-weight-bold text-right mt-3 mb-0">
                      More Details
                      <i className="fas fa-arrow-right ml-1"></i>
                    </p>
                  </div>
                </div>

                <div className="card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="d-flex flex-column p-0 h-100">
                    <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                      <h4 className="font-weight-bold text-dark h5">
                        Page Visits
                      </h4>
                      <div className="p-1 bg-grey rounded-circle">
                        <i className="fas fa-sticky-note"></i>
                      </div>
                    </div>
                    <div className="mx-4">
                      <CDBTable borderless responsive>
                        <CDBTableHeader color="light">
                          <tr>
                            <th>User Name</th>
                            <th className="table-rem">Destination</th>
                            <th className="table-rem">Price</th>
                          </tr>
                        </CDBTableHeader>
                        <CDBTableBody>
                          <tr>
                            <td>Nixon Ndume</td>
                            <td className="table-rem">Malingo,</td>
                            <td className="table-rem">200frs</td>
                          </tr>
                          <tr>
                            <td>Larissa Sakwe</td>
                            <td className="table-rem">Boundouma</td>
                            <td className="table-rem">100frs</td>
                          </tr>
                          <tr>
                            <td>Yaya Mamoudou</td>
                            <td className="table-rem">Sampit</td>
                            <td className="table-rem">200frs</td>
                          </tr>
                        </CDBTableBody>
                      </CDBTable>
                    </div>
                    <p className="mx-4 c-p text-dark font-weight-bold text-right mt-auto mr-3">
                      See More
                      <i className="fas fa-arrow-right ml-1"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="d-flex align-items-center">
                <span
                  className="footer-rem"
                  style={{
                    fontSize: "3em",
                    margin: "-2rem 0px -1.5rem 1rem",
                    color: "#C4C4C4",
                  }}
                >
                  &#8226;
                </span>
                <small className="ml-2 mt-1">
                  &copy; Devwares, 2020. All rights reserved.
                </small>
              </div>
              <div className="footer-rem">
                <CDBBtn
                  flat
                  color="dark"
                  className="py-1 px-2 bg-dark border-0"
                >
                  <i className="fab fa-facebook-f"></i>
                </CDBBtn>
                <CDBBtn
                  flat
                  color="dark"
                  className="mx-3 py-1 px-2 bg-dark border-0"
                >
                  <i className="fab fa-twitter"></i>
                </CDBBtn>
                <CDBBtn
                  flat
                  color="dark"
                  className="py-1 px-2 bg-dark border-0"
                >
                  <i className="fab fa-instagram"></i>
                </CDBBtn>
              </div>
            </footer>
          </div>
        </div>
        <DriverPanel />
      </div>
    </div>
  );
}

export default DriverLayout;
