import React from "react";
import { Link } from "react-router-dom";
import HeaderProjectsList from "./HeaderProjectsList";
import Project from "./Project";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { BiMenu } from "react-icons/bi";

class ProjectsList extends React.Component {
  //etat
  state = {
    projects: [],
  };
  //comportement
  componentDidMount = () => {
    // Chargez les données depuis le localStorage au montage du composant
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    this.setState({ projects: storedProjects });
    console.log("remise a 0");
  };

  updateProjects = (newProjects) => {
    this.setState({ projects: newProjects });
  };
  //affichage
  render() {
    return (
      <div>
        <div
          style={{
            height: "7%",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            backgroundColor: "white",
            display: " flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="addProject">
            <button
              style={{
                border: "none",
                borderRadius: "30px",
                backgroundColor: "#48b2ff",
                color: "white",
                fontFamily: " Arial, Helvetica, sans-serif",
                marginLeft: "1%",
                margin: "1vh",
              }}
            >
              <Link
                to={"/createProject"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Add Project
              </Link>
            </button>
          </div>
          {/* <div
            style={{
              display: "flex",
              gap: "3px",
              marginRight: "1%",
              alignItems: "center",
            }}
          > */}
          {/* <div>
            <CDropdown>
              <CDropdownToggle
                style={{
                  backgroundColor: "white",
                  color: "#000000",
                  border: "none",
                  padding: "0",
                  height: "25px",
                }}
                color="secondary"
              >
                <BiMenu style={{ fontSize: "25px" }} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem onClick={() => this.handleFilterChange("all")}>
                  All
                </CDropdownItem>
                <CDropdownItem onClick={() => this.handleFilterChange("low")}>
                  Low
                </CDropdownItem>
                <CDropdownItem
                  onClick={() => this.handleFilterChange("normal")}
                >
                  Normal
                </CDropdownItem>
                <CDropdownItem
                  onClick={() => this.handleFilterChange("immediate")}
                >
                  Immediate
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </div> */}
          {/* </div> */}
        </div>

        <div
          style={{
            marginInline: "10px",
          }}
        >
          <table
            style={{
              width: "100%",
              borderRadius: "10px",
              fontSize: "small",
              marginTop: "5px",
              height: "auto",
            }}
          >
            <HeaderProjectsList />

            <tbody>
              {/* {(() => {
              switch (this.state.filter) {
                case "all":
                  return this.state.projects.map((project) => (
                    <Project
                      key={project.id}
                      id={project.id}
                      name={project.name}
                      desc={project.desc}
                      date={project.date}
                      displayCreateProject={this.props.displayCreateProject}
                      setSelectedProject={this.props.setSelectedProject}
                    />
                  ));
                case "low":
                  return this.state.projects
                    .filter((project) => project.priority === "Low")
                    .map((project) => (
                      <Project
                        key={ticket.id}
                        id={ticket.id}
                        subject={ticket.subject}
                        category={ticket.category}
                        reproducibility={ticket.reproducibility}
                        severity={ticket.severity}
                        priority={ticket.priority}
                        profile={ticket.profile}
                        desc={ticket.desc}
                        date={ticket.date}
                        displayCreateTicket={this.props.displayCreateTicket}
                        setSelectedTicket={this.props.setSelectedTicket}
                      />
                    ));
                case "normal":
                  return this.state.tickets
                    .filter((ticket) => ticket.priority === "Normal")
                    .map((ticket) => (
                      <Ticket
                        key={ticket.id}
                        id={ticket.id}
                        subject={ticket.subject}
                        category={ticket.category}
                        reproducibility={ticket.reproducibility}
                        severity={ticket.severity}
                        priority={ticket.priority}
                        profile={ticket.profile}
                        desc={ticket.desc}
                        date={ticket.date}
                        displayCreateTicket={this.props.displayCreateTicket}
                        setSelectedTicket={this.props.setSelectedTicket}
                      />
                    ));
                case "immediate":
                  return this.state.tickets
                    .filter((ticket) => ticket.priority === "Immediate")
                    .map((ticket) => (
                      <Ticket
                        key={ticket.id}
                        id={ticket.id}
                        subject={ticket.subject}
                        category={ticket.category}
                        reproducibility={ticket.reproducibility}
                        severity={ticket.severity}
                        priority={ticket.priority}
                        profile={ticket.profile}
                        desc={ticket.desc}
                        date={ticket.date}
                        displayCreateTicket={this.props.displayCreateTicket}
                        setSelectedTicket={this.props.setSelectedTicket}
                      />
                    ));
                default:
                  return null;
              }
            })()} */}

              {this.state.projects.map((project) => (
                <Project
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  userEmail={project.userEmail}
                  desc={project.desc}
                  status={project.status}
                  date={project.date}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ProjectsList;
