import React from "react";
import { useState } from "react";
import people from "../data/people.json";

function People() {
  const [userInput, setUserInput] = useState("");
  const [characterData, setCharacterData] = useState("");

  function handleTextChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const characterObj = people.find((character) => {
      return character.name.toUpperCase() === userInput.toUpperCase();
    });

    if (typeof characterObj === "object") {
      setCharacterData(characterObj);
    } else {
      setCharacterData("Not Found");
    }

    console.log(typeof characterObj);
  }
  console.log(userInput.length);
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
      <div>
        <p>{characterData.name}</p>
        <p>{characterData?.age}</p>
        <p>{characterData?.gender}</p>
      </div>
    </div>
  );
}

export default People;
