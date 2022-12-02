import React from 'react';
import {useState} from 'react'
import people from "../data/people.json"

function People() {
    const [userInput,setUserInput]= useState('')
// rendering Not found before user inputs into my form and rendering data withoutout clicking submit WHY?
    const characterObj = people.find((character) => {
        return character.name.toUpperCase() === userInput.toUpperCase();
      });

    function handleTextChange(e){
       setUserInput(e.target.value) 
    }

    function handleSubmit(e){
     e.preventDefault()  
    }
   
    return (
        <div className='people'>
            <h1>Search for a Person</h1>
          <form onSubmit={handleSubmit}>
            <input 
            type='text'
            value={userInput} 
            onInput={handleTextChange}
            placeholder="Search Character"
            id='userInput'
            />
            <button>SUBMIT</button>
            </form> 
            <div>
            <p>{characterObj ? characterObj.name : "Not found"}</p>
           <p>{characterObj?.age}</p>
           <p>{characterObj?.gender}</p> 
            </div>  
        </div>
    );
}

export default People;