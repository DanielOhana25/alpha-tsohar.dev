import React from "react";

function HeaderTicketsList(props) {
  return (
    <thead
      style={{
        background: "#F3F6F9",
        fontSize: "medium",
      }}
    >
      <tr>
        <th>
          <div
            style={{
              borderRadius: "5px",
              border: "1px solid var(--Black, #333)",
              backgroundColor: "#F3F6F9",
              boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.07)",
              height: "16px",
              width: "16px",
            }}
          ></div>
        </th>
        <th>Identify</th>
        <th>Project</th>
        <th>Subject</th>
        <th>Category</th>
        <th>Reproducibility</th>
        <th>Severity</th>
        <th>Priority</th>
        <th>Select a profile</th>
        <th>Status</th>
        <th>Date</th>
        <th>View</th>
        {props.typeUser === "admin" ? <th>Edit</th> : null}
      </tr>
    </thead>
  );
}
export default HeaderTicketsList;
