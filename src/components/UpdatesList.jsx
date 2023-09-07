import React, { Component } from "react";
import DateSelector from "./DateSelector";
import Update from "./Update";
import styles from "../Css/UpdatesList.module.css";
import "@fontsource/poppins";

export class UpdatesList extends Component {
  state = {
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
        date: "04/09/2022",
        status: "in progress",
        priority: "low",
        version: "2.0",
      },
      {
        id: 7,
        title: "Completed",
        summary: "test1",
        desc: "ceci est une tres longue desc loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ",
        date: "04/09/2022",
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
    filter: "all",
  };

  filterAll = () => {
    this.setState({
      filter: "all",
    });
  };

  filterInProgress = () => {
    this.setState({
      filter: "in-progress",
    });
  };

  filterCompleted = () => {
    this.setState({
      filter: "completed",
    });
  };

  render() {
    return (
      <div>
        <div className={styles.header} style={{ fontFamily: "Poppins" }}>
          <div className={styles["updates-type"]}>
            <button className={styles["updates-all"]} onClick={this.filterAll}>
              All
            </button>
            <button
              className={styles["updates-in-progress"]}
              onClick={this.filterInProgress}
            >
              Update in progress
            </button>
            <button
              className={styles["updates-completed"]}
              onClick={this.filterCompleted}
            >
              Update Completed
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <DateSelector />
            </div>
            <div style={{ marginInline: "5px" }}>
              <button className={styles["updates-daily"]}>Daily</button>
              <button className={styles["updates-weekly"]}>Weekly</button>
              <button className={styles["updates-yearly"]}>Yearly</button>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div
            className={styles.updates}
            style={{
              display: "flex",
              flexDirection: "column",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            {(() => {
              switch (this.state.filter) {
                case "all":
                  return this.state.updates.map((update) => (
                    <Update
                      key={update.id}
                      id={update.id}
                      title={update.title}
                      summary={update.summary}
                      desc={update.desc}
                      date={update.date}
                      status={update.status}
                      priority={update.priority}
                      version={update.version}
                    />
                  ));
                case "in-progress":
                  return this.state.updates
                    .filter((update) => update.status === "in progress")
                    .map((update) => (
                      <Update
                        key={update.id}
                        id={update.id}
                        title={update.title}
                        summary={update.summary}
                        date={update.date}
                        status={update.status}
                        priority={update.priority}
                        version={update.version}
                      />
                    ));
                case "completed":
                  return this.state.updates
                    .filter((update) => update.status === "completed")
                    .map((update) => (
                      <Update
                        key={update.id}
                        id={update.id}
                        title={update.title}
                        summary={update.summary}
                        date={update.date}
                        status={update.status}
                        priority={update.priority}
                        version={update.version}
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

export default UpdatesList;
