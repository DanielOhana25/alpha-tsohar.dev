import React from "react";
import "@fontsource/poppins";

class Update extends React.Component {
  state = {
    bgPriority: "",
    colorPtiority: "",
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "1%",
            height: "10vh",
            boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.09)",
            marginBlock: "2vh",
            marginLeft: "2%",
            backgroundColor: "orange",
            borderRadius: "30px 0 0 30px",
          }}
        ></div>
        <div
          style={{
            width: "95%",
            height: "10vh",
            boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.09)",
            marginBlock: "2vh",
            marginInRight: "2%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: "5px",
            borderRadius: " 0 15px 15px 0",
            fontFamily: "Poppins",
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
              {this.props.title}
            </p>
            <p
              style={{
                border: "none",
                wordWrap: "break-word",
                width: "60vh",
              }}
            >
              {this.props.desc}
            </p>
          </div>

          {this.props.priority === "Low" ? (
            <div
              style={{
                borderRadius: "30px",
                border: "none",
                fontSize: "14px",
                backgroundColor: "#FDEBD0",
                color: "#FF9800",
                paddingInline: "8px",
              }}
            >
              {this.props.priority}
            </div>
          ) : (
            <div
              style={{
                borderRadius: "30px",
                border: "none",
                fontSize: "14px",

                paddingInline: "8px",
              }}
            >
              {this.props.priority}
            </div>
          )}

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
              Version : {this.props.version}
            </p>
            <p>{this.props.date}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Update;
