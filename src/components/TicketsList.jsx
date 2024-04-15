import React, { Component } from "react";
import HeaderTicketsList from "./HeaderTicketsList";
import Ticket from "./Ticket";
import styles from "../Css/TicketsList.module.css";
import { Link } from "react-router-dom";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { BiMenu } from "react-icons/bi";
import "../Css/Icons.css";

class TicketsList extends React.Component {
  state = {
    tickets: [],
    filter: "all", //par default
  };

  //Comportement

  componentDidMount = () => {
    // Chargez les données depuis le localStorage au montage du composant
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    this.setState({ tickets: storedTickets });
    console.log("remise a 0");
  };

  updateTickets = (newTickets) => {
    this.setState({ tickets: newTickets });
  };

  handleFilterChange = (filter) => {
    this.setState({ filter: filter });
    console.log("the state is " + filter);
  };

  //Affichage

  render() {
    return (
      <div style={{ height: "100%" }}>
        <div className={styles.headerMain}>
          <button className={styles.newTicketBtn}>
            <Link
              to={"/createTicket"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Assign new Ticket
            </Link>
          </button>
          <div className={styles.share}>
            <div className={styles.urgencyLevelBtn}>
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

              {/* <button>All</button>
              <button className={styles["level-minor"]}>Low</button>
              <button className={styles["level-normal"]}>Normal</button>
              <button className={styles["level-urgent"]}>Immediate</button> */}
            </div>
            {/* <button className={styles.excelBtn}>Export</button>
            <button className={styles.printBtn}>
              <i className="bi bi-printer-fill"></i>
            </button> */}
          </div>
        </div>

        <div className={styles["table-container"]}>
          <table className={styles["table-tickets"]}>
            <HeaderTicketsList />

            <tbody>
              {(() => {
                switch (this.state.filter) {
                  case "all":
                    return this.state.tickets.map((ticket) => (
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
                        // displayCreateTicket={this.props.displayCreateTicket}
                        setSelectedTicket={this.props.setSelectedTicket}
                      />
                    ));
                  case "low":
                    return this.state.tickets
                      .filter((ticket) => ticket.priority === "Low")
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
              })()}

              {/* {this.state.tickets.map((ticket) => (
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
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default TicketsList;
