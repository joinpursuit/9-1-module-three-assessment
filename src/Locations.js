import { useEffect, useState } from "react";

export default function Locations() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    const url = `./locations.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const newData = [...data];

  const handleSortedName = () => {
    setData(
      newData.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
  };

  const handleSortedClimate = () => {
    setData(
      newData.sort((a, b) => {
        if (a.climate.toLowerCase() < b.climate.toLowerCase()) {
          return -1;
        }
        if (a.climate.toLowerCase() > b.climate.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
  };

  const handleSortedTerrain = () => {
    setData(
      newData.sort((a, b) => {
        if (a.terrain.toLowerCase() < b.terrain.toLowerCase()) {
          return -1;
        }
        if (a.terrain.toLowerCase() > b.terrain.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
  };

  return (
    <div className="locations" style={{ textAlign: "center" }}>
      <h2>List of Locations</h2>
      <hr />
      <button type="submit" onClick={() => setShow(!show)}>
        {show ? "Hide Locations" : "Show Locations"}
      </button>
      {show ? (
        <button type="submit" onClick={handleSortedName}>
          Sort by Name
        </button>
      ) : null}
      {show ? (
        <button type="submit" onClick={handleSortedClimate}>
          Sort by climate
        </button>
      ) : null}
      {show ? (
        <button type="submit" onClick={handleSortedTerrain}>
          Sort by Terrain
        </button>
      ) : null}
      <ul>
        {show &&
          data &&
          data.map((location) => (
            <li key={location.id} style={{ listStyle: "none" }}>
              <ul>
                <li>
                  <span>Name:</span> {location.name}
                </li>
                <li>
                  <span>Climate:</span> {location.climate}
                </li>
                <li>
                  <span>Terrain:</span> {location.terrain}
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
