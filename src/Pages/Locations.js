import Location from "./Location";
import { useState, useEffect } from "react";
import "./Locations.css";
export default function Locations() {
  // state for show btn
  const [show, setShow] = useState(false);
  const [locations, setLocations] = useState([]);
  const [sort, setSorted] = useState(false);
  //Fecthing Locations
  useEffect(() => {
    fetch("./locations.json")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //! SORTING by name usiong comparator function
  // save sorted location to a state
  const handleSortedNames = () => {
    const sortNames = locations.sort((nameA, nameB) => {
      if (nameA.name.toLowerCase() < nameB.name.toLowerCase()) {
        return -1;
      } else if (nameA.name.toLowerCase() > nameB.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    setSorted(sortNames);
    console.log(sortNames);
  };

  // const comparator = (a, b) => {
  //   return a.name.toLowerCase() - b.name.toLowerCase();
  // };
  // console.log("sorted", locations.sort(comparator));

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <div className="button"></div>
      <button onClick={handleSortedNames}>
        {show && sort ? "Sort Locations" : "Unsort Locations"}
      </button>

      <div>
        <Location location={sort} />
      </div>
      <button
        className="button"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide Locations" : "Show Locations"}
      </button>
      {show &&
        locations &&
        locations.map((location) => {
          return (
            <div className="details" key={location.id}>
              <ul>
                <li>
                  {" "}
                  <Location location={location} />
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}
