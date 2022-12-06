import React from 'react';
import { useState, useEffect } from "react";

const Test = () => {
    const [ searchBox, setSearchBox ] = useState("")
    const [ peopleData, setPeopleData ] = useState([])
    const [ personObject, setPersonObject ] = useState({})


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("handleSubmit function, form submission: ", searchBox )

        fetch('people.json')
        .then(response => response.json())
        .then(data => {
            setPeopleData(data)
        })
        console.log("handleSubmit function, people object: ", peopleData )
        
        // find the iteration of people array of objects that matches input name
        const result = peopleData.find(({ name }) => name === searchBox)
        console.log(result)
    
        
    }

    return (
        <>
        <h2>Search for a Person</h2>
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input 
                type="text" 
                value={searchBox}
                onChange={(e) => setSearchBox(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
        
        </>
    );
};

export default Test;