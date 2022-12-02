import React, { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";

function People() {
  const[peopleData, setPeopleData] = useState([])
  const [inputBar, setInputBar] =useState('')
  const [searchName, setSearchName] = useState({})
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    const found = peopleData.find((person)=> person.name.toLowerCase() === inputBar.toLocaleLowerCase()
    );
    setSearchName(found || {});
    setInputBar('')
    setSubmitted(true)
    
  };


  useEffect(() => {
    fetch("people.json")
      .then((res) => res.json())
      .then((res) => {
       setPeopleData(res);
      setError(false)   
    })
      .catch((err) => {
        console.log(err);
        setError(true)
      });
  }, []);

  return (
    <div className="people">
    
      <section className="">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input
            value={inputBar}
            onChange ={(e) => setInputBar(e.target.value)}
            type="text"
            placeholder="Input charecter name.."
             />
          </label>
          <button type="sumbit">Submit</button>
          {error ? (
             <ErrorMessage />
          ) : ( 
            <aside>
              {searchName.id && submitted && (
                <div>
                  <h3>Name:{searchName.name}</h3>
                  <p><span>Age:</span>{searchName.age}</p>
                  <p><span>Eye color:</span>{searchName.eye_color}</p>
                  <p><span>Gender:</span>{searchName.gender}</p>
                </div>
              )
            }
            {
              !searchName.id && submitted && (<div className="notfoundmsg">Not found</div>)
            }
            </aside>
          )}
          
        </form>
        
      </section>
      <div className="people-img">
        <img src="https://i.pinimg.com/originals/19/f1/e9/19f1e91c8fca385916c50d50b6381687.jpg" 
      alt="homeimg" />
      </div>
    </div>
  );
}

export default People;
