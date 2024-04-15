import React, { Component } from "react";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { Link } from "react-router-dom";
import "../Css/Header.css";

class Header extends React.Component {
  state = {
    setting: false,
  };
  displaySetting = () => {
    this.setState({ setting: !this.state.setting });
  };
  render() {
    const typeUser = this.props.typeUser;
    return (
      <div className="header">
        {typeUser === "admin" ? (
          <>
            <div className="searchBar">
              <i className="bi bi-layers"></i>
              <input className="searchBarInput" placeholder="Project Name" />
              <i className="bi bi-chevron-down"></i>
            </div>
          </>
        ) : null}

        <div
          className={typeUser === "admin" ? "company" : "companyRight"}
          style={{
            marginRight: "2vh",
            cursor: "pointer",
            paddingInline: "1vh",
            borderRadius: "10px",
            fontSize: "12px",
          }}
          onClick={this.displaySetting}
        >
          <i className="bi bi-person-circle"></i>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Company name</span>
            <span>Protractor</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
