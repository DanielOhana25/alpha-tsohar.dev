import React, { Component } from "react";
import HeaderTicketsList from "./HeaderTicketsList";
import Ticket from "./Ticket";
import styles from "../Css/TicketsList.module.css";

class TicketsList extends React.Component {
  state = {
    tickets: [],
  };

  componentDidMount = () => {
    // Chargez les données depuis le localStorage au montage du composant
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    this.setState({ tickets: storedTickets });
  };

  render() {
    return (
      <div className={styles["table-container"]}>
        <table className={styles["table-tickets"]}>
          <HeaderTicketsList />

          <tbody>
            {this.state.tickets.map((ticket) => (
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
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TicketsList;
