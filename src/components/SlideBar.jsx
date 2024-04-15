import React from "react";
import logo from "../imgs/mamane.tech.jpeg";
import styles from "../Css/SlideBar.module.css";
import Li from "../common/Li";
import "@fontsource/poppins";

class Slidebar extends React.Component {
  render() {
    return (
      <div className={styles.slideBar} style={{ fontFamily: "Poppins" }}>
        <img src={logo} alt="logo" className={styles.logo} />

        <ul className={styles.slideBarUl}>
          <hr />
          <Li iconClass="bi bi-grid" text="Dashboard" link="/" />
          <Li
            iconClass="bi bi-ticket-perforated"
            text="Tickets"
            link="/ticketsList"
          />
          <Li
            iconClass="bi bi-arrow-repeat"
            text="Updates"
            link="/updatesList"
          />
          <Li
            iconClass="bi bi-receipt-cutoff"
            text="Invoices"
            link="/invoicesList"
          />
          <Li
            iconClass="bi bi-calendar-week"
            text="Calendar"
            link="/calendar"
          />
          {/* {this.props.typeUser === "admin" ? (
            <Li
              iconClass="bi bi-layers-fill"
              text="Projects"
              link="/projectsList"
            />
          ) : null} */}

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
