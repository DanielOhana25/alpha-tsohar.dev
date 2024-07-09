import React, { Component } from "react";
import File from "./File";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import logo from "../imgs/mamane.tech.jpeg";
import "../Css/Icons.css";

class CreateProject extends React.Component {
  //Etat

  state = {
    fileNameToUpload: "",
    uploadedFiles: [],
    projects: JSON.parse(localStorage.getItem("projects")) || [], // Chargez les projects depuis le localStorage
  };

  //Comportements

  componentWillUnmount() {
    // Réinitialiser l'état selectedProject lors du démontage du composant
    this.props.setSelectedProject(null);
  }

  setProjectData = () => {
    const formattedDate = format(new Date(), "dd/MM/yy");
    const { projects } = this.state;
    const newProject = {
      id: projects.length > 0 ? projects[projects.length - 1].id + 1 : 1,
      name: document.getElementById("name-project").value,
      userEmail: document.getElementById("email-project").value,
      status: document.getElementById("status-project").value,
      desc: document.getElementById("desc-project").value,
      date: formattedDate,
    };
    // Stockez les données dans le localStorage
    const updatedProjects = [...this.state.projects, newProject];
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    this.setState({ projects: updatedProjects });
  };

  chosenFile = (event) => {
    this.setState({
      fileNameToUpload: event.target.files[0].name,
    });
  };

  uploadFile = () => {
    const { fileNameToUpload, uploadedFiles } = this.state;
    if (fileNameToUpload) {
      this.setState({
        uploadedFiles: [...uploadedFiles, fileNameToUpload],
        fileNameToUpload: "",
      });
    }
  };

  removeFile = (index) => {
    const updatedFiles = [...this.state.uploadedFiles];
    updatedFiles.splice(index, 1);
    this.setState({ uploadedFiles: updatedFiles });
  };

  render() {
    const selectedProject = this.props.selectedProject;
    const typeUser = this.props.typeUser;

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "100vh",
            width: "50%",
            flexDirection: "column",
            marginLeft: "5%",
            marginTop: "2%",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginLeft: " 1%",
            }}
          >
            {selectedProject ? (
              <>
                <label>Name :</label>
                <input
                  style={{
                    backgroundColor: "#f3f6f9",
                    border: "none",
                    borderRadius: "5px",
                    padding: "2%",
                    width: "70%",
                  }}
                  id="name-project"
                  value={selectedProject.name}
                  readOnly
                />
              </>
            ) : (
              <>
                <label>Name :</label>
                <input
                  //   className={styles["subject-anomaly"]}
                  style={{
                    backgroundColor: "#f3f6f9",
                    border: "none",
                    borderRadius: "5px",
                    padding: "2%",
                    width: "70%",
                  }}
                  id="name-project"
                />
              </>
            )}

            {selectedProject ? (
              <>
                {" "}
                <label>Email client :</label>
                <input
                  style={{
                    backgroundColor: "#f3f6f9",
                    border: "none",
                    borderRadius: "5px",
                    padding: "2%",
                    width: "70%",
                  }}
                  id="email-project"
                  type="email"
                  //readOnly
                />
              </>
            ) : (
              <>
                {" "}
                <label>Email Client :</label>
                <input
                  style={{
                    backgroundColor: "#f3f6f9",
                    border: "none",
                    borderRadius: "5px",
                    padding: "2%",
                    width: "70%",
                  }}
                  id="email-project"
                  type="email"
                />
              </>
            )}

            {selectedProject ? (
              <>
                {" "}
                <label>Statut :</label>
                <select
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#f3f6f9",
                    border: "none",
                    bordeRadius: "5px",
                    padding: "2%",
                    width: "70%",
                  }}
                  id="status-project"
                  value={selectedProject ? selectedProject.status : ""} // Utilisez la valeur du project sélectionné s'il existe
                  readOnly
                >
                  <option></option>
                  <option>Terminée</option>
                  <option>En cours</option>
                  <option>Prévu</option>
                  <option>Annulé</option>
                </select>
              </>
            ) : (
              <>
                {" "}
                <label>Statut :</label>
                <select
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#f3f6f9",
                    border: "none",
                    bordeRadius: "5px",
                    padding: "2%",
                    width: "70%",
                  }}
                  id="status-project"
                >
                  <option></option>
                  <option>Terminée</option>
                  <option>En cours</option>
                  <option>Prévu</option>
                  <option>Annulé</option>
                </select>
              </>
            )}
          </form>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "50%",
            marginTop: "2%",
          }}
        >
          {selectedProject ? (
            <>
              <label>Description :</label>
              <textarea
                style={{
                  height: " 30%",
                  border: "none",
                  backgroundColor: "#f3f6f9",
                  marginRight: "5%",
                  marginTop: "5%",
                  marginBottom: "2%",
                }}
                id="desc-project"
                value={selectedProject.desc}
                readOnly
              />
            </>
          ) : (
            <>
              <label>Description :</label>
              <textarea
                style={{
                  height: " 30%",
                  border: "none",
                  backgroundColor: "#f3f6f9",
                  marginRight: "5%",
                  marginTop: "5%",
                  marginBottom: "2%",
                }}
                id="desc-project"
              />
            </>
          )}
          {selectedProject ? (
            <>
              <label>files : </label>
              <div
                style={{
                  height: "10%",

                  border: "none",
                  backgroundColor: "#f3f6f9",
                  marginRight: "5%",
                  marginTop: "2%",
                  marginBottom: "5%",
                  overflowY: "auto",
                }}
              >
                <img
                  src={logo}
                  className="img-fluid"
                  alt="logo"
                  style={{
                    width: "18%",
                    height: "96%",
                    marginBlock: "2%",
                    marginInline: "2%",
                  }}
                />
                <img
                  src={logo}
                  className="img-fluid"
                  alt="logo"
                  style={{
                    width: "18%",
                    height: "96%",
                    marginBlock: "2%",
                    marginInline: "2%",
                  }}
                />
                <img
                  src={logo}
                  className="img-fluid"
                  alt="logo"
                  style={{
                    width: "18%",
                    height: "96%",
                    marginBlock: "2%",
                    marginInline: "2%",
                  }}
                />
                <img
                  src={logo}
                  className="img-fluid"
                  alt="logo"
                  style={{
                    width: "18%",
                    height: "96%",
                    marginBlock: "2%",
                    marginInline: "2%",
                  }}
                />
                <img
                  src={logo}
                  className="img-fluid"
                  alt="logo"
                  style={{
                    width: "18%",
                    height: "96%",
                    marginBlock: "2%",
                    marginInline: "2%",
                  }}
                />
                <img
                  src={logo}
                  className="img-fluid"
                  alt="logo"
                  style={{
                    width: "18%",
                    height: "96%",
                    marginBlock: "2%",
                    marginInline: "2%",
                  }}
                />
                <img
                  src={logo}
                  className="img-fluid"
                  alt="logo"
                  style={{
                    width: "18%",
                    height: "96%",
                    marginBlock: "2%",
                    marginInline: "2%",
                  }}
                />
                <img
                  src={logo}
                  className="img-fluid"
                  alt="logo"
                  style={{
                    width: "18%",
                    height: "96%",
                    marginBlock: "2%",
                    marginInline: "1%",
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <label>Upload files : </label>
              <div
                style={{
                  height: " 15%",
                  border: "none",
                  backgroundColor: "#f3f6f9",
                  marginRight: "5%",
                  marginTop: "2%",
                  marginBottom: " 5%",
                  overflowY: "auto",
                }}
              >
                {this.state.uploadedFiles.map((file, index) => (
                  <File
                    key={index}
                    fileName={file}
                    onRemove={() => this.removeFile(index)}
                  />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  height: "5%",
                  border: "none",
                  backgroundColor: "#f3f6f9",
                  alignItems: "center",
                  marginRight: "5%",
                  marginTop: "2%",
                  marginBottom: "5%",
                  overflow: "hidden",
                }}
              >
                <label
                  htmlFor="fileInput"
                  style={{
                    backgroundColor: "#cbd5e1",
                    border: "none",
                    borderRadius: "5px",
                    marginTop: "5%",
                    marginBottom: "5%",
                    marginLeft: "1%",
                    cursor: "pointer",
                  }}
                >
                  Browse
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{
                    opacity: " 0",
                    position: "absolute",
                    zIndex: "-1",
                  }}
                  multiple={false}
                  onChange={this.chosenFile}
                />
                <p
                  style={{
                    width: "80%",
                    fontSize: "small",
                    marginTop: "2%",
                    marginLeft: " 2%",
                  }}
                >
                  {this.state.fileNameToUpload}
                </p>
                <i
                  style={{ cursor: "pointer" }}
                  className="bi-cloud-upload"
                  onClick={this.uploadFile}
                ></i>
              </div>
            </>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginBottom: "3%",
              marginRight: "5%",
            }}
          >
            {selectedProject ? (
              <button
                style={{
                  borderRadius: "30px",
                  border: "1px solid #d4d2d5",
                  backgroundColor: "#f3f6f9",
                  marginRight: "2%",
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/projectsList"}
                >
                  Back
                </Link>
              </button>
            ) : (
              <button
                style={{
                  borderRadius: "30px",
                  border: "1px solid #d4d2d5",
                  backgroundColor: "#f3f6f9",
                  marginRight: "2%",
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/projectsList"}
                >
                  Cancel
                </Link>
              </button>
            )}
            {selectedProject ? null : (
              <>
                <button
                  style={{
                    borderRadius: "30px",
                    border: "none",
                    backgroundColor: "#48b2ff",
                    color: "white",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                  onClick={this.setProjectData}
                >
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={"/projectsList"}
                  >
                    {" "}
                    Save
                  </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProject;
