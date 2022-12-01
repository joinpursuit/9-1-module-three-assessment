import React, { useState } from "react";

export default function Locations({ place }) {
  const [button, showButton] = useState(false);
  const [order, showOrder] = useState("");

  function handleSort(e) {
    showOrder(e.target.value);
  }

  function handleButton() {
    showButton(!button);
  }
  console.log(button);
  console.log(place);
  console.log(order);

  let byName = place.slice(0);
  byName.sort(function (a, b) {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });
  let byClimate = place.slice(0);
  byClimate.sort(function (a, b) {
    let x = a.climate.toLowerCase();
    let y = b.climate.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });
  let byTerrain = place.slice(0);
  byTerrain.sort(function (a, b) {
    let x = a.terrain.toLowerCase();
    let y = b.terrain.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });

  console.log("by name:");
  console.log(byTerrain);

  //   const sortName = place.map((e) => e.name).sort();
  //   console.log(sortName);

  //   const sortclimate = place.map((e) => e.climate).sort();
  //   console.log(sortclimate);

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <br />
      <button onClick={handleButton}>
        {!button ? "Show Locations" : "Hide Locations"}
      </button>
      {button && (
        <button onClick={handleSort} value={"name"}>
          Sort by Name
        </button>
      )}
      {button && (
        <button onClick={handleSort} value={"climate"}>
          Sort by Climate
        </button>
      )}
      {button && (
        <button onClick={handleSort} value={"terrain"}>
          Sort by Terrain
        </button>
      )}
      <ul>
        {button &&
          order === "" &&
          place.map((e) => (
            <ul className="cardUl" key={e.id}>
              <li className="li">Name: {e.name}</li>
              <li className="li">Climate: {e.climate}</li>
              <li className="li">Terrain: {e.terrain}</li>
            </ul>
          ))}
        {button &&
          order === "name" &&
          byName.map((e) => (
            <ul className="cardUl" key={e.id}>
              <li className="li">Name: {e.name}</li>
              <li className="li">Climate: {e.climate}</li>
              <li className="li">Terrain: {e.terrain}</li>
            </ul>
          ))}
        {button &&
          order === "climate" &&
          byClimate.map((e) => (
            <ul className="cardUl" key={e.id}>
              <li className="li">Name: {e.name}</li>
              <li className="li">Climate: {e.climate}</li>
              <li className="li">Terrain: {e.terrain}</li>
            </ul>
          ))}
        {button &&
          order === "terrain" &&
          byTerrain.map((e) => (
            <ul className="cardUl" key={e.id}>
              <li className="li">Name: {e.name}</li>
              <li className="li">Climate: {e.climate}</li>
              <li className="li">Terrain: {e.terrain}</li>
            </ul>
          ))}
      </ul>
    </div>
  );
}
