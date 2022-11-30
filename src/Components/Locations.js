import { useState, useEffect } from "react";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [buttonVal, setButtonVal] = useState("SHOW");

  useEffect(() => {
    fetch("locations.json")
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <button>{buttonVal} LOCATIONS</button>
    </div>
  );
}
