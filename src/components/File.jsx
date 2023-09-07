import React from "react";

class File extends React.Component {
  constructor(fileName, onRemove) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px",
          backgroundColor: "#ECEEF7",
          alignItems: "center",
        }}
        className="file"
      >
        <div className="fileName">
          <p
            style={{
              fontSize: "small",
              overflow: "hidden",
              marginTop: "5px",
            }}
          >
            {this.props.fileName}
          </p>
        </div>
        <div style={{ display: "flex" }} className="icons">
          <i
            style={{ fontSize: "large", marginInline: "10px" }}
            className="bi bi-eye"
          ></i>

          <i
            style={{ color: "red", fontSize: "large" }}
            className="bi bi-trash3"
            onClick={this.props.onRemove}
          ></i>
        </div>
      </div>
    );
  }
}

export default File;
