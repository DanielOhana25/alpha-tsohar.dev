import React, { Component } from "react";
import styles from "../Css/HeaderMain.module.css";
import "../Css/Icons.css";

class HeaderMain extends React.Component {
  render() {
    return (
      <div className={styles.headerMain}>
        <button
          className={styles.newTicketBtn}
          onClick={() => {
            this.props.displayCreateTicket();
          }}
        >
          Assign new Ticket
        </button>
        <div className={styles.share}>
          <div className={styles.urgencyLevelBtn}>
            <button className={styles["level-minor"]}>Minor</button>
            <button className={styles["level-normal"]}>Normal</button>
            <button className={styles["level-urgent"]}>Urgent</button>
          </div>
          <button className={styles.excelBtn}>Export</button>
          <button className={styles.printBtn}>
            <i className="bi bi-printer-fill"></i>
          </button>
        </div>
      </div>
    );
  }
}
export default HeaderMain;
