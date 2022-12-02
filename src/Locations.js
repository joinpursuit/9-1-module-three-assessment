import React from 'react';
import { useEffect, useState } from 'react'

const Locations = () => {
    const [showLocation, setShowLocation] = useState(false)
    const [location, setLocation]= useState([])
    function toggleLocation() {
        setShowLocation(!showLocation);
      }
      
      function sortByName() {
        location.sort((a, b) => {
            const nameA = a.name
            const nameB = b.name
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            setLocation(location) 
        })
    }


      function sortByClimate() {
        
    }
    function sortByTerrain() {
        
    }


      useEffect(() => {
        fetch('./locations.json')
            .then(res => res.json())
            .then(res => {
                setLocation(res)
            })    
            .catch(err => console.log(err))
        }, [])
        // console.log(location)
        return (
        <div className='locations'>
            <h2>List of Locations</h2>
            <button onClick={()=>{toggleLocation()}}>{!showLocation ? "Show Location" : "Hide Location"}</button>
                {showLocation ? 
                <>
                <button onClick={()=>{sortByName()}}>Sort By Name</button>
                <button onClick={sortByClimate}>Sort By Climate</button>
                <button>Sort By Terrain</button>
                </>
                : null}
            <ul>
            {showLocation ? 
            location.map((place)=>{
                return(
                    <>
                        <li>
                            <p>Name: {place.name}</p>
                            <p>Climate: {place.climate}</p>
                            <p>Terrain: {place.terrain}</p>
                        </li>
                    </>
                )
            }): null}
            </ul>
        </div>
    );
};

export default Locations;