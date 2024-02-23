import React from "react";
import { RadioBrowserApi } from "radio-browser-api";

export default function Radio() {
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");

  const api = async (stationFilter) => {
    new RadioBrowserApi("My Radio App");
  };

  return (
    <div>
      <h2>Radio Component</h2>
    </div>
  );
}
