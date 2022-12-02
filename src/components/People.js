import React from "react";
import { useState, useEffect } from "react";

export default function People(){

const [people, setPeople] = useState([])
const [name, setName] = useState("")
const [input, setInput] = useState({})


const handleSubmit = (e)=> {
    e.preventDefault()
    const found = people.find(people => people.name.toLowerCase() === name.toLowerCase())
        setInput(found || {})
    }


    useEffect(() => {
        fetch("./people.json")
        .then((res) => res.json())
        .then((people) => setPeople(people))
        .catch((err) => {console.log(err)})
    },[])
 
    return(
        <div className="people">
            <h1>Search for a Person</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    <input value={name} onChange={(e) => { setName(e.target.value)
                    }} 
                    type="text"/>
                </label>
                <button type="submit">Submit</button>
            </form>
            { input.name ? (
                <div>
                    <h3>Name: {input.name}</h3>
                    <p>Age: {input.age}</p>
                    <p>Eye color: {input.eye_color}</p>
                    <p>Hair color: {input.hair_color}</p>
                </div>
                ): ("Name not found")}
        </div>
    )
}