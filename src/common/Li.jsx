import React from "react";
import styles from "../Css/SlideBar.module.css";

function Li({ iconClass, text }) {
  return (
    <li className={styles.slideBarLi}>
      <i className={iconClass}></i>
      {text}
    </li>
  );
}

export default Li;
