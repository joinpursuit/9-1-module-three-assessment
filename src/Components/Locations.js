import React, {useState, useEffect} from 'react';

const Locations = () => {
    const [location, setLocation] = useState([])
    const [showLocations, setShowLocations] = useState(false)

    useEffect(()=>{
        fetch('/locations.json')
            .then((res)=>res.json())
            .then((data)=>{
                setLocation(data)
                // console.log(data)
            })
            .catch((err)=>{
                console.log(err)
            }) 
    },[])

    return (
        <div className='.locations'>
            <h1>List of Locations</h1>
            <div className='showButton'>
                <button onClick={() => {setShowLocations(!showLocations)}}>{!showLocations ? "Show Locations..." : "Hide Locations..."}</button>
                <ul>
                    {showLocations && location && location.map((data) => (
                    <li key={data.id}> Name: {data.name} Climate: {data.climate} Terrain: {data.terrain}</li> 
                    ))} 
                </ul>
            </div>
        </div>
    );
};

export default Locations;