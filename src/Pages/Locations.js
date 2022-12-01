import Location from "./Location";
import { useState, useEffect } from "react";
import "./Locations.css";
export default function Locations() {
  // state for show btn
  const [show, setShow] = useState(false);
  const [locations, setLocations] = useState([]);
  // const [sort, setSorted] = useState([]);
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
  //* save sorted location to a state
  //
  const shallowCopy = [...locations];

  const handleSortedNames = () => {
    setLocations(
      shallowCopy.sort((nameA, nameB) => {
        if (nameA.name.toLowerCase() < nameB.name.toLowerCase()) {
          return -1;
        } else if (nameA.name.toLowerCase() > nameB.name.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
  };

  // sort by Climate
  const handleSortedClimate = () => {
    setLocations(
      shallowCopy.sort((climateA, climateB) => {
        if (climateA.climate.toLowerCase() < climateB.climate.toLowerCase()) {
          return -1;
        } else if (
          climateA.climate.toLowerCase() > climateB.climate.toLowerCase()
        ) {
          return 1;
        }
        return 0;
      })
    );
  };

  // const comparator = (a, b) => {
  //   return a.name.toLowerCase() - b.name.toLowerCase();
  // };
  // console.log("sorted", locations.sort(comparator));

  //! fix the order of the buttons
  return (
    <div className="background">
      {" "}
      <div className="button">
        {" "}
        <h1> List of Locations</h1>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Hide Locations" : "Show Locations"}
        </button>
        {show ? (
          <button onClick={handleSortedNames}>Sort by Name</button>
        ) : null}
        {show ? (
          <button onClick={handleSortedClimate}>Sort by Climate</button>
        ) : null}
      </div>
      <div className="locations">
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
          })}{" "}
      </div>{" "}
    </div>
  );
}
