import React, { useState, useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "@fontsource/poppins";
import Modal from "react-bootstrap/Modal";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const localizer = momentLocalizer(moment);

// Composant personnalisé pour la barre de navigation
const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate("PREV");
  };

  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };
  const goToMonth = () => {
    // Pour basculer vers la vue mensuelle
    toolbar.onView("month");
  };

  return (
    <div className="rbc-toolbar" style={{ display: "flex" }}>
      <span className="rbc-btn-group">
        <button
          style={{
            border: "1px solid #2196F3",
            boxShadow: " 0px 0px 8px 0px #0000001A",
          }}
          type="button"
          onClick={goToBack}
        >
          <MdKeyboardArrowLeft style={{ color: "#2196F3" }} />
        </button>
        <span className="rbc-toolbar-label">{toolbar.label}</span>
        <button
          style={{
            border: "1px solid #2196F3",
            boxShadow: " 0px 0px 8px 0px #0000001A",
          }}
          type="button"
          onClick={goToNext}
        >
          <MdKeyboardArrowRight style={{ color: "#2196F3" }} />
        </button>
      </span>
      <button type="button" onClick={goToMonth} style={{ marginLeft: "auto" }}>
        Month
      </button>
    </div>
  );
};

function MyCalendar() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const events = [
    {
      title: "Tâche 1",
      type: "Maintenance",
      start: new Date(2023, 8, 10, 9, 0), // Date de début avec heure (9h00)
      end: new Date(2023, 8, 10, 12, 0), // Date de fin avec heure (12h00)
    },
    {
      title: "Tâche 2",
      type: "Update",
      start: new Date(2023, 8, 10, 9, 0), // Date de début avec heure (9h00)
      end: new Date(2023, 8, 10, 12, 0), // Date de fin avec heure (12h00)
    },
    {
      title: "Tâche 6",
      type: "Update",
      start: new Date(2023, 8, 10, 15, 0), // Date de début avec heure (9h00)
      end: new Date(2023, 8, 10, 17, 0), // Date de fin avec heure (12h00)
    },
    {
      title: "Tâche 3",
      type: "Meeting",
      start: new Date(2023, 8, 16, 7, 0), // Date de début avec heure (9h00)
      end: new Date(2023, 8, 17, 12, 0), // Date de fin avec heure (12h00)
    },
    {
      title: "Tâche 4",
      type: "Meeting",
      start: new Date(2023, 8, 10, 9, 0), // Date de début avec heure (9h00)
      end: new Date(2023, 8, 13, 16, 0), // Date de fin avec heure (12h00)
    },
    {
      title: "Tâche 5",
      type: "Meeting",
      start: new Date(2023, 8, 10, 9, 0), // Date de début avec heure (9h00)
      end: new Date(2023, 8, 10, 12, 0), // Date de fin avec heure (12h00)
    },
    {
      title: "Tâche TEST ",
      type: "Meeting",
      start: new Date(2023, 8, 10, 9, 0), // Date de début avec heure (9h00)
      end: new Date(2023, 8, 13, 16, 0), // Date de fin avec heure (12h00)
    },
    {
      title: "Tâche TEST 2 ",
      type: "Meeting",
      start: new Date(2023, 8, 10, 9, 0), // Date de début avec heure (9h00)
      end: new Date(2023, 8, 13, 16, 0), // Date de fin avec heure (12h00)
    },
    {
      title: "Tâche TEST 3 ",
      type: "Meeting",
      start: new Date(2023, 8, 11, 9, 0), // Date de début avec heure (9h00)
      end: new Date(2023, 8, 13, 16, 0), // Date de fin avec heure (12h00)
    },
  ];

  const handleEventBg = (event) => {
    if (event.type === "Maintenance") {
      return {
        style: {
          backgroundColor: "#2196F366",
          color: "black",
        },
      };
    } else if (event.type === "Meeting") {
      return {
        style: {
          backgroundColor: "#DBEFB9",
          color: "black",
        },
      };
    } else {
      return {
        style: {
          backgroundColor: "#FDEBD0",
          color: "black",
        },
      };
    }
  };

  const messages = {
    showMore: (total) => (
      <span
        style={{
          backgroundColor: "#333333",
          color: "white",
          borderRadius: "5px",
          paddingInline: "1vh",
          fontSize: "12px",
          fontWeight: "100",
        }}
      >
        + {total} more Event ...
      </span>
    ),
  };

  return (
    <div style={{ height: "100%" }}>
      {" "}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={handleEventBg}
        onSelectEvent={handleEventClick}
        messages={messages}
        popup
        style={{
          height: "90%",
          margin: "2vh",
          fontFamily: "Poppins",
        }}
        components={{
          toolbar: CustomToolbar,
        }}
      />
      {selectedEvent ? (
        <Modal
          style={{ fontFamily: "Poppins" }}
          show={showModal}
          onHide={handleCloseModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedEvent.start.toDateString() !==
              selectedEvent.end.toDateString() && (
              // L'événement s'étend sur plusieurs jours, afficher la date de début et de fin
              <div
                style={{
                  backgroundColor: "#F1F5F9",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingInline: "2vh",
                  alignItems: "center",
                  marginBottom: "2vh",
                }}
              >
                <p style={{ marginTop: "2vh" }}>
                  {selectedEvent.start.toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p style={{ marginTop: "2vh" }}>
                  {selectedEvent.end.toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            )}
            <div
              style={{
                backgroundColor: "#F1F5F9",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "2vh",
                alignItems: "center",
              }}
            >
              <p style={{ marginTop: "2vh" }}>
                {selectedEvent.start.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                {selectedEvent.start.getHours() < 12 ? "AM" : "PM"}
              </p>
              <p style={{ marginTop: "2vh" }}>
                {selectedEvent.end.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                {selectedEvent.end.getHours() < 12 ? "AM" : "PM"}
              </p>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <div
              className="d-flex justify-content-between"
              style={{ gap: "20px", alignItems: "center" }}
            >
              <a
                style={{ marginRight: "auto" }}
                href="https://mail.google.com/"
              >
                Google Meet Link
              </a>

              <HiMiniVideoCamera
                style={{
                  color: "#2196F3",
                  fontSize: "30px",
                }}
              />
            </div>
          </Modal.Footer>
        </Modal>
      ) : null}
    </div>
  );
}

export default MyCalendar;
