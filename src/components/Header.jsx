import React, { Component } from "react";
import "../Css/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="searchBar">
          <i className="bi bi-layers"></i>
          <input className="searchBarInput" placeholder="Project Name" />
          <i className="bi bi-chevron-down"></i>
        </div>
        <div className="company">
          <i className="bi bi-person-circle"></i>
          <p id="companyName">Company name</p>
        </div>
      </div>
    );
  }
}
export default Header;
