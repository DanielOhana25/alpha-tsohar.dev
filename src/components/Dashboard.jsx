import React, { Component } from "react";
import Update from "./Update";
import "@fontsource/poppins";
import { BiTimeFive } from "react-icons/bi";
import { CgTimelapse } from "react-icons/cg";
import { BsCheckCircle, BsGraphUpArrow } from "react-icons/bs";
import { FiDatabase } from "react-icons/fi";
import styles from "../Css/Dashboard.module.css";
import Chart from "./Chart";
import ProjectsList from "./ProjectsList";

export class Dashboard extends Component {
  state = {
    projects: [],
    updates: [
      {
        id: 1,
        title: "Completed",
        summary:
          "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
        desc: "ceci est une tres longue desc loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ",
        date: "04/09/2022",
        status: "in progress",
        priority: "low",
        version: "2.0",
      },
      {
        id: 2,
        title: "Completed",
        summary: "test1",
        desc: "ceci est une tres longue desc loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ",
        date: "04/09/2022",
        status: "completed",
        priority: "immediate",
        version: "2.0",
      },
      {
        id: 3,
        title: "Completed",
        summary: "test1",
        desc: "ceci est une tres longue desc loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ",
        date: "04/09/2022",
        status: "in progress",
        priority: "normal",
        version: "2.0",
      },
      {
        id: 4,
        title: "Completed",
        summary: "test1",
        date: "04/09/2022",
        desc: "ceci est une tres longue desc loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ",
        status: "completed",
        priority: "low",
        version: "2.0",
      },
      {
        id: 5,
        title: "Completed",
        summary: "test1",
        desc: "ceci est une tres longue desc loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ",
        date: "04/09/2022",
        status: "in progress",
        priority: "low",
        version: "2.0",
      },
      {
        id: 6,
        title: "Completed",
        summary: "test1",
        desc: "ceci est une tres longue desc loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ",
        date: "05/09/2022",
        status: "in progress",
        priority: "low",
        version: "2.0",
      },
      {
        id: 7,
        title: "Completed",
        summary: "test1",
        desc: "ceci est une tres longue desc loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ",
        date: "05/09/2022",
        status: "in progress",
        priority: "low",
        version: "2.0",
      },
      {
        id: 8,
        title: "Completed",
        summary: "test1",
        desc: "ceci est une tres longue desc loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ",
        date: "04/09/2022",
        status: "in progress",
        priority: "low",
        version: "2.0",
      },
    ],
  };

  //comportement
  componentDidMount = () => {
    // Chargez les données depuis le localStorage au montage du composant
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    this.setState({ projects: storedProjects });
  };

  render() {
    return (
      <div style={{ height: "100%", width: "100%", fontFamily: "Poppins" }}>
        <div
          style={{
            display: "flex",
            height: "20%",
            width: "100%",
          }}
          className="dashboard-header"
        >
          <div
            style={{
              backgroundColor: "white",
              boxShadow: "0px 2px 15px 0px rgba(0, 0, 0, 0.09)",
              borderRadius: "10px",
              justifyContent: "space-between",
              height: "96%",
              width: "9%",
              marginLeft: "2%",
              marginBlock: "2%",
            }}
            className={styles["dashboard-welcome"]}
          >
            <p
              style={{
                fontWeight: "500",
                marginInline: "1vh",
                marginTop: "1vh",
                wordBreak: "break-word",
              }}
            >
              Welcome Back{" "}
              <span
                style={{
                  backgroundColor: "#48b2ff",
                  color: "white",
                  fontWeight: "bold",
                  paddingInline: "0.5vh",
                }}
              >
                Daniel
              </span>
            </p>
          </div>
          <div
            style={{
              backgroundColor: "white",
              boxShadow: "0px 2px 15px 0px rgba(0, 0, 0, 0.09)",
              borderRadius: "10px",
              justifyContent: "space-between",
              height: "96%",
              width: "20%",
              marginLeft: "1%",
              marginBlock: "2%",
              display: "flex",
              flexDirection: "column",
            }}
            className={styles["dashboard-tickets"]}
          >
            <p
              style={{
                fontWeight: "bold",
                marginInline: "2vh",
                marginTop: "1vh",
              }}
            >
              {this.props.typeUser === "admin" ? "Projects" : "Tickets"}
            </p>
            <>
              <div
                style={{
                  marginInline: "2vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                className={styles["dashboard-tickets"]}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BiTimeFive style={{ color: "#F39C12" }} />
                  <span style={{ marginLeft: "1vh" }}>Upcoming</span>
                </div>
                <span>
                  {this.props.typeUser === "admin"
                    ? this.state.projects.filter(
                        (project) => project.status === "Prévu"
                      ).length
                    : "3"}
                </span>
              </div>

              <div
                style={{
                  marginInline: "2vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                className={styles["dashboard-tickets"]}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CgTimelapse style={{ color: "#2196F3" }} />
                  <span style={{ marginLeft: "1vh" }}>In Progress</span>
                </div>
                <span>
                  {this.props.typeUser === "admin"
                    ? this.state.projects.filter(
                        (project) => project.status === "En cours"
                      ).length
                    : "3"}
                </span>
              </div>

              <div
                style={{
                  marginInline: "2vh",
                  marginBottom: "1vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                className={styles["dashboard-tickets"]}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BsCheckCircle style={{ color: "#8BC34A" }} />
                  <span style={{ marginLeft: "1vh" }}>Completed</span>
                </div>
                <span>
                  {this.props.typeUser === "admin"
                    ? this.state.projects.filter(
                        (project) => project.status === "Terminée"
                      ).length
                    : "3"}
                </span>
              </div>
            </>
          </div>
          <div
            style={{
              backgroundColor: "white",
              boxShadow: "0px 2px 15px 0px rgba(0, 0, 0, 0.09)",
              borderRadius: "10px",
              justifyContent: "space-between",
              height: "96%",
              width: "20%",
              marginLeft: "2%",
              marginBlock: "2%",
              display: "flex",
              flexDirection: "column",
            }}
            className={styles["dashboard-invoices"]}
          >
            <p
              style={{
                fontWeight: "bold",
                marginInline: "2vh",
                marginTop: "1vh",
              }}
            >
              Invoices
            </p>
            <>
              <div
                style={{
                  marginInline: "2vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ marginLeft: "1vh" }}>Invoices payed</span>
                <span
                  style={{
                    backgroundColor: "#D4EFDF",
                    color: "#8BC34A",
                    paddingInline: "2vh",
                    borderRadius: "55px",
                  }}
                >
                  3
                </span>
              </div>

              <div
                style={{
                  marginInline: "2vh",
                  marginBottom: "1vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ marginLeft: "1vh" }}>Invoices to pay</span>

                <span
                  style={{
                    backgroundColor: "#FDEBD0",
                    color: "#FF9800",
                    paddingInline: "2vh",
                    borderRadius: "55px",
                  }}
                >
                  3
                </span>
              </div>
            </>
          </div>
          <div
            style={{
              backgroundColor: "white",
              boxShadow: "0px 2px 15px 0px rgba(0, 0, 0, 0.09)",
              borderRadius: "10px",
              justifyContent: "space-between",
              height: "96%",
              width: "20%",
              marginLeft: "2%",
              marginBlock: "2%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#48b2ff",
              color: "white",
            }}
            className={styles["dashboard-linesCode"]}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginInline: "2vh",
                marginTop: "1vh",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {" "}
                Lines of code written
              </span>{" "}
              <span>
                <BsGraphUpArrow />
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginInline: "2vh",
                marginBottom: "1vh",
              }}
            >
              <span>20,654</span>
              <span>+6.78%</span>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              boxShadow: "0px 2px 15px 0px rgba(0, 0, 0, 0.09)",
              borderRadius: "10px",
              justifyContent: "space-between",
              height: "96%",
              width: "20%",
              margin: "2%",
              display: "flex",
              flexDirection: "column",
            }}
            className={styles["dashboard-database"]}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginInline: "2vh",
                marginTop: "1vh",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {" "}
                Database Storage
              </span>{" "}
              <span>
                <FiDatabase />
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginInline: "2vh",
                marginBottom: "1vh",
              }}
            >
              <span>20,654</span>
              <span>+6.78%</span>
            </div>
          </div>
        </div>

        <div
          className="dashboard-container"
          style={{
            height: "75%",

            width: "100%",
            display: "flex",
            marginTop: "2%",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              boxShadow: "0px 2px 15px 0px rgba(0, 0, 0, 0.09)",
              borderRadius: "10px",
              justifyContent: "space-between",
              height: "92%",
              width: this.props.typeUser === "admin" ? "96%" : "74%",
              marginLeft: "2%",
              marginBlock: "2%",
              overflowY: "auto",
            }}
            className={styles["dashboard-graph"]}
          >
            {this.props.typeUser === "admin" ? (
              <div>
                <ProjectsList />
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginInline: "1vh",
                    height: "10%",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Traffic by country
                  </span>
                  <div style={{ height: "70%" }}>
                    <button className={styles["dashboard-graphDay"]}>
                      Day
                    </button>
                    <button className={styles["dashboard-graphWeek"]}>
                      Week
                    </button>
                    <button className={styles["dashboard-graphMonth"]}>
                      Month
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    marginInline: "2%",
                    height: "90%",
                  }}
                >
                  <Chart />
                </div>
                )
              </>
            )}
          </div>
          {this.props.typeUser === "admin" ? null : (
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "0px 2px 15px 0px rgba(0, 0, 0, 0.09)",
                borderRadius: "10px",
                justifyContent: "space-between",
                height: "92%",
                width: "20%",
                margin: "2%",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
              }}
              className={styles["dashboard-updates"]}
            >
              <span
                style={{
                  fontWeight: "bold",
                  marginLeft: "1vh",
                  marginTop: "2vh",
                }}
              >
                Updates
              </span>
              <div style={{ marginInline: "2%" }}>
                {/* {this.state.updates.map((update) => (
                <Update
                  key={update.id}
                  id={update.id}
                  title={update.title}
                  desc={update.desc}
                  date={update.date}
                  status={update.status}
                  priority={update.priority}
                  version={update.version}
                />
              ))} */}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
