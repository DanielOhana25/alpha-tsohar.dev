import React, { Component } from "react";
import styles from "../Css/CreateTicket.module.css";
import File from "./File";
import { format } from "date-fns";
import "../Css/Icons.css";

class CreateTicket extends React.Component {
  state = {
    fileNameToUpload: "",
    uploadedFiles: [],
    tickets: JSON.parse(localStorage.getItem("tickets")) || [], // Chargez les tickets depuis le localStorage
  };

  setTicketData = () => {
    const formattedDate = format(new Date(), "dd/MM/yy");
    const newTicket = {
      id:
        this.state.tickets.length > 0
          ? this.state.tickets[this.state.tickets.length - 1].id + 1
          : 1, // Auto-incrémentez l'ID,
      subject: document.getElementById("subject-anomaly").value,
      category: document.getElementById("category-anomaly").value,
      reproducibility: document.getElementById("reproducibility-anomaly").value,
      severity: document.getElementById("severity-anomaly").value,
      priority: document.getElementById("priority-anomaly").value,
      profile: document.getElementById("profile-anomaly").value,
      desc: document.getElementById("desc-anomaly").value,
      date: formattedDate,
    };
    // Stockez les données dans le localStorage
    const updatedTickets = [...this.state.tickets, newTicket];

    this.setState(
      {
        tickets: updatedTickets,
      },
      () => {
        // Stockez les données de tous les tickets dans le localStorage
        localStorage.setItem("tickets", JSON.stringify(updatedTickets));

        // Appelez la méthode pour afficher la liste des tickets
        this.props.displayTicketsList();
      }
    );
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
    const selectedTicket = this.props.selectedTicket;
    return (
      <div className={styles.anomaly}>
        <div className={styles["anomaly-details"]}>
          <form className={styles.anomalyForm}>
            {selectedTicket ? (
              <>
                <label>Subject :</label>
                <input
                  className={styles["subject-anomaly"]}
                  id="subject-anomaly"
                  value={selectedTicket.subject}
                  readOnly
                />
              </>
            ) : (
              <>
                <label>Subject :</label>
                <input
                  className={styles["subject-anomaly"]}
                  id="subject-anomaly"
                />
              </>
            )}

            {selectedTicket ? (
              <>
                {" "}
                <label>Category :</label>
                <select
                  className={styles.categoryOptions}
                  id="category-anomaly"
                  value={selectedTicket ? selectedTicket.category : ""} // Utilisez la valeur du ticket sélectionné s'il existe
                  readOnly
                >
                  <option></option>
                  <option>Improvement</option>
                  <option>Internal</option>
                  <option>Bug</option>
                  <option>Security</option>
                </select>
              </>
            ) : (
              <>
                {" "}
                <label>Category :</label>
                <select
                  className={styles.categoryOptions}
                  id="category-anomaly"
                >
                  <option></option>
                  <option>Improvement</option>
                  <option>Internal</option>
                  <option>Bug</option>
                  <option>Security</option>
                </select>
              </>
            )}

            {selectedTicket ? (
              <>
                <label>Reproducibility : </label>
                <select
                  className={styles.reproducibilityOptions}
                  id="reproducibility-anomaly"
                  value={selectedTicket.reproducibility}
                  readOnly
                >
                  <option></option>
                  <option>Always</option>
                  <option>A few times</option>
                  <option>Random</option>
                  <option>Not tried</option>
                  <option>Impossibke to reproduce</option>
                  <option>Not applicable</option>
                </select>
              </>
            ) : (
              <>
                <label>Reproducibility : </label>
                <select
                  className={styles.reproducibilityOptions}
                  id="reproducibility-anomaly"
                >
                  <option></option>
                  <option>Always</option>
                  <option>A few times</option>
                  <option>Random</option>
                  <option>Not tried</option>
                  <option>Impossibke to reproduce</option>
                  <option>Not applicable</option>
                </select>
              </>
            )}

            {selectedTicket ? (
              <>
                <label>Severity :</label>
                <select
                  className={styles.severityOptions}
                  id="severity-anomaly"
                  value={selectedTicket.severity}
                  readOnly
                >
                  <option></option>
                  <option>Functionality</option>
                  <option>Simple</option>
                  <option>Text</option>
                  <option>Cosmetic</option>
                  <option>Minor</option>
                  <option>Major</option>
                  <option>Critical</option>
                  <option>Blocking</option>
                </select>
              </>
            ) : (
              <>
                <label>Severity :</label>
                <select
                  className={styles.severityOptions}
                  id="severity-anomaly"
                >
                  <option></option>
                  <option>Functionality</option>
                  <option>Simple</option>
                  <option>Text</option>
                  <option>Cosmetic</option>
                  <option>Minor</option>
                  <option>Major</option>
                  <option>Critical</option>
                  <option>Blocking</option>
                </select>
              </>
            )}

            {selectedTicket ? (
              <>
                <label>Priority : </label>
                <select
                  className={styles.priorityOptions}
                  id="priority-anomaly"
                  value={selectedTicket.priority}
                  readOnly
                >
                  <option></option>
                  <option>Low</option>
                  <option>Normal</option>
                  <option>High</option>
                  <option>Urgent</option>
                  <option>Immediate</option>
                </select>
              </>
            ) : (
              <>
                <label>Priority : </label>
                <select
                  className={styles.priorityOptions}
                  id="priority-anomaly"
                >
                  <option></option>
                  <option>Low</option>
                  <option>Normal</option>
                  <option>High</option>
                  <option>Urgent</option>
                  <option>Immediate</option>
                </select>
              </>
            )}

            {selectedTicket ? (
              <>
                <label>Select a profile</label>
                <select
                  className={styles.profileOptions}
                  id="profile-anomaly"
                  value={selectedTicket.profile}
                  readOnly
                >
                  <option></option>
                  <option>Chrome Android10</option>
                  <option>Chrome windows10</option>
                  <option>Edge Windows 10</option>
                  <option>Firefox Windows10</option>
                  <option>Safari macOS 10.12</option>
                  <option>Safari on Iphone IOS 13</option>
                </select>
              </>
            ) : (
              <>
                <label>Select a profile</label>
                <select className={styles.profileOptions} id="profile-anomaly">
                  <option></option>
                  <option>Chrome Android10</option>
                  <option>Chrome windows10</option>
                  <option>Edge Windows 10</option>
                  <option>Firefox Windows10</option>
                  <option>Safari macOS 10.12</option>
                  <option>Safari on Iphone IOS 13</option>
                </select>
              </>
            )}
          </form>
        </div>
        <div className={styles["anomaly-content"]}>
          {selectedTicket ? (
            <>
              <label>Description :</label>
              <textarea
                className={styles.descAnomalyInput}
                id="desc-anomaly"
                value={selectedTicket.desc}
                readOnly
              />
            </>
          ) : (
            <>
              <label>Description :</label>
              <textarea className={styles.descAnomalyInput} id="desc-anomaly" />
            </>
          )}
          {selectedTicket ? (
            <>
              <label>files : </label>
              <div className={styles["files-displaying"]}></div>
            </>
          ) : (
            <>
              <label>Upload files : </label>
              <div className={styles.filesAnomaly}>
                {this.state.uploadedFiles.map((file, index) => (
                  <File
                    key={index}
                    fileName={file}
                    onRemove={() => this.removeFile(index)}
                  />
                ))}
              </div>
              <div className={styles.browseFilesAnomaly}>
                <label htmlFor="fileInput" className={styles.browseAnomalyBtn}>
                  Browse
                </label>
                <input
                  type="file"
                  id="fileInput"
                  className={styles.browseAnomalyInput}
                  multiple={false}
                  onChange={this.chosenFile}
                />
                <p className={styles.imgNameBrowseAnomaly}>
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

          <div className={styles.submitAnomalyBtn}>
            <button
              className={styles.anomalyCancelBtn}
              onClick={this.props.displayTicketsList}
            >
              Cancel
            </button>

            {selectedTicket ? null : (
              <>
                <button
                  className={styles.anomalySaveBtn}
                  onClick={this.setTicketData}
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTicket;
