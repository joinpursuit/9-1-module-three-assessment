import React, {useState, useEffect} from "react"

export default function Movies(){

    const [data, setData] = useState([]);
    const [film, setFilm] = useState({})

    const handleChoice = (e) => {
        const chosen = e.target.value;
        console.log(chosen);
        const found = data.find((films) => films.id === chosen);
        setFilm(found || {});
    }

    useEffect(() => {
        fetch("./films.json")
        .then((res) => res.json())
        .then((data) => {
        //   console.log(data);
          setData(data);
        })
        .catch((err) => console.log(err));
    }, [])

    return(
        <div className="movies">
            <h1>Select a Movie</h1>
            <select onChange={handleChoice}>
              <option value=""></option>
              {data.map((choice) => (
                <option key={choice.id} value={choice.id}>{choice.title}</option>
              ))}  
            </select>
            <aside>
            {film.id && (
              <div>
                <h2>Title: {film.title}</h2>
                <p><strong>Release Date: </strong>{film.release_date}</p>
                <p><strong>Description: </strong>{film.description}</p>
              </div>
            )}
            </aside>
              </div>
    )
}