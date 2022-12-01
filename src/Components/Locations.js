import React from 'react'
import {useEffect, useState, useParams} from "react"

export default function Locations() {


const[locationData, setLocationData] =useState([])
const[thisLocation, setThisLocation] =useState({})

useEffect(() => {
  fetch('locations.json')
  .then(res => res.json())
  .then((data)=> setLocationData(data))
  .catch((err) => console.log(err)
)
},[])

return (
  <div>Locations</div>
)

  
}
