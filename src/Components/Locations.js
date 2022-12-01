import React from "react";
import { useState, useEffect } from "react";
import "./Locations.css";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [sortByName, setSortByName] = useState([]);
  const [sortByClimate, setSortByClimate] = useState([]);

  function handleSortByName() {
    setLocations(locations);
    const sortedByNames = [...locations].sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
    setSortByName(sortedByNames);
    setLocations(sortedByNames);
  }

  function handleSortByClimate() {
    setLocations(locations);
    const sortedByClimates = [...locations].sort((a, b) => {
      if (a.climate.toLowerCase() > b.climate.toLowerCase()) {
        return 1;
      } else if (a.climate.toLowerCase() < b.climate.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });

    setSortByClimate(sortedByClimates);
    setLocations(sortedByClimates);
  }

  useEffect(() => {
    fetch("./locations.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <div className="button_holder">
        <button
          className="location_button"
          style={{
            backgroundColor: !showInfo
              ? "rgb(245, 245, 245)"
              : "rgb(225, 213, 213)",
          }}
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? "Hide Locations" : "Show Locations"}
        </button>
        {showInfo && (
          <button className="location_button" onClick={handleSortByName}>
            Sort by Name
          </button>
        )}
        {showInfo && (
          <button className="location_button" onClick={handleSortByClimate}>
            Sort by Climate
          </button>
        )}
      </div>
      <div className="container">
        {showInfo
          ? locations.map((item) => (
              <div className="location_card" key={item.id}>
                <ul>
                  <li>
                    <b> Name: </b>
                    {item.name}
                  </li>
                  <li>
                    {" "}
                    <b>Climate:</b> {item.climate}
                  </li>
                  <li>
                    {" "}
                    <b>Terrain:</b> {item.terrain}
                  </li>
                </ul>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
