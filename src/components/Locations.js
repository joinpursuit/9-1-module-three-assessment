import { useEffect, useState } from "react";
const Locations = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("../locations.json")
      .then((res) => res.json())
      .then((resJson) => setData(resJson || []))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const showLocations = () => {
    setShow(!show);
  };

  const sortData = (btnE) => {
    const mapData = data.slice().sort((a, b) => (a[btnE] > b[btnE] ? 1 : -1));
    setData(mapData);
  };

  const handleClick = (e) => {
    let btnE = `${e.target.value}`;
    sortData(btnE);
  };

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <button onClick={showLocations}>
        {!show ? "Show Locations" : "Hide Locations"}
      </button>
      {show ? (
        <>
          {" "}
          <button value="name" onClick={handleClick}>
            Sort Locations by Name
          </button>
          <button value="climate" onClick={handleClick}>
            Sort Locations by Climate
          </button>
          <button value="terrain" onClick={handleClick}>
            Sort Locations by Terrain
          </button>
        </>
      ) : null}

      <hr />
      <ul>
        {show &&
          data &&
          data?.map((location) => (
            <li className="location" key={location.id}>
              <ul className="locationsInfo">
                <li>
                  <h2>{location.name}</h2>
                </li>
                <li>
                  <strong>Climate: </strong>
                  {location.climate}
                </li>
                <li>
                  <strong>Terrain: </strong>
                  {location.terrain}
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Locations;
