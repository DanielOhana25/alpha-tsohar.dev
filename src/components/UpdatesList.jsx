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
        desc: "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
        date: "04/09/2022",
        status: "En cours",
        priority: "Low",
        version: "2.0",
      },
      {
        id: 2,
        title: "Completed",
        desc: "test1",
        date: "04/09/2022",
        status: "En cours",
        priority: "Immediate",
        version: "2.0",
      },
      {
        id: 3,
        title: "Completed",
        desc: "test1",
        date: "04/09/2022",
        status: "En cours",
        priority: "Normal",
        version: "2.0",
      },
      {
        id: 4,
        title: "Completed",
        desc: "test1",
        date: "04/09/2022",
        status: "En cours",
        priority: "Low",
        version: "2.0",
      },
      {
        id: 5,
        title: "Completed",
        desc: "test1",
        date: "04/09/2022",
        status: "En cours",
        priority: "Low",
        version: "2.0",
      },
      {
        id: 6,
        title: "Completed",
        desc: "test1",
        date: "04/09/2022",
        status: "En cours",
        priority: "Low",
        version: "2.0",
      },
      {
        id: 7,
        title: "Completed",
        desc: "test1",
        date: "04/09/2022",
        status: "En cours",
        priority: "Low",
        version: "2.0",
      },
      {
        id: 8,
        title: "Completed",
        desc: "test1",
        date: "04/09/2022",
        status: "En cours",
        priority: "Low",
        version: "2.0",
      },
      {
        id: 9,
        title: "Completed",
        desc: "test1",
        date: "04/09/2022",
        status: "En cours",
        priority: "Low",
        version: "2.0",
      },
      {
        id: 10,
        title: "Completed",
        desc: "test1",
        date: "04/09/2022",
        status: "En cours",
        priority: "Low",
        version: "2.0",
      },
      {
        id: 11,
        title: "Completed",
        desc: "test1",
        date: "04/09/2022",
        status: "En cours",
        priority: "Low",
        version: "2.0",
      },
      {
        id: 12,
        title: "Completed",
        desc: "test1",
        date: "04/09/2022",
        status: "En cours",
        priority: "Low",
        version: "2.0",
      },
      {
        id: 13,
        title: "Completed",
        desc: "test1",
        date: "04/09/2022",
        status: "En cours",
        priority: "Low",
        version: "2.0",
      },
      {
        id: 14,
        title: "Completed",
        desc: "test1",
        date: "04/09/2022",
        status: "En cours",
        priority: "Low",
        version: "2.0",
      },
    ],
    filter: "All",
  };
  render() {
    return (
      <div>
        <div className={styles.header} style={{ fontFamily: "Poppins" }}>
          <div className={styles["updates-type"]}>
            <button className={styles["updates-all"]}>All</button>
            <button className={styles["updates-in-progress"]}>
              Update in progress
            </button>
            <button className={styles["updates-completed"]}>
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
            {this.state.updates.map((update) => (
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
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default UpdatesList;
