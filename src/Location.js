import React, { useEffect } from 'react';
import './Location.css';
export default function Location({ data, setData, show, setShow }) {
  useEffect(() => {
    fetch('/locations.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  //make a shallow copy of the data that already exists
  const sortData = [...data];
  // sort through sortData and inside the if statement convert all parameters to lowercase.
  function sortByName() {
    setData(
      sortData.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

        return 0;
      })
    );
  }

  function sortByClimate() {
    setData(
      sortData.sort((a, b) => {
        if (a.climate.toLowerCase() < b.climate.toLowerCase()) return -1;

        if (a.climate.toLowerCase() > b.climate.toLowerCase()) return 1;

        return 0;
      })
    );
  }
  function sortByTerrain() {
    setData(
      sortData.sort((a, b) => {
        if (a.terrain.toLowerCase() < b.terrain.toLowerCase()) return -1;

        if (a.terrain.toLowerCase() > b.terrain.toLowerCase()) return 1;

        return 0;
      })
    );
  }
  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <button className="show-button" onClick={() => setShow(!show)}>
        {show ? 'Hide Locations' : 'Show Locations'}
      </button>
      {show ? (
        <button type="submit" onClick={sortByName}>
          Sort By Name
        </button>
      ) : null}
      {show ? (
        <button type="submit" onClick={sortByClimate}>
          Sort By Climate
        </button>
      ) : null}
      {show ? (
        <button type="submit" onClick={sortByTerrain}>
          Sort By Terrain
        </button>
      ) : null}
      <ul>
        {show &&
          data &&
          data.map((locale) => (
            <li key={locale.id}>
              <ul>
                <li>{locale.name}</li>
                <li>{locale.climate}</li>
                <li>{locale.terrain}</li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
