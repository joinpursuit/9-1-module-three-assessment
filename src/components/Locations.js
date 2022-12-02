import React from "react";
import { useState, useEffect } from "react";

export default function Locations(){
    const [place, setPlace] = useState([])
    const [show, setShow] = useState(false)
    
    
    useEffect(() => {
        fetch("./locations.json")
        .then((res) => res.json)
        .then((place) => setPlace(place))
        .catch((err) => {console.log(err)})
    },[])
    
    
}
