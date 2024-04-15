import "./App.css";
import React, { Component } from "react";
import Slidebar from "./components/SlideBar";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Main from "./components/Main";
// import HeaderMain from "./components/HeaderMain";
import CreateTicket from "./components/CreateTicket";
import CreateProject from "./components/CreateProject";
import TicketsList from "./components/TicketsList";
import InvoicesList from "./components/InvoicesList";
import UpdatesList from "./components/UpdatesList";
import MyCalendar from "./components/MyCalendar";
import Dashboard from "./components/Dashboard";
import ProjectsList from "./components/ProjectsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/poppins";

class App extends React.Component {
  state = {
    selectedTicket: "", // État pour stocker les données du ticket sélectionné
    selectedProject: "", // État pour stocker les données du project sélectionné
    isAuthenticated: false, // verifie s'il peut acceder
    type: "user",
  };

  //Comportements

  setSelectedTicket = (ticket) => {
    this.setState({ selectedTicket: ticket }, () => {});
  };
  setSelectedProject = (project) => {
    this.setState({ selectedProject: project }, () => {
      alert("je suis une fonction ");
    });
  };

  // Fonction pour gérer l'authentification de l'utilisateur
  handleAuthentication = (isAuthenticated, type) => {
    if (isAuthenticated) {
      this.setState({ isAuthenticated: true, type: type });
      if (type === "admin") {
        alert("Vous êtes connecté en tant qu'administrateur !");
      } else {
        alert("Vous êtes connecté en tant qu'utilisateur.");
      }
    }
  };

  //Affichage

  render() {
    return (
      <div className="app" style={{ fontFamily: "Poppins" }}>
        <Router>
          {this.state.isAuthenticated ? (
            <>
              <div className="slideBar">
                <Slidebar typeUser={this.state.type} />
              </div>
              <div className="main-content">
                <Header typeUser={this.state.type} />
                <Main>
                  <Routes>
                    <Route
                      exact
                      path="/"
                      element={<Dashboard typeUser={this.state.type} />}
                    />
                    <Route
                      exact
                      path="/ticketsList"
                      element={
                        <TicketsList
                          // displayCreateTicket={this.displayCreateTicket}
                          setSelectedTicket={this.setSelectedTicket}
                        />
                      }
                    />
                    <Route
                      exact
                      path="/invoicesList"
                      element={<InvoicesList />}
                    />
                    <Route
                      exact
                      path="/updatesList"
                      element={<UpdatesList typeUser={this.state.type} />}
                    />
                    <Route exact path="/calendar" element={<MyCalendar />} />

                    <Route
                      exact
                      path="/createTicket"
                      element={
                        <CreateTicket
                          selectedTicket={this.state.selectedTicket}
                          setSelectedTicket={this.setSelectedTicket}
                          typeUser={this.state.type}
                        />
                      }
                    />
                    <Route
                      exact
                      path="/projectsList"
                      element={
                        <ProjectsList
                          // displayCreateProject={this.displayCreateProject}

                          setSelectedProject={this.setSelectedProject}
                        />
                      }
                    />
                    <Route
                      exact
                      path="/createProject"
                      element={
                        <CreateProject
                          selectedProject={this.state.selectedProject}
                          setSelectedProject={this.setSelectedProject}
                          typeUser={this.state.type}
                        />
                      }
                    />
                  </Routes>
                </Main>
              </div>
            </>
          ) : (
            <SignIn handleAuthentication={this.handleAuthentication} />
          )}
        </Router>
      </div>
    );
  }
}

export default App;
