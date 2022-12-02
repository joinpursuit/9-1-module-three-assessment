import { useEffect, useState } from "react"

export default function Locations({allLocations}) {
  const [display,setDisplay] = useState(true)
  const [local,setLocal] = useState(allLocations)

  const locCopy = [...local];

  
  function sortName(){
    console.log(local)

    setLocal(
    locCopy.sort((a,b)=>{
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
      return 0
    })
    )
    
  }

  function sortTerrain(){
    console.log(local)

    setLocal(
    locCopy.sort((a,b)=>{
      if (a.terrain.toLowerCase() < b.terrain.toLowerCase()) return -1;
      if (a.terrain.toLowerCase() > b.terrain.toLowerCase()) return 1
      return 0
    })
    )
    
  }
  function sortClimate(){
    console.log(local)

    setLocal(
    locCopy.sort((a,b)=>{
      if (a.climate.toLowerCase() < b.climate.toLowerCase()) return -1;
      if (a.climate.toLowerCase() > b.climate.toLowerCase()) return 1
      return 0
    })
    )
    
  }
  useEffect(()=>{
    setLocal(allLocations)
  },[])

  return (
  <div className="locations" >
    <h2> List of Locations</h2> 
    <button onClick={()=>setDisplay(!display)}> {display ? 'Hide Locations' : 'Show Locations' }</button>
    {display && <button id="name" onClick={()=>sortName()}> Sort by Name </button>}
    {display && <button id="climate" onClick={()=>sortClimate()}>  Sort by Climate </button>}
    {display && <button id='terrain' onClick={()=>sortTerrain()}> Sort by Terrain </button>}

    {display  
    &&
    local
    &&
          <ul>
            
          {local.map((all)=>{
            
            return (
                <li key={all.id} value={all.id}>
                  <ul className="details">
                    <li><span>Name: </span>{all.name} </li>
                    <li><span>Climate: </span>{all.climate} </li>
                    <li><span>Terrain: </span>{all.terrain} </li>
                  </ul>
                </li>
           )
          })}
          </ul>
       }
   </div>
  )
}
