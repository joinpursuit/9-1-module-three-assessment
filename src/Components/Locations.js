import { useState } from "react";

function Locations({locations}) {
    const [showLocations, setShowLocations] = useState(false)
    return (
        <div className="locations">
            <h1>List of Locations</h1>  
            <button onClick={() => setShowLocations(!showLocations)}>
                {showLocations ? 'Hide Locations' : 'Show Locations'}
            </button>
            <button>Sort by Name</button>
            <button>Sort by Climate</button>
            <button>Sort by Terrain</button>
            <ul>
                {
                    showLocations &&
                    locations.map(location => {
                        return (
                            <li>
                                <ul>
                                    <li><span>Name: </span>{location.name}</li>
                                    <li><span>Climate: </span>{location.climate}</li>
                                    <li><span>Terrain: </span>{location.terrain}</li>
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Locations;