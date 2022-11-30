import React from "react";

export default function PeopleInfo({ people }) {
  // console.log(people);
  return (
    <div className="people" style={{ lineHeight: "2" }}>
      <p>
        <b>Name:</b> {people.name}
      </p>
      <p>
        <b>Gender:</b> {people.gender}
      </p>
      <p>
        <b>Age:</b> {people.age}
      </p>
      <p>
        <b>Eye Color:</b> {people.eye_color}
      </p>
      <p>
        <b>Hair Color:</b> {people.hair_color}
      </p>
    </div>
  );
}
