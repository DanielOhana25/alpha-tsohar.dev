import React from "react";

export default function HeaderProjectsList() {
  const styleTh = {
    backgroundColor: " #e5e0eb",
    border: "1px solid #e5e0eb",
    fontWeight: "bolder",
    // border: "1px solid white",
    padding: "3px",
    paddingBlock: "5px",
    textAlign: "center",
  };
  return (
    <thead
      style={{
        background: "#F3F6F9",
        fontSize: "medium",
      }}
    >
      <tr>
        <th style={styleTh}>
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
        <th style={styleTh}>ID</th>
        <th style={styleTh}>Name</th>
        <th style={styleTh}>Mail customer </th>
        <th style={styleTh}>Status</th>
        <th style={styleTh}>Date</th>
        <th style={styleTh}>Edit</th>
        <th style={styleTh}>
          <i style={{ fontSize: "large" }} className="bi bi-trash3"></i>
        </th>
      </tr>
    </thead>
  );
}
