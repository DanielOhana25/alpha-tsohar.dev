import React, { useState } from "react";
import { CChart } from "@coreui/react-chartjs";

const franceData = [90, 60, 70, 80, 0, 25, 56, 98, 39, 45, 76, 12];
const israelData = [70, 40, 50, 60, 80, 20, 45, 78, 32, 37, 65, 0];
const ukdata = [70, 40, 50, 60, 80, 20, 45, 78, 32, 37, 65, 0];

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "france",
      backgroundColor: "#2196F3",
      data: franceData,
      barThickness: 10,
      borderRadius: 10,
      hoverBackgroundColor: "black",
    },
    {
      label: "israel",
      backgroundColor: "#33B197",
      data: israelData,
      barThickness: 10,
      borderRadius: 10,
      hoverBackgroundColor: "black",
    },
    {
      label: "uk",
      backgroundColor: "#FF9800",
      data: ukdata,
      barThickness: 10,
      borderRadius: 10,
      hoverBackgroundColor: "black",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

function Chart() {
  const [selectedCountries, setSelectedCountries] = useState([
    "france",
    "israel",
    "uk",
  ]);

  const handleCheckboxChange = (event) => {};

  return (
    <div style={{ height: "100%" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          gap: "15px",
          fontSize: "16px",
          height: "auto",
        }}
      >
        <label style={{ color: "#2196F3", fontWeight: "bold" }}>
          {" "}
          <input
            type="checkbox"
            value="france"
            style={{ marginRight: "1vh" }}
            checked={selectedCountries.includes("france")}
            onChange={handleCheckboxChange}
          />
          France
        </label>
        <label style={{ color: "#33B197", fontWeight: "bold" }}>
          {" "}
          <input
            type="checkbox"
            value="israel"
            style={{ marginRight: "1vh" }}
            checked={selectedCountries.includes("israel")}
            onChange={handleCheckboxChange}
          />
          Israel
        </label>
        <label style={{ color: "#FF9800", fontWeight: "bold" }}>
          {" "}
          <input
            type="checkbox"
            value="uk"
            style={{ marginRight: "1vh" }}
            checked={selectedCountries.includes("uk")}
            onChange={handleCheckboxChange}
          />
          UK
        </label>
      </div>
      <div style={{ height: "1vh" }}>
        <CChart type="bar" data={data} options={options} />
      </div>
    </div>
  );
}

export default Chart;
