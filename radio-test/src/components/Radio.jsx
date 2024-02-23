import React, { useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";

export default function Radio() {
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");

  const setup = async (stationFilter) => {
    const api = new RadioBrowserApi("My Radio App");
  };

  const filters = ["all", "rap", "rock", "country", "blues", "jazz"];

  return (
    <div className="radio">
      <div className="filters">
        {filters.map((filter, idx) => {
          console.log(filter, idx);
          return (
            <h3
              key={idx}
              className="filter">
              {filter}
            </h3>
          );
        })}
      </div>
    </div>
  );
}
