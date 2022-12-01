import { useState, useEffect } from "react";
import Location from "./Location";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [initialSort, setInitialSort] = useState([]);
  const [buttonVal, setButtonVal] = useState("Show");

  useEffect(() => {
    fetch("locations.json")
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
        setInitialSort([...data]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    buttonVal === "Show" ? setButtonVal("Hide") : setButtonVal("Show");
  };

  const sortBy = (val) => {
    // console.log("sort", val);
    if (val !== "reset") {
      setLocations([
        ...locations.sort((a, b) => {
          const valA = a[val].toUpperCase();
          const valB = b[val].toUpperCase();
          if (valA < valB) {
            return -1;
          }
          if (valA > valB) {
            return 1;
          }
          return 0;
        }),
      ]);
    }
    if (val === "reset") {
      setLocations([...initialSort]);
    }
  };

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <button onClick={handleClick}>{buttonVal} Locations</button>
      <button onClick={() => sortBy("name")}>Sort by Name</button>
      <button onClick={() => sortBy("climate")}>Sort by Climate</button>
      <button onClick={() => sortBy("reset")}>Reset Sorting</button>
      <ul>
        {buttonVal === "Hide" &&
          locations.length > 0 &&
          locations.map(({ id, name, climate, terrain }) => (
            <Location
              key={id}
              name={name}
              climate={climate}
              terrain={terrain}
            />
          ))}
      </ul>
    </div>
  );
}
