import { useContext, useEffect, useState } from "react";
import { ContextData } from "../Provider";
import LocationThumbnail from "./LocationThumbnail";
import './Location.css'

function Locations(props) {
    const {locations, setLocations, fetchData} = useContext(ContextData)
    // declare state for show/hide button
    const [clicked, setClicked] =useState(false)

    // function for sorting
    function sortBy() {
      const sortArr = locations.map(({name}) => name).sort()

      sortArr.forEach((location, i ) => 
        sortArr[i] = locations.find(({name}) => name === location)
      )
      setLocations(sortArr)
      
    }
    


    useEffect(()=>{
        fetchData(`locations`)
        .then(respJson => setLocations(respJson))
        .catch(err => console.log(err))

//         const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort())
// console.log(fruits.reverse())
    }, [])
    return (
        <div className="locations">
          <h2>List of Locations</h2> 
          <div className="buttons">
          <button
          onClick={()=> setClicked(!clicked)}>
            {clicked ? 'Hide' : 'Show'} Locations
            </button>

            <button
            onClick={() => sortBy()}>
                Sort by Name
            </button>

            <button>
                Sort by Climate
            </button>

            <button>
                Sort by Terrain
            </button>
          </div>
         
          <ul className="thumbnailGrid">
            {
                clicked &&
                locations.map(({name, climate, terrain, id}) => 
                <LocationThumbnail
                key = {id} 
                name = {name}
                climate = {climate}
                terrain = {terrain} />
                )
            }
          </ul>
        </div>
    );
}

export default Locations;