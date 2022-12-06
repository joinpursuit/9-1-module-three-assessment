import React from 'react';
import { useState, useEffect } from "react";
import PeopleRender from './PeopleRender';

const Test = () => {
    const [ searchBox, setSearchBox ] = useState("")
    const [ peopleData, setPeopleData ] = useState([])
    const [ personObject, setPersonObject ] = useState({})
    const [ movieRenderCondition, setMovieRenderCondition ] = useState(false)


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
        const result = peopleData.find(({ name }) => name.toLowerCase() === searchBox.toLowerCase())
        console.log("handleSubmit function, found person object: ",result)
        // render
        setMovieRenderCondition(true)
        setPersonObject(result)
    }

    return (
        <>
        <div className='people'>
            <h2>Search for a Person</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter your query:
                    <input 
                    type="text" 
                    value={searchBox}
                    onChange={(e) => setSearchBox(e.target.value)}/>
                </label>
            <button type="submit">Submit</button>
        </form>
        <aside>
        {movieRenderCondition ? <PeopleRender person={personObject} /> : null}
        </aside>
        </div>
            
            {/* {movieRenderCondition ? <PeopleRender person={personObject} /> : null} */}
        </>
    );
};

export default Test;