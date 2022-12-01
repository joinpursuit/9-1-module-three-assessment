import { useContext, useEffect, useState } from "react";
import { ContextData } from "../Provider";
import LocationThumbnail from "./LocationThumbnail";
import './Location.css'

function Locations(props) {
    const {locations, setLocations, fetchData} = useContext(ContextData)
    // declare state for show/hide button
    const [clicked, setClicked] =useState(false)
    // declare state for sorted array
    const [sorted, setSorted] = useState([])

    // function for sorting
    function sortBy(value) {
        // return array of objects with value and idValue key for inputted value
        const sortArr = locations.map(obj => {
           return {value: obj[`${value}`], idValue: obj.id}
            }) 
        // sort arr of objects by value key alphabetically (comparison using sort 1,-1,0)
            // a<b -1, a>b 1, else 0
        sortArr.sort((a,b) => 
            // if a<b return -1, else return 1 OR return 0
            a.value < b.value ? -1 : 1 || 0
        )
        // for each obj in sortedArr, find & match the idValue to the id value in original locations array and update sortArr's index with the returned matching obj from locations data
        sortArr.forEach(({idValue}, i ) => 
          sortArr[i] = locations.find(({id}) => id === idValue)
        )
        setSorted(sortArr) 
    }

    let arr = sorted.length ? sorted : locations
    
    useEffect(()=>{
        fetchData(`locations`)
        .then(respJson => setLocations(respJson))
        .catch(err => console.log(err))
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
            onClick={() => sortBy(`name`)}>
                Sort by Name
            </button>

            <button
            onClick={() => sortBy(`climate`)}>
                Sort by Climate
            </button>

            <button
            onClick={() => sortBy(`terrain`)}>
                Sort by Terrain
            </button>
          </div>
         
          <ul className="thumbnailGrid">
            {
                clicked &&
                arr.map(({name, climate, terrain, id}) => 
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