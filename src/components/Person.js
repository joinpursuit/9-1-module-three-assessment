export default function Person({ person }) {
  return (
    <aside>
      <h3>Name: {person.name}</h3>
      <p>
        <span>Age:</span> {person.age}
      </p>
      <p>
        <span>Gender:</span> {person.gender}
      </p>
    </aside>
  );
}
