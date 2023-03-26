import { useState, useEffect } from "react";
import "./people.css";

function People() {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/people")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPeople(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    const result = people.find(
      (person) => person.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (result) {
      setSearchResult({
        name: result.name,
        age: result.age,
        gender: result.gender,
        eye_color: result.eye_color,
        hair_color: result.hair_color,
      });
    } else {
      setSearchResult("Not Found");
    }
    setSearchTerm("");
  }

  return (
    <div className="people">
      <div className="section-title">
        <h1>Search for a Person</h1>
      </div>
      <div className="section-select">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter a name"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {searchResult && (
          <div>
            {searchResult === "Not Found" ? (
              <p>{searchResult}</p>
            ) : (
              <article className="person-card">
                <h4>
                  Name: <span>{searchResult.name}</span>
                </h4>

                <h4>
                  Age: <span>{searchResult.age}</span>
                </h4>
                <h4>
                  Gender: <span>{searchResult.gender}</span>
                </h4>

                <h4>
                  Eye Color: <span>{searchResult.eye_color}</span>
                </h4>

                <h4>
                  Hair Color: <span>{searchResult.hair_color}</span>
                </h4>
              </article>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default People;
