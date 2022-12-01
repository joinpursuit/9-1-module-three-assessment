import React, { useEffect } from 'react';
import './People.css';
export default function People({
  data,
  setData,
  name,
  setName,
  input,
  setInput,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const found = data.find(
      (person) => person.name.toLowerCase() === name.toLowerCase()
    );
    setInput(found || {});
    setName('');
  };

  useEffect(() => {
    fetch('/people.json')
      .then((res) => res.json())
      .then((data) => {
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
          <h1>Name: {input.name ? input.name : null}</h1>
          <p>
            <b>Age: </b>
            {input.age ? input.age : null}
          </p>
          <p>
            <b>Eye Color: </b>
            {input.eye_color}
          </p>
          <p>
            <b>Gender: </b>
            {input.gender ? input.gender : null}
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
