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
        // create arr with values for inputted value (`climate` => [continental, dry, mild, TODO, tropical])
        const keyValues = []
        locations.forEach(obj => {
            if(!keyValues.includes(obj[`${value}`]))
            keyValues.push(obj[`${value}`])
        })
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
        // sort sortArr objects by keyValues alphabetically => each location with `continental` => sort those alphabetically, then list the 'dry' alphabetically, etc...
        // first forEach key Value create sep. array for objects with matching value (all continentals in one array, etc)
         const sortArr2 = keyValues.sort().map((el)=>{
            const filter = sortArr.filter(obj => obj[`${value}`] === el 
            ) 
            return filter
        })
        // sort each array in sortArr2, by name key alphabetically
        sortArr2.forEach(el => el.sort((a,b) => 
        // if a<b return -1, else return 1 OR return 0
        a.name < b.name ? -1 : 1 || 0
         ) )
        //  concat all arrays inside of sortArr2 using reduce to return 1 array [ [], [], [], ] -> []
        const finalArr = sortArr2.reduce((acc, arr) =>
        acc.concat(arr)
       , []);

        setSorted(finalArr) 
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