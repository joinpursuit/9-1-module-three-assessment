import { useState , useEffect } from "react"
import "./Location.css"

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

function sortTerrain(){
    const st = locations.sort((a , b) => a.terrain.localeCompare(b.terrain))
    st.map((sort) => {
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
            <section>

            <button onClick={toggleInfo}>{!show ? "Show Locations" : "Hide Locations"}</button>
            <button onClick={() => sortName()}>Sort By Name</button>
            <button onClick={() => sortClimate()}>Sort By Climate</button>
            <button onClick={() => sortTerrain()}>Sort By Terrain</button>
            </section>
            {show ? (
                
                <div>
                    <ul className="first-ul">
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