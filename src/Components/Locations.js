import { useState } from "react";

function Locations({locations}) {
    //Variables for show/hide and sorting data
    const [showLocations, setShowLocations] = useState(false)
    const [sort, setSort] = useState('')
    const [locs, setLocs] = useState([])
    const sortArr = []
    const idSort = []
    const sortedOrder = []

    //Function for sorting by name
    const sortFunc = () => {

        //Create array of location value being sorted by and location ID
        locations.map((location) => {
            if(sort === 'name'){
                sortArr.push(`${location.name} - ${location.id}`)
            } else if (sort === 'climate'){
                sortArr.push(`${location.climate} - ${location.id}`)
            } else if (sort === 'terrain'){
                sortArr.push(`${location.terrain} - ${location.id}`)
            } 
        })
            //Sorts locations alphabetically and pushes IDs to new array in the sorted order
            sortArr.sort()
            sortArr.map(each => idSort.push(each.substring(each.indexOf(' - ') + 3)))

            //Maps over sorted IDs and uses .find method to push original location object in the sorted order
            idSort.map(each => {
                const loc = locations.find(location => location.id === each)
                sortedOrder.push(loc)
            })

            //Stores sorted array of locations in locs state
            setLocs(sortedOrder)
    }

    return (
        <div className="locations">
            <h1>List of Locations</h1>  
            <button onClick={() => setShowLocations(!showLocations)}>
                {showLocations ? 'Hide Locations' : 'Show Locations'}
            </button>
            <button onClick={() => {
                setSort('name')
                sortFunc()}}
            >Sort by Name</button>
            <button onClick={() => {
                setSort('climate')
                sortFunc()
            }}>Sort by Climate</button>
            <button onClick={() => {
                setSort('terrain')
                sortFunc()
            }}>Sort by Terrain</button>
            <ul>
                {
                    //List rendering when no sort is chosen
                    (showLocations && sort === '') ?
                    locations.map(location => {
                        return (
                            <li key={location.id}>
                                <ul>
                                    <li><span>Name: </span>{location.name}</li>
                                    <li><span>Climate: </span>{location.climate}</li>
                                    <li><span>Terrain: </span>{location.terrain}</li>
                                </ul>
                            </li>
                        )
                    }) :
                    null
                }
                {
                    //List rendering when sort is chosen
                    (showLocations && locs) ?
                    locs?.map((location) => {
                        return (
                            <li key={location.id}>
                                <ul>
                                    <li><span>Name: </span>{location.name}</li>
                                    <li><span>Climate: </span>{location.climate}</li>
                                    <li><span>Terrain: </span>{location.terrain}</li>
                                </ul>
                            </li>
                        )
                    }) :
                    null
                }
            </ul>
        </div>
    );
}

export default Locations;