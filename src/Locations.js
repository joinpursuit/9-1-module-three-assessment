import React, { useEffect, useState } from "react";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [show, setShow] = useState("false");

  const displayHideDetails = () => {
    setShow(!show);
  };

  const sortByName = () => {
    const strAscending = [...locations].sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    setLocations(strAscending);
  };

  const sortByClimate = () => {
    const strAscending = [...locations].sort((a, b) =>
      a.climate > b.climate ? 1 : -1
    );
    setLocations(strAscending);
  };

  const sortByTerrain = () => {
    const strAscending = [...locations].sort((a, b) =>
      a.terrain > b.terrain ? 1 : -1
    );
    setLocations(strAscending);
  };

  useEffect(() => {
    fetch("locations.json")
      .then((response) => response.json())
      .then((res) => {
        setLocations(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <section>
        <button onClick={displayHideDetails}>
          {show ? "Hide Location" : "Show Location"}
        </button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByClimate}>Sort by Climate</button>
        <button onClick={sortByTerrain}>Sort by Terrain</button>

        <div className="cards">
          {show &&
            locations &&
            locations.map((location) => (
              <ul className="card" key={location.id}>
                <ul>
                  <li>
                    <ul className="details">
                      <li className="li-cards">
                        <span>Name:</span>
                        {location.name}
                      </li>

                      <li>
                        <span>Climate:</span>
                        {location.climate}
                      </li>
                      <li>
                        <span>Terrain:</span>
                        {location.terrain}
                      </li>
                    </ul>
                  </li>
                </ul>
              </ul>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Locations;
