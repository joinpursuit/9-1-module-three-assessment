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

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <button onClick={() => setShow(!show)}>
        {!show ? "Show Locations" : "Hide Locations"}
      </button>
      {show ? (
        <>
          {" "}
          <button>Sort Locations by Name</button>
          <button>Sort Locations by Climate</button>
          <button>Sort Locations by Terrain</button>
        </>
      ) : null}

      <hr />
      <ul>
        {show &&
          data &&
          data?.map((location) => (
            <li key={location.id}>
              <ul>
                <li>
                  <strong>Name: </strong>
                  {location.name}
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
