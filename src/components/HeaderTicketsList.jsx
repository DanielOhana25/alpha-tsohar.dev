import React from "react";

function HeaderTicketsList() {
  return (
    <thead style={({ background: "#F3F6F9" }, { fontSize: "medium" })}>
      <tr>
        <th></th>
        <th>Identify</th>
        <th>Subject</th>
        <th>Category</th>
        <th>Reproducibility</th>
        <th>Severity</th>
        <th>Priority</th>
        <th>Select a profile</th>
        <th>Status</th>
        <th>Date</th>
        <th>View</th>
      </tr>
    </thead>
  );
}
export default HeaderTicketsList;
