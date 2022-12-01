import React, { useEffect, useState } from "react";

const People = ({ pers }) => {
  const [search, setsearch] = useState("");
  const [person, setperson] = useState("");

  function handleChange(e) {
    setsearch(e.target.value);
  }
  function handlesubmit(e) {
    e.preventDefault();
    setperson(pers.find((f) => f.name === search));
  }

  console.log(search);
  console.log(person);
  console.log(pers);

  return (
    <div className="people">
      <form className="form" onSubmit={handlesubmit}>
        <label htmlFor="person">
          <h2>Search for a Person</h2>
          <input
            type="text"
            id="person"
            name="person"
            value={search}
            onChange={handleChange}
          ></input>
          <input type="submit" value="Submit"></input>
        </label>
      </form>

      {person && (
        <div className="person-detail">
          <h1>
            <strong className="person_Header">Title: </strong>
            {person.name}
          </h1>
          <h4>
            <strong className="person_Header">Release Date: </strong>
            {person.age}
          </h4>
          <h4>
            <strong className="person_Header">Description: </strong>
            {person.eye_color}
          </h4>{" "}
          <h4>
            <strong className="person_Header">Description: </strong>
            {person.hair_color}
          </h4>
        </div>
      )}
    </div>
  );
};

export default People;
