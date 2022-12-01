import React, {useState, useEffect} from 'react';
import './Locations.css'

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

    function handleSort(sorts) {
        setLocation([...sorts])
    }

    function nameSort() {
        const sortByName = location.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
        sortByName.map((data)=>{
            return (
                <ul>
                    <li>
                        <p><span style={{fontWeight:"bold"}}>Name:</span> {data.name}</p>
                        <p><span style={{fontWeight:"bold"}}>Climate:</span> {data.climate}</p>
                        <p><span style={{fontWeight:"bold"}}>Terrain:</span> {data.terrain}</p>
                    </li>
                </ul>
            )
        })
        handleSort(sortByName)
    }

    function ClimateSort() {
        const sortByClimate = location.sort((a,b) => a.climate.toLowerCase().localeCompare(b.climate.toLowerCase()))
        sortByClimate.map((data)=>{
            return (
                <ul>
                    <li>
                        <p><span style={{fontWeight:"bold"}}>Name:</span> {data.name}</p>
                        <p><span style={{fontWeight:"bold"}}>Climate:</span> {data.climate}</p>
                        <p><span style={{fontWeight:"bold"}}>Terrain:</span> {data.terrain}</p>
                    </li>
                </ul>
            )
        })
        handleSort(sortByClimate)
    }

    function TerrainSort() {
        const sortByTerrain = location.sort((a,b) => a.terrain.toLowerCase().localeCompare(b.terrain.toLowerCase()))
        sortByTerrain.map((data)=>{
            return (
                <ul>
                    <li>
                        <p><span style={{fontWeight:"bold"}}>Name:</span> {data.name}</p>
                        <p><span style={{fontWeight:"bold"}}>Climate:</span> {data.climate}</p>
                        <p><span style={{fontWeight:"bold"}}>Terrain:</span> {data.terrain}</p>
                    </li>
                </ul>
            )
        })
        handleSort(sortByTerrain)
    }

    return (
        <div className='.locations'>
            <h1>List of Locations</h1>
                <button onClick={() => {setShowLocations(!showLocations)}}>{!showLocations ? "Show Locations..." : "Hide Locations..."}</button>
                    {showLocations ? (
                        <div>
                            <section>
                                <button onClick={()=> {nameSort()}}>Sort By Name</button>
                                <button onClick={()=> {ClimateSort()}}>Sort By Climate</button>
                                <button onClick={()=> {TerrainSort()}}>Sort By Terrain</button>
                            </section>
                            <ul className='grid'>
                                {location.map((data) =>{
                                    return (
                                        <ul key={data.id}>
                                            <li> 
                                                <p><span style={{fontWeight:"bold"}}>Name:</span> {data.name}</p>
                                                <p><span style={{fontWeight:"bold"}}>Climate:</span> {data.climate}</p>
                                                <p><span style={{fontWeight:"bold"}}>Terrain:</span> {data.terrain}</p>
                                            </li>  
                                        </ul>         
                                    )
                                })}
                            </ul>
                        </div>
                    ): null}
            </div>
    )
}

export default Locations;