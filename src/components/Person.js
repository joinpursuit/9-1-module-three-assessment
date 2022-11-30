export default function Person({ person }) {
  return (
    <div>
      <h3>Name: {person.name}</h3>
      <p>
        <strong>Age:</strong> {person.age}
      </p>
      <p>
        <strong>Eye Color:</strong> {person.eye_color}
      </p>
      <p>
        <strong>Hair Color:</strong> {person.hair_color}
      </p>
    </div>
  );
}
