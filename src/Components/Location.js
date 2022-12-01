export default function Location({ name, climate, terrain }) {
  return (
    <li className="locations-li">
      <ul className="location">
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
