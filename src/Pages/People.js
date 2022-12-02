import { useState, useEffect } from "react";
import PeopleInfo from "./PeopleInfo";
import Error from "./Error";
export default function People({ selectedImages, movie }) {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [find, setFind] = useState(true); // set to true, not empty ''
  //Fetching People
  useEffect(() => {
    fetch("./people.json")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
        console.log(people);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    const findPeople = people.find(
      (ppl) => ppl.name.toLowerCase() === name.toLowerCase()
    );
    console.log(findPeople);

    setSearch(findPeople || {});
    //
    setFind(findPeople);
    setName("");
  };

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
      <br />
      {search.id && (
        <section>
          {console.log(search)}
          <PeopleInfo people={search} />
        </section>
      )}
      <div>
        {" "}
        {!find ? <Error selectedImages={selectedImages} movie={movie} /> : null}
      </div>
    </div>
  );
}
