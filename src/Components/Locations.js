import { useContext, useEffect, useState } from "react";
import { ContextData } from "../Provider";
import LocationThumbnail from "./LocationThumbnail";
import './Location.css'

function Locations(props) {
    const {locations, setLocations, fetchData} = useContext(ContextData)
    // declare state for show/hide button
    const [clicked, setClicked] =useState(false)


    useEffect(()=>{
        fetchData(`locations`)
        .then(respJson => setLocations(respJson))
        .catch(err => console.log(err))
    }, [])
    return (
        <div className="locations">
          <h2>List of Locations</h2> 
          <button
          onClick={()=> setClicked(!clicked)}>{clicked ? 'Hide' : 'Show'} Locations</button>
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