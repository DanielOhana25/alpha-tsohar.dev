import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateSelector() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
    // Afficher la date sélectionnée dans la console avec le format dd/MM/yyyy
    const formattedDate = date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    console.log(formattedDate); // sur le format dd/MM/yyyy
  };

  return (
    <div className="date-selector">
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy" // Format de la date
        placeholderText="Select date"
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={10}
      />
    </div>
  );
}
export default DateSelector;
