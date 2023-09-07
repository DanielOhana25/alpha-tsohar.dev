import React from "react";
import logo from "../imgs/mamane.tech.jpeg";
import styles from "../Css/SlideBar.module.css";
import Li from "../common/Li";

class Slidebar extends React.Component {
  render() {
    return (
      <div className={styles.slideBar}>
        <img src={logo} alt="logo" className={styles.logo} />

        <ul className={styles.slideBarUl}>
          <hr />
          <Li iconClass="bi bi-grid" text="Dashboard" />
          <Li iconClass="bi bi-ticket-perforated" text="Tickets" />
          <Li iconClass="bi bi-arrow-repeat" text="Updates" />
          <Li iconClass="bi bi-receipt-cutoff" text="Invoices" />
          <Li iconClass="bi bi-calendar-week" text="Calendar" />
          <Li iconClass="bi bi-chat-right-text" text="Message" />
          <div className={styles.lastLi}>
            <hr />
            <Li iconClass="bi bi-box-arrow-right" text="Sign Out" />
          </div>
        </ul>
      </div>
    );
  }
}
export default Slidebar;
