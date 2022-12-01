import React from 'react'
import {useEffect, useState, useParams} from "react"

export default function Locations() {


const[locationData, setLocationData] =useState([])
const[thisLocation, setThisLocation] =useState([])
const[showLocation, setShowLocation] = useState(false)
const[nameSort, setNameSort] = useState(false)
const[climateSort, setClimateSort] = useState(false)
const[terrainSort, setTerrainSort] = useState(false)

useEffect(() => {
  fetch('locations.json')
  .then(res => res.json())
  .then((data)=> setLocationData(data))
  .catch((err) => console.log(err)
)
},[])


return (
  <div className="locations">
    <h1>List of Locations</h1>
    <button onClick={() => setShowLocation(!showLocation)}>{showLocation ? "Hide" : "Show"}</button>
    <button onClick={() => setNameSort(!nameSort)}>{nameSort ? "Hide" : "Show"}</button>
    <button onClick={() => setClimateSort(!climateSort)}>{climateSort ? "Hide" : "Show"}</button>
    <button onClick={() => setTerrainSort(!terrainSort)}>{terrainSort ? "Hide" : "Show"}</button>
    <ul>
      {showLocation &&
      locationData &&
      locationData.map(locale =>(
        <li classname locationBox key={locale.id}>
         <p className='name'><strong>Name:</strong><span className="localeSpan">{locale.name}</span></p>
         <p className='climate'><strong>Climate:</strong><span className="localeSpan" > {locale.climate}</span></p>
         <p className='terrain'><strong>Terrain:</strong><span className="localeSpan"  >{locale.terrain}</span></p>
        </li>
      ))}
    </ul>
    
  
  </div>
)

  
}
