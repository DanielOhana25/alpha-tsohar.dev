import React from "react";
import { Link } from "react-router-dom";

export default function Project(props) {
  const styleTd = {
    border: "1px solid white",
    padding: "3px",
    paddingBlock: "5px",
    textAlign: "center",
  };
  const handleDeleteProject = () => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const updatedProjects = storedProjects.filter(
      (project) => project.id !== props.id
    );

    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };
  return (
    <tr>
      <td style={styleTd}>
        <input type="checkbox"></input>
      </td>
      <td style={styleTd}>{props.id}</td>
      <td style={styleTd}>{props.name}</td>
      <td style={styleTd}>{props.userEmail}</td>
      {/* 
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
      </td> */}

      <td style={styleTd}>{props.status}</td>
      <td style={styleTd}>{props.date}</td>
      <td style={styleTd}>
        <Link style={{ color: "black" }} to={"/createProject"}>
          <i
            className="bi bi-pencil-square"
            onClick={() => {
              props.setSelectedProject(props);
            }}
          ></i>
        </Link>

        {/* <Link style={{ color: "black" }} to={"/createTicket"}>
          <i
            className="bi bi-eye"
            onClick={() => {
              props.setSelectedTicket(props);
            }}
          ></i>
        </Link> */}
      </td>
      <td style={styleTd}>
        <i
          style={{ fontSize: "large" }}
          className="bi bi-trash3"
          onClick={handleDeleteProject}
        ></i>
      </td>
    </tr>
  );
}
