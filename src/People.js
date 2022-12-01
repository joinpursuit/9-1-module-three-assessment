import React, { useState, useEffect } from "react";

export default function People() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [input, setInput] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = data.find(
      (person) => person.name.toLowerCase() === name.toLowerCase()
    );
    setInput(found || {});
    setName("");
  };

  useEffect(() => {
    fetch("./people.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="people" style={{ textAlign: "center" }}>
      <h2>Search for a Person</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter Name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {input
        ? input.id && (
            <div>
              <h3>Name: {input.name}</h3>
              <p>
                <strong>Age:</strong>{" "}
                {input.age === "" ? "unspecified" : input.age}
              </p>
              <p>
                <strong>Gender:</strong>{" "}
                {input.gender === "NA" ? "None" : input.gender}
              </p>
              <p>
                <strong>Eye Color:</strong> {input.eye_color}
              </p>
              <p>
                <strong>Hair Color:</strong> {input.hair_color}
              </p>
            </div>
          )
        : "Person Not Found"}
    </div>
  );
}
