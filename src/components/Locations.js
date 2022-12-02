import { useState, useEffect } from "react";
import { get } from "../api/fetch";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  function handleSort(sortParam) {
    const sortedByName = [...locations].sort((a, b) =>
      a[sortParam].localeCompare(b[sortParam])
    );
    // Ref: https://stackoverflow.com/a/35092754/17735023

    setLocations(sortedByName);
  }

  useEffect(() => {
    get("locations")
      .then((res) => setLocations(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="locations">
      <h2>List of Locations</h2>
      <button onClick={() => setShowLocations(!showLocations)}>
        {!showLocations ? "Show Locations" : "Hide Locations"}
      </button>
      {showLocations ? (
        <>
          <button onClick={() => handleSort("name")}>Sort By Name</button>
          <button onClick={() => handleSort("climate")}>Sort By Climate</button>
          <button onClick={() => handleSort("terrain")}>Sort By Terrain</button>
        </>
      ) : (
        ""
      )}
      {showLocations ? (
        <ul>
          {locations.map((location) => {
            return (
              <li key={location.id}>
                <ul className="details">
                  <li>
                    <span>Name: {location.name}</span>
                  </li>
                  <li>
                    <span>Climate: {location.climate}</span>
                  </li>
                  <li>
                    <span>Terrain: {location.terrain}</span>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </section>
  );
}
