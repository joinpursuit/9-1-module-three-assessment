import React from "react"

export default function Person(person) {
  return (
    <div className="personDetails">
      <h2>Name: {person.person.name}</h2>
      <h2>Age: {person.person.age}</h2>
      <h2>Gender: {person.person.gender}</h2>
      <h2>Eye Color: {person.person.eye_color}</h2>
      <h2>Hair Color: {person.person.hair_color}</h2>
    </div>
  )
}
