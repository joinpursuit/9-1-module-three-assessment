import { useState, useEffect } from "react";
import "./locations.css";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);
  const [sortMethod, setSortMethod] = useState(null);
  const [propertyToShow, setPropertyToShow] = useState({
    name: true,
    climate: true,
    terrain: true,
  });

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/locations")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
        setPropertyToShow({
          name: true,
          climate: true,
          terrain: true,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const sortLocations = (method) => {
    let sortedLocations = [...locations];

    if (method === "name") {
      sortedLocations.sort((a, b) => a.name.localeCompare(b.name));
      setPropertyToShow({
        name: true,
        climate: false,
        terrain: false,
      });
    } else if (method === "climate") {
      sortedLocations.sort((a, b) => a.climate.localeCompare(b.climate));
      setPropertyToShow({
        name: false,
        climate: true,
        terrain: false,
      });
    } else if (method === "terrain") {
      sortedLocations.sort((a, b) => a.terrain.localeCompare(b.terrain));
      setPropertyToShow({
        name: false,
        climate: false,
        terrain: true,
      });
    }

    setLocations(sortedLocations);
    setSortMethod(method);
  };

  let sortedLocations = [...locations];
  if (sortMethod) {
    sortedLocations.sort((a, b) => a[sortMethod].localeCompare(b[sortMethod]));
  }

  const renderLocations = () => {
    if (!locations.length) {
      return <p>Loading...</p>;
    }

    return (
      <ul>
        {sortedLocations.map((location) => (
          <li key={location.id}>
            <ul className="details">
              {propertyToShow.name && (
                <li>
                  <span>Name:</span>
                  {location.name}
                </li>
              )}
              {propertyToShow.climate && (
                <li>
                  <span>Climate:</span>
                  {location.climate}
                </li>
              )}
              {propertyToShow.terrain && (
                <li>
                  <span>Terrain:</span>
                  {location.terrain}
                </li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div className="section-title">
        <h1>List of Locations</h1>
      </div>
      <div className="locations-center">
        <button onClick={() => setShowLocations(!showLocations)}>
          {showLocations ? "Hide Locations" : "Show Locations"}
        </button>
      </div>
      {showLocations && (
        <>
          <div className="locations-center">
            <button className="by-name" onClick={() => sortLocations("name")}>
              Sort by Name
            </button>
            <button
              className="by-climate"
              onClick={() => sortLocations("climate")}
            >
              Sort by Climate
            </button>
            <button
              className="by-terrain"
              onClick={() => sortLocations("terrain")}
            >
              Sort by Terrain
            </button>
          </div>
          <div className="locations">{renderLocations()}</div>
        </>
      )}
    </div>
  );
}

export default Locations;
