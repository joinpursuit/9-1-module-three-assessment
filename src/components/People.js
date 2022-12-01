import { useEffect, useState } from "react";
import { get } from "../api/fetch";
import Person from "./Person";

export default function People() {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState(undefined);
  const [textInput, setTextInput] = useState("");
  const [notFound, setNotFound] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    //
    const chosenPerson = people.find(
      (person) => person.name.toLocaleLowerCase() === textInput
    );
    if (!chosenPerson) {
      setNotFound(true);
    } else setNotFound(false);
    setPerson(chosenPerson);

    setTextInput("");
  }

  useEffect(() => {
    get("people")
      .then((res) => setPeople(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="people">
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
      {!person && notFound ? (
        <p>"Not Found"</p>
      ) : person ? (
        <Person person={person} />
      ) : (
        ""
      )}
    </section>
  );
}
