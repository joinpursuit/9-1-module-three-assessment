import React from "react";
import { useState, useEffect } from "react";
import "./People.css";

export default function People() {
  const [people, setPeople] = useState([]);
  const [searched, setSearched] = useState([]);
  const [input, setInput] = useState({});
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const found = people.find(
      (person) => person.name.toLowerCase() === searched.toLowerCase()
    );
    if (found !== undefined) {
      setInput(found);
      setSearched("");
      setError("");
    } else {
      setError("Not Found");
      setInput([]);
      setSearched("");
    }
  }

  useEffect(() => {
    fetch("./people.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="people">
      <h2>Search for a Person</h2>

      <form className="people__form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            className="input_form"
            type="text"
            name="name"
            placeholder="Enter a name..."
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
          />
          <button className="people_submit" type="submit">
            Submit
          </button>
        </label>
      </form>
      {Object.keys(input).length !== 0 ? (
        <div className="person__info">
          <p>
            <b>Name:</b> {input.name}
          </p>
          <p>
            <b>Gender:</b> {input.gender}
          </p>
          <p>
            <b>Age:</b> {input.age}
          </p>
        </div>
      ) : null}
      {error ? (
        <p style={{ textAlign: "center", color: "red", fontSize: "larger" }}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
