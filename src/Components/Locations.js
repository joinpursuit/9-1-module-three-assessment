import { useState , useEffect } from "react"


export default function Locations(){
    const [locations , setLocations] = useState([])
    const [show , setShow] = useState(false)
    const locData = 'locations.json'

    function toggleInfo(){
        setShow(!show)
    }


    useEffect(() => {
        fetch(locData)
        .then((res) => res.json())
        .then((res) => {
            setLocations(res)
        })
    }, [])

    
function sortName(){
    const sn = locations.sort((a , b) => a.name.localeCompare(b.name))
    sn.map((sort) => {
        return (
        <ul>
            <li>
            <p><span style={{fontWeight: "bold"}}>Name:</span> {sort.name}</p>
          <p><span style={{fontWeight: "bold"}}>Climate:</span> {sort.climate}</p>
            <p><span style={{fontWeight: "bold"}}>Terrain:</span> {sort.terrain}</p>
            </li>
        </ul>
        )
    })

}


function sortClimate(){
    const sc = locations.sort((a , b) => a.climate.localeCompare(b.climate))
    sc.map((sort) => {
        return (
        <ul>
            <li>
            <p><span style={{fontWeight: "bold"}}>Name:</span> {sort.name}</p>
          <p><span style={{fontWeight: "bold"}}>Climate:</span> {sort.climate}</p>
            <p><span style={{fontWeight: "bold"}}>Terrain:</span> {sort.terrain}</p>
            </li>
        </ul>
        )
    })
 
}



    return(
        <div>
            <h2>List of Locations</h2>
            <button onClick={toggleInfo}>{!show ? "Show Locations" : "Hide Locations"}</button>
            {show ? (
                
                <div>
                    <button onClick={() => sortName()}>Sort By Name</button>
                    <br></br>
                    <button onClick={() => sortClimate()}>Sort Climate</button>
                    
                    <ul>
                    {locations.map((loc) => {
                        return (

                        <li>
                            <ul>
                                <li>
                                <p><span style={{fontWeight: "bold"}}>Name:</span> {loc.name}</p>
                                <p><span style={{fontWeight: "bold"}}>Climate:</span> {loc.climate}</p>
                                <p><span style={{fontWeight: "bold"}}>Terrain:</span> {loc.terrain}</p>
                                </li>
                            </ul>
                        </li>
                        )
                    })}
                    </ul>
                </div>
            ): null}
        </div>
    )
}