import React from 'react'
import {useEffect, useState} from "react"

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


// function handleNameSort(){
//   const tempLocData = [...locationData]
//   let sortedPlaces =tempLocData.sort((a,b) => {
//     a.name < b.name ?  -1 : a.name > b.name ? 1 : 0
//   })
//   setNameSort(sortedPlaces)
// }
// function handleClimateSort(){
//   const tempLocData = [...locationData]
//   let sortedPlaces =tempLocData.sort((a,b) => {
//     a.climate < b.climate ?  -1 : a.climate > b.climate ? 1 : 0
//   })
//   setClimateSort(sortedPlaces)
// }

// function handleTerrainSort(){
//   const tempLocData = [...locationData]
//   let sortedPlaces =tempLocData.sort((a,b) => {
//     a.terrain < b.terrain ?  -1 : a.terrain > b.terrain ? 1 : 0
//   })
//   setTerrainSort(sortedPlaces)
// }


function handleNameSort(){
const tempLocData = [...locationData]
let sortedPlaces = tempLocData.sort((a, b) => {
  if (a.name < b.name) {
      return -1
  }
  if (a.name > b.name) {
      return 1
  }
  return 0
})
setNameSort(sortedPlaces)
}
function handleClimateSort(){
  const tempLocData = [...locationData]
  let sortedPlaces = tempLocData.sort((a, b) => {
    if (a.climate < b.climate) {
        return -1
    }
    if (a.climate > b.climate) {
        return 1
    }
    return 0
  })
  setClimateSort(sortedPlaces)
  }

  function handleTerrainSort(){
    const tempLocData = [...locationData]
    let sortedPlaces = tempLocData.sort((a, b) => {
      if (a.terrain < b.terrain) {
          return -1
      }
      if (a.terrain > b.terrain) {
          return 1
      }
      return 0
    })
    setTerrainSort(sortedPlaces)
    }



return (
  <div className="locations">
    <h1 className='locationsHdg'>List of Locations</h1>
    <button 
    className='showHideBtn'
    onClick={() => setShowLocation(!showLocation)}>{showLocation ? "Hide" : "Show"}</button>
    
    { showLocation ? 
    <>
    <br/>
    <button className='nameSortBtn' onClick={handleNameSort}>Sort By Name</button>
    <button className='climateSortBtn'onClick={handleClimateSort}>Sort By Climate</button>
    <button className='terrainSortBtn'onClick={handleTerrainSort}>Sort By Terrain</button>
    </>
    :
    null}

   <ul>
      {showLocation &&
      locationData &&
      locationData.map(locale =>(
        <li className locationBox key={locale.id}>
         <p className='name'><strong>Name:</strong><span className="localeSpan">{locale.name}</span></p>
         <p className='climate'><strong>Climate:</strong><span className="localeSpan" > {locale.climate}</span></p>
         <p className='terrain'><strong>Terrain:</strong><span className="localeSpan"  >{locale.terrain}</span></p>
        </li>
      ))}
    </ul>
  </div>
) 
}
