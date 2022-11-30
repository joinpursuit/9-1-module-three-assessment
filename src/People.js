import React, { useState, useEffect } from 'react';
import './People.css';
export default function People() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [input, setInput] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = data.find(
      (person) => person.name.toLowerCase() === name.toLowerCase()
    );
    setInput(found || {});
  };

  useEffect(() => {
    fetch('/people.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="people">
      <h2>Search for a Person</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter a name"
          />
        </label>
        <button type="submit">submit</button>
      </form>
      {input.id ? (
        <div>
          <h1>Name: {input.name}</h1>
          <p>
            <b>Age: </b>
            {input.age}
          </p>
          <p>
            <b>Eye Color: </b>
            {input.eye_color}
          </p>
          <p>
            <b>Hair Color: </b>
            {input.hair_color}
          </p>
        </div>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}
