import React from "react";
import { Link } from "react-router-dom";

function Ticket(props) {
  return (
    <tr>
      <td>
        <input type="checkbox"></input>
      </td>
      <td>{props.id}</td>
      <td>{props.project}</td>
      <td>{props.subject}</td>
      <td>{props.category}</td>
      <td>{props.reproducibility}</td>
      <td>{props.severity}</td>
      <td>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor:
                props.priority === "Low"
                  ? "green"
                  : props.priority === "Normal"
                  ? "orange"
                  : "red",
            }}
          ></div>

          {props.priority}
        </div>
      </td>
      <td>{props.profile}</td>
      <td>{props.status}</td>
      <td>{props.date}</td>
      <td>
        <Link style={{ color: "black" }} to={"/createTicket"}>
          <i
            className="bi bi-eye"
            onClick={() => {
              props.setSelectedTicket(props);
            }}
          ></i>
        </Link>
      </td>
      {props.typeUser === "admin" ? (
        <td>
          <Link style={{ color: "black" }} to={"/createTicket"}>
            <i
              className="bi bi-pencil-square"
              onClick={() => {
                props.setSelectedTicket(props);
              }}
            ></i>
          </Link>
        </td>
      ) : null}
    </tr>
  );
}
export default Ticket;
