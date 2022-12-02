import { useState } from "react"
import Location from "./Location"
import locationsData from "../locations.json"

export default function Locations() {
    const [clicked, setClicked] = useState(false)
    const [sortedLocations, setSortedLocations] = useState([...locationsData])

    function handleClick(event) {
        event.preventDefault()
        setClicked(!clicked)
    }

    function handleSort(event) {
        event.preventDefault()
        let sorter = event.target.value
        let array = [...locationsData]
        array.sort((a, b) => {
            if (a[sorter] > b[sorter] ) {
                return 1
            }
            if (a[sorter] < b[sorter]) {
                return -1
            }
            return 0
        })
        setSortedLocations(array)
    }

    let text = ""
    if (clicked === false) {
        text = "Show Locations"
    }
    if (clicked === true) {
        text = "Hide Locations"
    }

    return (
        <div>
        <h1>List of Locations</h1>
        <button onClick={handleClick} >{text}</button>
        {!clicked ? null
        : 
        <div>
            <button value="name" onClick={handleSort}>Sort by Name</button>
            <button value="climate" onClick={handleSort}>Sort by Climate</button>
            <button value="terrain" onClick={handleSort}>Sort by Terrain</button>
        <ul className="locations">
            {sortedLocations && 
            sortedLocations.map((locationData) => {
                return <li><Location locationData={locationData} key={locationData.id} /></li>
            })}
        </ul>
        </div>
}
        </div>
    )
}