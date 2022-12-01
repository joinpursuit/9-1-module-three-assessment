import { useState, useEffect } from "react";

export default function People() {
  const [people, setPeople] = useState([]);
  const [input, setInput] = useState("");
  const [person, setPerson] = useState({});
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch("people.json")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((err) => console.log(err));
  }, []);

  const submitHandle = (e) => {
    e.preventDefault();
    const found = people.find(
      (item) => {
        if (item.name.toLowerCase() === input.toLowerCase()) {
          return item;
        }
        // if 3+ character input is part of a name, the first match will be returned
        else if (
          input.length > 2 &&
          item.name.toLowerCase().includes(input.toLowerCase())
        ) {
          return item;
        }
      }

      // if
    );
    found ? setNotFound(false) : setNotFound(true);
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
      {person.id && (
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
            <span>Gender: </span>
            {person.gender}
          </p>
        </article>
      )}
      {notFound && !person.id && <p>Not Found</p>}
    </div>
  );
}
