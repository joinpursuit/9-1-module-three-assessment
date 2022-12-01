import { useState, useEffect } from "react";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [buttonVal, setButtonVal] = useState("Show");

  useEffect(() => {
    fetch("locations.json")
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    buttonVal === "Show" ? setButtonVal("Hide") : setButtonVal("Show");
  };

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <button onClick={handleClick}>{buttonVal} Locations</button>
      <ul>
        {buttonVal === "Hide" &&
          locations.length > 0 &&
          locations.map(({ id, name, climate, terrain }) => (
            <li key={id}>
              <ul>
                <li>
                  <span>Name: </span>
                  {name}
                </li>
                <li>
                  <span>Climate: </span>
                  {climate}
                </li>
                <li>
                  <span>Terrain: </span>
                  {terrain}
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
