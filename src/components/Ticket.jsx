import React from "react";

function Ticket(props) {
  return (
    <tr>
      <td></td>
      <td>{props.id}</td>
      <td>{props.subject}</td>
      <td>{props.category}</td>
      <td>{props.reproducibility}</td>
      <td>{props.severity}</td>
      <td>{props.priority}</td>
      <td>{props.profile}</td>
      <td>{props.status}</td>
      <td>{props.date}</td>
      <td>
        <i
          className="bi bi-eye"
          onClick={() => {
            props.setSelectedTicket(props);
            props.displayCreateTicket();
          }}
        ></i>
      </td>
    </tr>
  );
}
export default Ticket;
