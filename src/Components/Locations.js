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

        //set
        locations?.map((location) => {
            if(sort === 'name'){
                sortArr.push(`${location.name} - ${location.id}`)
            } else if (sort === 'climate'){
                sortArr.push(`${location.climate} - ${location.id}`)
            } else if (sort === 'terrain'){
                sortArr.push(`${location.terrain} - ${location.id}`)
            } else {
                setLocs(locations)
            }
        })

        if(sort === 'name' || sort === 'climate' || sort === 'terrain'){
            sortArr.sort()
            sortArr.map(each => idSort.push(each.substring(each.indexOf(' - ') + 3)))
            idSort.map(each => {
                const loc = locations.find(location => location.id === each)
                sortedOrder.push(loc)
            })
            setLocs(sortedOrder)
            console.log(locs)
        }
    }

    const runFunc = () => {
        sortFunc()
    }

    return (
        <div className="locations">
            <h1>List of Locations</h1>  
            <button onClick={() => setShowLocations(!showLocations)}>
                {showLocations ? 'Hide Locations' : 'Show Locations'}
            </button>
            <button onClick={() => {
                setSort('name')
                runFunc()}}
            >Sort by Name</button>
            <button onClick={() => {
                setSort('climate')
                runFunc()
            }}>Sort by Climate</button>
            <button onClick={() => {
                setSort('terrain')
                runFunc()
            }}>Sort by Terrain</button>
            <ul>
                {
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