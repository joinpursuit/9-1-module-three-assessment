import { useEffect, useState } from "react";
import "./People.css";

const People = () => {
  const [data, setData] = useState([]);
  const [personInfo, setPersonInfo] = useState([]);
  const [inputBox, setInputBox] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("../people.json")
      .then((res) => res.json())
      .then((resJson) => setData(resJson || []))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleInput = (e) => {
    setInputBox(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (inputBox.length === 0) setError(true);
    const foundPerson = data?.find(
      (person) => person.name.toLowerCase() === inputBox.toLowerCase()
    );
    setPersonInfo(foundPerson || []);
    setInputBox("");
  };

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputBox} onChange={handleInput}></input>
        <button type="submit">Sumbit</button>
        <hr />
        {error ? <div className="error">You must enter a name!</div> : null}
      </form>
    </div>
  );
};

export default People;
