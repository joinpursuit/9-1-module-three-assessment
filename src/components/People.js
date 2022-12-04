import React from "react";
import { useState } from "react";
import people from "../data/people.json";

function People() {
  const [userInput, setUserInput] = useState("");
  const [characterData, setCharacterData] = useState({});
  const [error, setError] = useState(false)

  function handleTextChange(e) {
      setUserInput(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();

        const characterObj = people.find((character) => {
            return character.name.toUpperCase() === userInput.toUpperCase();
          });

          if(!characterObj){
            setError(true)
          } 
          setCharacterData(characterObj || {})
        // setCharacterData(characterObj === undefined ? {characterData : characterObj} : characterObj)
    }
console.log(characterData)
  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleTextChange}
          placeholder="Search Character"
          id="userInput"
        />
        <button type="submit">SUBMIT</button>
      </form>
        {characterData.name ?  (
        <div>
        <p>Name: {characterData.name}</p>
        <p>Age: {characterData.age}</p>
        <p>Gender: {characterData.gender}</p>
      </div>
        ) : error && <p>{"Not found"}</p>  }
    </div>
  );
}

export default People;
