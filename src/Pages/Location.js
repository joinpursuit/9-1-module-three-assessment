export default function Location({ location, sort }) {
  return (
    <div key={location.id} className="detail">
      <p>
        <b>Name: </b> {location.name}
      </p>
      <p>
        <b>Climate: </b>
        {location.climate}
      </p>

      <p>
        <b>Terrain: </b>
        {location.terrain}
      </p>
    </div>
  );
}
