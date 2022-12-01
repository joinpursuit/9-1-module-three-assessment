import React from 'react';
import { useState, useEffect } from 'react';






function People() {

    const [peopleData, setPeopleData] = useState([])
    const [characterName, setCharacterName] = useState("")
    const [input, setInput] = useState({})

    useEffect(()=>{
        fetch('./people.json')
        .then((res) => res.json())
        .then((people)=>
        {setPeopleData(people)
        console.log(people)})
        .catch ((err)=>{
            console.log(err)
        })
        }, [])


        const handleSubmit = (e)=>{
            e.preventDefault()
            const found = peopleData.find(people => people.name.toLowerCase() === characterName.toLowerCase())
            setInput(found || {})
        }


    return (
        <div className='people'>
            <h2>Search for a Person</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    <input value={characterName} onChange={(e)=>{
                        setCharacterName(e.target.value)
                    }}
                    type="text"/>
                </label>
                <button type='submit'>Submit</button>
            </form>
            { input.name ? 
            (
                <div>
                    <h3>Name:{input.name}</h3>
                    <p>Age:{input.age}</p>
                    <p>Eye Color:{input.eye_color}</p>
                    <p>Hair Color: {input.hair_color}</p>
                </div>
            ): ("Not Found")
            }
        </div>
    );
}

export default People;