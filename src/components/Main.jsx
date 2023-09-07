import React, { Component } from "react";
import styles from "../Css/Main.module.css";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className={styles.main}>{this.props.children}</div>
      </div>
    );
  }
}
export default Main;
