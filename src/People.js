import React from 'react';
import { useState, useEffect } from 'react';

const People = () => {
    const [search, setSearch] = useState("")
    const [people, setPeople] = useState([])
    const [character, setCharacter]= useState({})
    

    const handleTextChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => { 
        e.preventDefault()
        const person = people.find((peep)=>{
            return peep.name === search
         })
         setCharacter(person || {})
    }

    useEffect(()=>{
        fetch('./people.json')
        .then(res => res.json())
        .then(res => {
            setPeople(res)
        })
        .catch(err => console.log(err)) 
    },[])
    
    console.log(character)
    return (
        <div className='people'>
            <h1>Search for a Person</h1>
            <input id='search' type='text' placeholder='Search People' onChange={handleTextChange} />
            <button id='submit' type='submit' onClick={handleSubmit}>Submit</button> 
            { search === character.name ?
                     <>
                    <h3>Name: {character.name}</h3>
                    <p>Age: {character.age}</p>
                    <p>Eye Color: {character.eye_color}</p>
                    <p>Hair Color: {character.hair_color}</p>
                    </>
                     : "Not Found"
                     
            }
            
        </div>
    );
};

export default People;