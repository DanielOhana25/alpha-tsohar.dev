import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { BiCalendar } from "react-icons/bi";
import "@fontsource/poppins";

function Update(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      style={{
        height: expanded ? "auto" : "15%",
        display: "flex",
        marginBottom: "1%",
      }}
      onClick={expanded ? null : handleExpand}
    >
      {props.status === "completed" ? (
        <div
          style={{
            width: "0.5%",
            height: "100%",
            boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.09)",
            marginBlock: "2vh",

            backgroundColor: "#8BC34A",
            borderRadius: "30px 0 0 30px",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "0.5%",
            height: "100%",
            boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.09)",
            marginBlock: "2vh",

            backgroundColor: "#FF9800",
            borderRadius: "30px 0 0 30px",
          }}
        ></div>
      )}

      <div
        style={{
          width: "95%",
          height: "100%",
          boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.09)",
          marginBlock: "2vh",
          marginInRight: "2%",
          display: "flex",
          flexDirection: expanded ? "column" : "row",
          justifyContent: "space-between",
          alignItems: expanded ? null : "center",
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
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
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
              <button
                style={{
                  border: "none",
                  backgroundColor: "#F3F6F9",
                  borderRadius: "50%", //circle
                  width: "5vh",
                  height: "5vh",
                  marginRight: "1vh",
                  marginTop: "2vh",
                  padding: "0",
                }}
                onClick={handleExpand}
              >
                <SlArrowDown />
              </button>
            ) : null}
          </div>
          {expanded ? (
            <div style={{ wordWrap: "break-word", width: "80%" }}>
              {props.desc}
              <hr />
            </div>
          ) : (
            <p
              style={{
                border: "none",
                wordWrap: "break-word",
                width: "50vh",
              }}
              className="text-truncate"
            >
              {props.desc}
            </p>
          )}
        </div>

        <div style={{ display: "flex", gap: "2vh" }}>
          {props.priority === "low" ? (
            <div
              style={{
                borderRadius: "30px",
                border: "none",
                fontSize: "14px",
                backgroundColor: "#FDEBD0",
                color: "#FF9800",
                paddingInline: "8px",
                textAlign: "center",
                width: "100px",
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
                textAlign: "center",
                width: "100px",
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
                textAlign: "center",
                width: "100px",
              }}
            >
              {props.priority}
            </div>
          )}

          {expanded ? (
            <div
              style={{
                borderRadius: "30px",
                border: "none",
                fontSize: "14px",
                backgroundColor: "#e5e0eb",
                paddingInline: "8px",
                width: "140px",
              }}
            >
              <BiCalendar style={{ marginLeft: "0.5vh", marginRight: "2vh" }} />
              {props.date}
            </div>
          ) : null}
        </div>
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
        {expanded ? (
          <>
            <p style={{ fontWeight: "bold", marginTop: "2vh" }}>Comment :</p>
            <textarea
              style={{
                width: "100%",
                border: "1.5px solid #E5E0EB",
                borderRadius: "5px",
                marginBottom: "10px",
                height: "10vh",
                overflowY: "auto",
              }}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Update;
