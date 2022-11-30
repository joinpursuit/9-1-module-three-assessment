import React from "react";
import { useState, useEffect } from "react";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

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
      <button onClick={() => setShowInfo(!showInfo)}>Show Locations</button>
    </div>
  );
}
