import React, { useState } from "react";
import "@fontsource/poppins";

function Update(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div style={{ display: "flex" }} onClick={handleExpand}>
      {props.status === "completed" ? (
        <div
          style={{
            width: "1%",
            height: expanded ? "auto" : "10vh",
            boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.09)",
            marginBlock: "2vh",
            marginLeft: "2%",
            backgroundColor: "#8BC34A",
            borderRadius: "30px 0 0 30px",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "1%",
            height: expanded ? "auto" : "10vh",
            boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.09)",
            marginBlock: "2vh",
            marginLeft: "2%",
            backgroundColor: "#FF9800",
            borderRadius: "30px 0 0 30px",
          }}
        ></div>
      )}

      <div
        style={{
          width: "95%",
          height: expanded ? "auto" : "10vh",
          boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.09)",
          marginBlock: "2vh",
          marginInRight: "2%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: "5px",
          borderRadius: " 0 15px 15px 0",
          fontFamily: "Poppins",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              marginTop: "0.5vh",
              marginBottom: "0.5vh",
            }}
          >
            {props.title}
          </p>
          {expanded ? (
            <div style={{ wordWrap: "break-word", width: "80vh" }}>
              {props.desc}
            </div>
          ) : (
            <p
              style={{
                border: "none",
                wordWrap: "break-word",
                width: "80vh",
              }}
            >
              {props.summary}
            </p>
          )}
        </div>

        {props.priority === "low" ? (
          <div
            style={{
              borderRadius: "30px",
              border: "none",
              fontSize: "14px",
              backgroundColor: "#FDEBD0",
              color: "#FF9800",
              paddingInline: "8px",
              flexDirection: expanded ? "column" : "flex",
            }}
          >
            {props.priority}
          </div>
        ) : props.priority === "normal" ? (
          <div
            style={{
              borderRadius: "30px",
              border: "none",
              fontSize: "14px",
              backgroundColor: "#D6EAF8",
              color: "#3498DB",
              paddingInline: "8px",
            }}
          >
            {props.priority}
          </div>
        ) : (
          <div
            style={{
              borderRadius: "30px",
              border: "none",
              fontSize: "14px",
              backgroundColor: "#D4EFDF",
              color: "#8BC34A",
              paddingInline: "8px",
            }}
          >
            {props.priority}
          </div>
        )}

        {expanded ? null : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ fontWeight: "bold", marginTop: "2vh" }}>
              {" "}
              Version : {props.version}
            </p>
            <p>{props.date}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Update;
