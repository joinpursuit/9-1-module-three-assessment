import { useState, useEffect } from "react"
import React from "react"

export default function Locations() {
  const [show, setShow] = useState(false)
  const [locations, setLocationsData] = useState([])
  useEffect(() => {
    fetch("/locations.json")
      .then((res) => res.json())
      .then((data) => setLocationsData(data))
      .catch((err) => console.log(err))
  }, [])

  function handleSortByName() {
    const sortedLocations = [...locations].sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
      return 0
    })
    setLocationsData(sortedLocations)
  }

  function handleSortByClimate() {
    const sortedLocations = [...locations].sort((a, b) => {
      if (a.climate.toLowerCase() < b.climate.toLowerCase()) return -1
      if (a.climate.toLowerCase() > b.climate.toLowerCase()) return 1
      return 0
    })
    setLocationsData(sortedLocations)
  }

  function handleSortByTerrain() {
    const sortedLocations = [...locations].sort((a, b) => {
      if (a.terrain.toLowerCase() < b.terrain.toLowerCase()) return -1
      if (a.terrain.toLowerCase() > b.terrain.toLowerCase()) return 1
      return 0
    })
    setLocationsData(sortedLocations)
  }

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Locations" : "Show Locations"}
      </button>
      <button onClick={handleSortByName}>Sort By Name</button>
      <button onClick={handleSortByClimate}> Sort By Climate</button>
      <button onClick={handleSortByTerrain}> Sort By Terrain</button>
      <section>
        <ul>
          {show &&
            locations &&
            locations.map((item) => (
              <li key={item.id}>
                {" "}
                <p> Name: {item.name}</p>
                <p>Climate: {item.climate}</p>
                <p>Terrain: {item.terrain}</p>
              </li>
            ))}
        </ul>
      </section>
    </div>
  )
}
