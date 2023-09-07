import "./App.css";
import React, { Component } from "react";
import Slidebar from "./components/SlideBar";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Main from "./components/Main";
import HeaderMain from "./components/HeaderMain";
import CreateTicket from "./components/CreateTicket";
import TicketsList from "./components/TicketsList";
import InvoicesList from "./components/InvoicesList";
import UpdatesList from "./components/UpdatesList";

class App extends React.Component {
  state = {
    headerMain: false,
    createTicket: false,
    ticketsList: false,
    selectedTicket: "", // État pour stocker les données du ticket sélectionné
    invoicesList: false,
    updatesList: true,
  };

  displayCreateTicket = () => {
    this.setState({
      createTicket: !this.state.createTicket,
      headerMain: !this.state.headerMain,
    });
  };

  displayTicketsList = () => {
    this.setState({
      headerMain: !this.state.headerMain,
      ticketsList: this.state.ticketsList,
      createTicket: !this.state.createTicket,
    });
  };

  setSelectedTicket = (ticket) => {
    this.setState({ selectedTicket: ticket }, () => {});
  };

  displayInvoicesList = () => {
    this.setState({
      invoicesList: !this.state.invoicesList,
    });
  };

  render() {
    return (
      <div>
        <div className="app">
          {/* <SignIn /> */}
          <div className="slideBar">
            <Slidebar
              stateApp={this.state}
              displayCalendar={this.displayCalendar}
            />
          </div>
          <div className="main-content">
            <Header />
            <Main>
              {this.state.headerMain ? (
                <HeaderMain displayCreateTicket={this.displayCreateTicket} />
              ) : null}

              {this.state.createTicket ? (
                <CreateTicket
                  displayTicketsList={this.displayTicketsList}
                  selectedTicket={this.state.selectedTicket}
                />
              ) : null}

              {this.state.ticketsList ? (
                <TicketsList
                  displayCreateTicket={this.displayCreateTicket}
                  setSelectedTicket={this.setSelectedTicket}
                />
              ) : null}

              {this.state.invoicesList ? <InvoicesList /> : null}
              {this.state.updatesList ? <UpdatesList /> : null}
            </Main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
