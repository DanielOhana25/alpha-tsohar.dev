import React from "react";
import DateSelector from "./DateSelector";
import { RiFileExcel2Line } from "react-icons/ri";
import { BiSolidPrinter } from "react-icons/bi";
import styles from "../Css/InvoicesList.module.css";
import Invoice from "./Invoice";

class InvoicesList extends React.Component {
  state = {
    invoices: [
      {
        amount: 4500.0,
        date: "09 Aug,23",
        id: 1,
        payed: true,
      },
      {
        amount: 5400.0,
        date: "09 Aug,23",
        id: 2,
        payed: true,
      },
      {
        amount: 5400.0,
        date: "09 Aug,23",
        id: 3,
        payed: true,
      },
      {
        amount: 600.0,
        date: "09 Aug,23",
        id: 4,
        payed: false,
      },
      {
        amount: 600.0,
        date: "09 Aug,23",
        id: 5,
        payed: false,
      },
      {
        amount: 600.0,
        date: "09 Aug,23",
        id: 6,
        payed: true,
      },
      {
        amount: 600.0,
        date: "09 Aug,23",
        id: 7,
        payed: false,
      },
      {
        amount: 600.0,
        date: "09 Aug,23",
        id: 8,
        payed: true,
      },
    ],
    filter: "All", //which invoices to display ?
    disabled: true, //print & export Excel btns
  };

  filterAll = () => {
    this.setState({
      filter: "All",
      disabled: true,
    });
  };

  filterOready = () => {
    this.setState({
      filter: "Oready",
      disabled: true,
    });
  };

  filterReady = () => {
    this.setState({
      filter: "Ready",
      disabled: false,
    });
  };

  render() {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles["invoices-type"]}>
            <button onClick={this.filterAll} className={styles["invoices-all"]}>
              All
            </button>
            <button
              onClick={this.filterOready}
              className={styles["invoices-oready"]}
            >
              Invoices is oready
            </button>
            <button
              onClick={this.filterReady}
              className={styles["invoices-ready"]}
            >
              Invoices is ready
            </button>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div>
              <DateSelector />
            </div>

            <button className={styles.excel} disabled={this.state.disabled}>
              Export <RiFileExcel2Line style={{ fontSize: "30px" }} />
            </button>

            <button className={styles.print} disabled={this.state.disabled}>
              {" "}
              <BiSolidPrinter style={{ fontSize: "30px" }} />
            </button>
          </div>
        </div>
        <div className={styles.container}>
          <div
            className={styles.invoices}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            {(() => {
              switch (this.state.filter) {
                case "All":
                  return this.state.invoices.map((invoice) => (
                    <Invoice
                      key={invoice.id}
                      id={invoice.id}
                      amount={invoice.amount}
                      date={invoice.date}
                      payed={invoice.payed}
                    />
                  ));
                case "Oready":
                  return this.state.invoices
                    .filter((invoice) => !invoice.payed)
                    .map((invoice) => (
                      <Invoice
                        key={invoice.id}
                        id={invoice.id}
                        amount={invoice.amount}
                        date={invoice.date}
                        payed={invoice.payed}
                      />
                    ));
                case "Ready":
                  return this.state.invoices
                    .filter((invoice) => invoice.payed)
                    .map((invoice) => (
                      <Invoice
                        key={invoice.id}
                        id={invoice.id}
                        amount={invoice.amount}
                        date={invoice.date}
                        payed={invoice.payed}
                      />
                    ));
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}

export default InvoicesList;
