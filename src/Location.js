import React from 'react';
import { useState, useEffect } from 'react';



function Location() {
const [show, setShow]= useState(false)
const [place, setPlace]= useState([])
const [order, setOrder]= useState(false)

useEffect(()=>{
    fetch ("locations.json")
    .then ((res)=>
    res.json())
    .then((place)=>
        setPlace(place))
    .catch ((err)=>{
        console.log(err)
    })
},[])


function sortPlaces (options) {
    const sortedData = place.sort((a,b) => {
        return a[options] > b[options] ? 1 : -1
    })
    setPlace(sortedData)
    setOrder(!order)

}


    return (
        <div className='locations'>
            <button onClick={()=> setShow(!show)}>
                {show?"Hide Locations":"Show Locations"}
            </button>
           
           <button onClick={()=> sortPlaces("name")}>Sort by Name</button>
           <button onClick={()=> sortPlaces("climate")}>Sort by Climate</button>
           <button onClick={()=> sortPlaces("terrain")}>Sort by Terrain</button>
                {show && 
               
                (
                <div>
                    <h2>List of Locations</h2>
                  <ul>
                    {   place.map((location)=>(
                        <li>
                            <ul>
                                <li key={location.name}>
                                    Name:{location.name} </li>
                                

                                    <li key={location.climate}>Climate:{location.climate}</li>
                                    

                                    
                                    <li key={location.terrain}>Terrain:{location.terrain}</li>
                                    
                            </ul>      
                         </li>                        
                         ))
                    }
                 </ul>
                </div>
                )}
        
        </div>
    );
}

export default Location;