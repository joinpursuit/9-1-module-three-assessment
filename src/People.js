import React, { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";

function People() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const [input, setInput] = useState({});
  const [error, setError] = useState(false);
  const [userInput, setUserInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const found = people.find(
      (person) => person.name.toLowerCase() === name.toLowerCase()
    );

    setInput(found || {});
    setName("");
    setUserInput(true);
  };

  useEffect(() => {
    fetch("people.json")
      .then((response) => response.json())
      .then((res) => {
        setPeople(res);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  return (
    <div className="people">
      <h2>Search for a person</h2>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder=""
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {error ? (
          <ErrorMessage />
        ) : (
          <aside>
            {input.id && (
              <div>
                <h3>Name:{input.name}</h3>
                <p>
                  <span>Age:</span> {input.age}
                </p>
                <p>
                  <span>Eye Color:</span> {input.eye_color}
                </p>
                <p>
                  <span>Gender:</span> {input.gender}
                </p>
              </div>
            )}
            {!input.id && userInput && <div>Not Found</div>}
          </aside>
        )}
      </section>
    </div>
  );
}

export default People;
