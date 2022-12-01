export default function Location({ name, climate, terrain }) {
  return (
    <li className="location">
      <ul>
        <li>
          <span>Name: </span>
          {name}
        </li>
        <li>
          <span>Climate: </span>
          {climate}
        </li>
        <li>
          <span>Terrain: </span>
          {terrain}
        </li>
      </ul>
    </li>
  );
}
