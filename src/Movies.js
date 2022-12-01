import { useEffect, useState } from "react";

export default function Movies() {
  const [data, setData] = useState([]);
  const [uniq, setUniq] = useState({});

  const handleSelected = (e) => {
    const selected = e.target.value;
    console.log(selected);
    const found = data.find((movie) => movie.id === selected);
    setUniq(found || {});
  };

  useEffect(() => {
    fetch("./films.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="movies" style={{ textAlign: "center" }}>
      <h2>Select a Movie</h2>
      <hr />
      <select onChange={handleSelected}>
        <option value=""></option>
        {data.map((select) => (
          <option key={select.id} value={select.id}>
            {select.title}
          </option>
        ))}
      </select>
      {uniq.id && (
        <div>
          <h3>Title: {uniq.title}</h3>
          <p>
            <strong>release Date:</strong> {uniq.release_date}
          </p>
          <p>
            <strong>description:</strong> {uniq.description}
          </p>
        </div>
      )}
    </div>
  );
}
