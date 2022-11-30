import { useState, useEffect } from "react";

export default function People() {
  const [people, setPeople] = useState([]);
  const [input, setInput] = useState("");
  const [person, setPerson] = useState({});

  useEffect(() => {
    fetch("people.json")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((err) => console.log(err));
  }, []);

  const submitHandle = (e) => {
    e.preventDefault();
    const found = people.find(
      (item) => item.name.toLowerCase() === input.toLowerCase()
    );
    setPerson(found || {});
    setInput("");
  };
  return (
    <div className="people">
      <h2>Search for a Person</h2>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>SUBMIT</button>
      </form>
      {person.id ? (
        <article className="person">
          <h3>
            <span>Name: </span>
            {person.name}
          </h3>
          <p>
            <span>Age: </span>
            {person.age}
          </p>
          <p>
            <span>Eye Color: </span>
            {person.eye_color}
          </p>
          <p>
            <span>Hair Color: </span>
            {person.hair_color}
          </p>
        </article>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}
