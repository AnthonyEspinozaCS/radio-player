import React, { useState, useEffect } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import defaultImg from "../assets/doge.png";

export default function Radio() {
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");

  useEffect(() => {
    setup(stationFilter).then((data) => {
      setStations(data);
    });
  }, [stationFilter]);

  const setup = async (stationFilter) => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");

    const stations = await api.searchStations({ language: "english", tag: stationFilter, limit: 30 }).then((data) => {
      return data;
    });

    return stations;
  };

  const filters = ["all", "rap", "rock", "country", "blues", "jazz"];

  const setDefaultSrc = (event) => {
    event.target.src = defaultImg;
  };

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
      <div className="stations">
        {stations &&
          stations.map((station, index) => {
            return (
              <>
                <div
                  className="station"
                  key={index}>
                  <div className="stationName">
                    <img
                      className="logo"
                      src={station.favicon}
                      alt="station logo"
                      onError={setDefaultSrc}
                    />
                  </div>
                  <div className="name">{station.name}</div>
                </div>

                <AudioPlayer
                  className="player"
                  src={station.urlResolved}
                />
              </>
            );
          })}
      </div>
    </div>
  );
}
