import { useEffect, useState } from "react";

import { get } from "../api/fetch";

import Person from "./Person";

export default function People() {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({});
  const [textInput, setTextInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setPerson(
      people.find((person) => person.name.toLocaleLowerCase() === textInput)
    );
    setTextInput("");
  }

  useEffect(() => {
    get("people")
      .then((res) => setPeople(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="people">
      <h2>Search for a Person</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="textInput">
          <input
            id="textInput"
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value.toLocaleLowerCase())}
          />
        </label>
        <button>Submit</button>
      </form>
      {Object.keys(person) === 0 ? (
        <Person person={person} />
      ) : (
        <p>"Not Found"</p>
      )}
    </div>
  );
}
