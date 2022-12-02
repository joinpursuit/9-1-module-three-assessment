import { React, useEffect , useState } from 'react';

function Location() {
    const [locations , setLocations] = useState([])
    const [show , setShow] = useState(true)
    const locationData = 'locations.json'

    function toggleInfo(){
        setShow(!show)
    }


    useEffect(() => {
        fetch(locationData)
        .then((res) => res.json())
        .then((res) => {
            setLocations(res)
        })
        .catch((err) => console.log(err))
    }, [])

   const newLoc= [...locations]

function sortName(){
    setLocations(
        newLoc.sort((a, b)=>{
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1
              }
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1
              }
              return 0
        })
    )
}


function sortClimate(){
    setLocations(
        newLoc.sort((a, b) => {
          if (a.climate.toLowerCase() < b.climate.toLowerCase()) {
            return -1
          }
          if (a.climate.toLowerCase() > b.climate.toLowerCase()) {
            return 1
          }
          return 0
        })
      )
    }

function sortTerrain(){
    setLocations(
        newLoc.sort((a, b) => {
          if (a.terrain.toLowerCase() < b.terrain.toLowerCase()) {
            return -1
          }
          if (a.terrain.toLowerCase() > b.terrain.toLowerCase()) {
            return 1
          }
          return 0;
        })
      )
    }



return(
    <div className="locations">
        <h2>List of Locations</h2>
      <div>
        <button onClick={() => setShow(!show)}>
            {!show ? "Show Locations" : "Hide Locations"}
        </button>
      </div>
        {show ? (
            <div>
                <div>
                <button onClick={() => sortName()}>
                    Sort By Name
                </button>
                <button onClick={() => sortClimate()}>
                    Sort By Climate
                </button>
                <button onClick={() => sortTerrain()}>Sort By Terrain</button>
                </div>
                <ul>
                {locations.map((location) => {
                    return (
                        <ul key={location.id}>
                            <li>
                            <p><span><b>Name:</b></span> {location.name}</p>
                            <p><span><b>Climate:</b></span> {location.climate}</p>
                            <p><span><b>Terrain:</b></span> {location.terrain}</p>
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

export default Location;