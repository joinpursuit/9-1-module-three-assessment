import { useState, useEffect } from "react";
import Location from "./Location";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [initialSort, setInitialSort] = useState([]);
  const [buttonVal, setButtonVal] = useState("Show");
  const [nameOrien, setNameOrien] = useState("ASC");
  const [climateOrien, setClimateOrien] = useState("ASC");

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

  const sortBy = (val, orien = "", setOrien = () => {}) => {
    // sorting by name, climate, or reset & ASC or DESC order
    // when sorting climates, same climate values will be sorted by ASC name
    val !== "reset"
      ? setLocations([
          ...locations.sort((a, b) => {
            const valA = a[val].toUpperCase();
            const valB = b[val].toUpperCase();
            if (orien === "ASC") {
              if (valA < valB) {
                return -1;
              }
              if (valA > valB) {
                return 1;
              }
              if (val === "climate") {
                if (a.name < b.name) {
                  return -1;
                }
                if (b.name > a.name) {
                  return 1;
                }
              }
              return 0;
            } else {
              if (valA > valB) {
                return -1;
              }
              if (valA < valB) {
                return 1;
              }
              if (val === "climate") {
                if (a.name < b.name) {
                  return -1;
                }
                if (b.name > a.name) {
                  return 1;
                }
              }
              return 0;
            }
          }),
        ])
      : setLocations([...initialSort]);
    orien === "ASC" ? setOrien("DESC") : setOrien("ASC");
  };

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <section className="buttons">
        <button onClick={handleClick}>{buttonVal} Locations</button>
        <button onClick={() => sortBy("name", nameOrien, setNameOrien)}>
          Sort by Name ({nameOrien})
        </button>
        <button
          onClick={() => sortBy("climate", climateOrien, setClimateOrien)}
        >
          Sort by Climate ({climateOrien})
        </button>
        <button onClick={() => sortBy("reset")}>Reset Sorting</button>
      </section>
      <ul className="locations-ul">
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
