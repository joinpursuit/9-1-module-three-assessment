export default function Person({ person }) {
  return (
    <aside>
      <h3>
        Name: <em style={{ fontWeight: "normal" }}>{person.name}</em>
      </h3>
      <p>
        <span>Age:</span> {person.age}
      </p>
      <p>
        <span>Gender:</span> {person.gender}
      </p>
    </aside>
  );
}
