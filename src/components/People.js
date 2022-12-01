import { useEffect, useState } from "react";

const People = () => {
  const [data, setData] = useState([]);
  const [personInfo, setPersonInfo] = useState([]);
  const [inputBox, setInputBox] = useState("");
  const [message, setMessage] = useState("");

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
    setPersonInfo([]);

    if (inputBox.length === 0) {
      setMessage("You must enter a name to search, please try again...");
    }

    if (inputBox.length > 0) {
      data?.find((person) => {
        if (person.name.toLowerCase() === inputBox.toLowerCase()) {
          setPersonInfo(person || []);
        } else {
          setMessage("Sorry, no match found, please try again...");
        }
      });
    }

    setInputBox("");
  };

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputBox} onChange={handleInput}></input>
        <button type="submit">Submit</button>
        <hr />

        {personInfo.length !== 0 ? (
          <div className="person-info">
            <h2>{personInfo.name}</h2>

            <p>
              <strong>Age:</strong>
              {personInfo.age}
            </p>
            <p>
              <strong>Gender: </strong>
              {personInfo.gender}
            </p>
            <p>
              <strong>Eye Color: </strong>
              {personInfo.eye_color}
            </p>
            <p>
              <strong>Age: </strong>
              {personInfo.hair_color}
            </p>
          </div>
        ) : (
          message
        )}
      </form>
    </div>
  );
};

export default People;
