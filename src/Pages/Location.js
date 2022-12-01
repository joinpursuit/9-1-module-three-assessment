export default function Location({ location, sorted }) {
  return (
    <div key={location.id} className="">
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
