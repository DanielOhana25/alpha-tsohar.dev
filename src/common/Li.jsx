import React from "react";
import styles from "../Css/SlideBar.module.css";
import { Link } from "react-router-dom";

function Li({ iconClass, text, link }) {
  return (
    <Link style={{ textDecoration: "none" }} to={link}>
      <li
        className={styles.slideBarLi}
        style={{ color: "white", textDecoration: "none" }}
      >
        <i className={iconClass}></i>
        {text}
      </li>
    </Link>
  );
}

export default Li;
