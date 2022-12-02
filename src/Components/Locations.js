import React, { useEffect, useState } from "react";

function Locations() {
  const [location, setLocation] = useState([]);
  const [show, setShow] = useState("false");

  const hideDisDetails = () => {
    setShow(!show);
  };

  const sortName = () => {
    const strAscending = [...location].sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    setLocation(strAscending);
  };
  const sortClimate = () => {
    const strAscending = [...location].sort((a, b) =>
      a.climate > b.climate ? 1 : -1
    );
    setLocation(strAscending);
  };

  const sortTerrain = () => {
    const strAscending = [...location].sort((a, b) =>
      a.terrain > b.terrain ? 1 : -1
    );
    setLocation(strAscending);
  };

  useEffect(() => {
    fetch("locations.json")
      .then((res) => res.json())
      .then((res) => {
        setLocation(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="locations">
      <h2 className="locationh2">List of Locations</h2>
      <section>
        <button onClick={hideDisDetails}>
          {show ? "Hide Location" : "Show Location"}
        </button>
        <button onClick={sortName}>Sort by Name</button>
        <button onClick={sortClimate}>Sort by Climate</button>
        <button onClick={sortTerrain}>Sort by Terrain</button>
        <div className="locationCards">
          {show &&
            location &&
            location.map((location) => (
              <ul className="locationCard" key={location.id}>
                <ul>
                  <li>
                    <ul className="details">
                      <li className="li-content">
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
