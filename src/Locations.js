import { useState, useEffect} from 'react'

export default function Locations () {
    
    const [location, setLocation] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        fetch('locations.json', {
    method: 'GET',
    headers: { 'Accept': 'application/json', },
    })
        .then(res => res.json())
        .then(location => setLocation((location)))
        }, [])

    function climateSort () {
        const sorted = [...location].climate.sort((a, b) => a.name > b.name)
        console.log(sorted)
    }

    return (
        <div className='locations'>
            <h1>List of Locations.</h1>
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide Locations' : 'Show Locations'}
            </button>
                    <button>Sort By Name</button>
                    <button>Sort By Climate</button>
                    <button>Sort By Terrain</button>
                <ul className='locations'>
                    { show && location && location.map((each) => (
                        <li key={each.id}>
                            Name: {each.name}
                            Climate: {each.climate}
                            Terrain: {each.terrain}
                        </li>
                    ))}
                </ul>

        </div>
    )
}