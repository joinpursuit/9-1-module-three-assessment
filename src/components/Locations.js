import React from "react";
import { useState } from "react";
import locations from "../data/locations.json";

function Locations() {
  const [showLocation, setShowLocation] = useState(false);

  function handleOnClick() {
    setShowLocation(!showLocation);
  }
  
  const locationsList = locations.map((location) => {
    return (
      <li>
        <p>{location?.name}</p>
        <p>{location?.climate}</p>
        <p>{location?.terrain}</p>
      </li>
    );
  });

  return (
    <div className="locations">
      <h1>List of Location</h1>
      <button onClick={handleOnClick}>
        {showLocation ? "Hide Location" : "Show Location"}
      </button>
      <ul>{showLocation ? locationsList : null}</ul>
    </div>
  );
}

export default Locations;
